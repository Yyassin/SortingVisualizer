import React from 'react';
import { NavPropsSchema } from '../utils/types';
import { Ul } from './styles';

export const NavItems: React.FC<NavPropsSchema> = ({ open, handleChange }: NavPropsSchema) => {
    return (
        <Ul className="menu" open={open}>
            <div className="menu">
                <h1 className="menu">Sorting Visualizer</h1>
            </div>
            <button className="menu" onClick={() => handleChange('b')}>
                Bubble Sort
            </button>
            <button className="menu" onClick={() => handleChange('i')}>
                Insertion Sort
            </button>
            <button className="menu" onClick={() => handleChange('s')}>
                Selection Sort
            </button>
            <button className="menu" onClick={() => handleChange('q')}>
                Quick Sort
            </button>
            <button className="menu" onClick={() => handleChange('m')}>
                Merge Sort
            </button>
            <button className="menu" onClick={() => handleChange('h')}>
                Heap Sort
            </button>
        </Ul>
    );
};
