import { bubbleSortHelper } from '../algorithms/bubbleSort';
import { insertionSortHelper } from '../algorithms/insertionSort';
import { selectionSortHelper } from '../algorithms/selectionSort';
import { quickSortHelper } from '../algorithms/quickSort';
import { mergeSortHelper } from '../algorithms/mergeSort';
import { heapSortHelper } from '../algorithms/heapSort';

export const animationsHelper = (key: string, array: number[]): any[] => {
    switch (key) {
        case 'b':
            return bubbleSortHelper(array);
        case 'i':
            return insertionSortHelper(array);
        case 's':
            return selectionSortHelper(array);
        case 'q':
            return quickSortHelper(array);
        case 'm':
            return mergeSortHelper(array);
        case 'h':
            return heapSortHelper(array);
        default:
            break;
    }
};

export const colorChangeHelper = (key: string, animations: any[], i: number): boolean => {
    if (['b', 'm', 'i'].includes(key)) {
        return i % 3 !== 2;
    } else {
        return animations[i].length < 4;
    }
};

export const colorHelper = (key: string, animations: any[], i: number): string[] => {
    let color = '#b08ffc',
        color2 = null;

    if (['b', 'm', 'i'].includes(key)) {
        if (i % 3 === 0) {
            if (animations[i][2]) {
                key === 'm' ? (color = '#6A75AE') : (color = 'red');
            } else {
                color = 'green';
            }
        } else if (animations[i][2] === 'f' && key != 'i') {
            color2 = '#6A75AE';
        }
    } else if (['h', 's'].includes(key)) {
        if (i % 2 === 0) {
            if (animations[i][2]) {
                color = 'red';
            } else {
                color = 'green';
            }
        } else if (animations[i][2]) {
            color = '#6A75AE';
        }
    } else {
        //quicksort
        if (animations[i].length === 3) {
            if (animations[i][2] === 'f') {
                color2 = '#6A75AE';
            } else if (animations[i][2]) {
                color = 'red';
            } else {
                color = 'green';
            }
        }
    }

    return [color, color2];
};