import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Burger } from './Burger';
import { NavBarSchema } from '../utils/types';
import { Button, NavBarStyled } from './styles';

import './styles';

export const NavBar: React.FC<NavBarSchema> = (props: NavBarSchema) => {
    const [algorithm, setAlgorithm] = useState('Bubble Sort');

    const handleChange = (key: string): void => {
        switch (key) {
            case 'b':
                setAlgorithm('Bubble Sort');
                break;
            case 'i':
                setAlgorithm('Insertion Sort');
                break;
            case 's':
                setAlgorithm('Selection Sort');
                break;
            case 'q':
                setAlgorithm('Quick Sort');
                break;
            case 'm':
                setAlgorithm('Merge Sort');
                break;
            case 'h':
                setAlgorithm('Heap Sort');
                break;
            default:
                break;
        }
    };

    return (
        <NavBarStyled>
            <div className="slider-wrapper">
                <div className="number-slider">
                    <Typography id="number" gutterBottom>
                        Data Points
                    </Typography>
                    <Slider
                        value={props.numBlocks}
                        aria-label="number"
                        onChange={(event, newValue) => props.handleNumChange(newValue)}
                        disabled={props.running}
                        min={5}
                        max={props.max}
                    />
                </div>
                <div className="speed-slider">
                    <Typography id="speed" gutterBottom>
                        Animation Speed
                    </Typography>
                    <Slider
                        value={props.animationSpeed}
                        aria-label="speed"
                        track="inverted"
                        scale={(x) => -x}
                        onChange={(event, newValue) => props.handleSpeedChange(newValue)}
                        disabled={props.running}
                        min={0}
                        max={199}
                    />
                </div>
                <Button className="off" onClick={() => props.resetArray()}>
                    New Array
                </Button>
                <Button
                    onClick={() => props.sort(algorithm.charAt(0).toLowerCase())}
                    className={props.running ? 'disabled off' : 'active off'}
                    disabled={props.running}
                >
                    Sort Array
                </Button>
            </div>
            <h2>{algorithm}</h2>

            <Burger handleChange={handleChange} />
        </NavBarStyled>
    );
};
