import React, { ReactElement } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { NavBar } from './NavBar';
import { SortingVisualizerSchema } from '../utils/types';
import { Footer } from './Footer';
import { VisualizerStyled } from './styles';

import { randomIntFromInterval } from '../utils/algoUtils';
import { animationsHelper, colorChangeHelper, colorHelper } from '../utils/animationUtils';

export default class SortingVisualizer extends React.Component<unknown, SortingVisualizerSchema> {
    constructor(props: SortingVisualizerSchema) {
        super(props);

        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.sort = this.sort.bind(this);

        this.state = {
            array: [],
            numBlocks: isMobile ? 30 : 35,
            animationSpeed: 10,
            running: false,
            max: isMobile ? 40 : window.innerWidth < 600 ? 35 : 200,
        };
    }

    componentDidMount = (): void => {
        this.resetArray();
    };

    clearAllTimeouts = (windowObject: Window & typeof globalThis): void => {
        let id = windowObject.setTimeout(null, 1);

        while (id--) {
            windowObject.clearTimeout(id);
        }
    };

    resetArray = (key?: boolean): void => {
        const array = [];
        const height = isMobile && !isTablet ? 130 : 500;

        for (let i = 0; i < this.state.numBlocks; i++) {
            array.push(randomIntFromInterval(5, height));
        }

        this.setState({ array });
        this.clearAllTimeouts(window);

        if (key) {
            this.reset();
        }
    };

    sorted = (): void => {
        const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
        const ANIMATION_SPEED = 5;
        const delay =
            ((((this.state.numBlocks - 1) * this.state.numBlocks) / 2 - 1) * ANIMATION_SPEED) /
            (2 * this.state.numBlocks);

        for (let i = 0; i < this.state.numBlocks; i++) {
            const barStyle = arrayBars[i].style;
            setTimeout(() => {
                barStyle.backgroundColor = 'green';
                setTimeout(() => {
                    barStyle.backgroundColor = '#b08ffc';
                }, delay + i * ANIMATION_SPEED);
            }, i * ANIMATION_SPEED);
        }

        this.setState({ running: false });
    };

    reset = (): void => {
        const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
        const ANIMATION_SPEED = 5;
        const delay =
            ((((this.state.numBlocks - 1) * this.state.numBlocks) / 2 - 1) * ANIMATION_SPEED) /
            (2 * this.state.numBlocks);

        for (let i = 0; i < this.state.numBlocks; i++) {
            const barStyle = arrayBars[i].style;
            setTimeout(() => {
                barStyle.backgroundColor = '#e1d4ff';
                setTimeout(() => {
                    barStyle.backgroundColor = '#b08ffc';
                }, delay + i * ANIMATION_SPEED);
            }, i * ANIMATION_SPEED);
        }

        this.setState({ running: false });
    };

    asyncResetColor = (): void => {
        const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < this.state.numBlocks; i++) {
            const barStyle = arrayBars[i].style;
            barStyle.backgroundColor = '#b08ffc';
        }
    };

    handleNumChange = (newValue: number): void => {
        if (newValue !== this.state.numBlocks) {
            this.setState({ numBlocks: newValue });
            this.resetArray();
            this.asyncResetColor();
        }
    };

    handleSpeedChange = (newValue: number): void => {
        newValue = 200 - newValue;
        if (newValue !== this.state.animationSpeed) {
            this.setState({ animationSpeed: newValue });
            this.asyncResetColor();
        }
    };

    sort = (key: string): void => {
        this.setState({ running: true }, () => this.sortAnim(key));
    };

    sortAnim = (key: string): void => {
        const animations = animationsHelper(key, this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = colorChangeHelper(key, animations, i);
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = (animations[i] as unknown) as [number, number];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const [color, color2] = colorHelper(key, animations, i);

                setTimeout(() => {
                    key === 'm'
                        ? (barOneStyle.backgroundColor = color2 || color)
                        : (barOneStyle.backgroundColor = color);
                    barTwoStyle.backgroundColor = color2 || color;
                }, i * this.state.animationSpeed);
            } else {
                setTimeout(() => {
                    if (['m', 'i'].includes(key)) {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    } else {
                        const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barOneStyle.height = `${newHeight1}px`;
                        barTwoStyle.height = `${newHeight2}px`;
                    }

                    if (i === animations.length - 1) {
                        this.sorted();
                    }
                }, i * this.state.animationSpeed);
            }
        }
    };

    render(): ReactElement {
        const { array } = this.state;
        const width = isMobile
            ? 200 / this.state.numBlocks
            : this.state.numBlocks > 30
            ? 500 / this.state.numBlocks
            : 500 / 30;

        return (
            <VisualizerStyled>
                <NavBar
                    resetArray={() => this.resetArray(true)}
                    sort={this.sort}
                    handleSpeedChange={this.handleSpeedChange}
                    handleNumChange={this.handleNumChange}
                    animationSpeed={this.state.animationSpeed}
                    numBlocks={this.state.numBlocks}
                    running={this.state.running}
                    max={this.state.max}
                />
                <div className="array-container">
                    {array.map((value, index) => (
                        <div className="array-bar" key={index} style={{ height: `${value}px`, width: `${width}px` }} />
                    ))}
                </div>
                <Footer />
            </VisualizerStyled>
        );
    }
}
