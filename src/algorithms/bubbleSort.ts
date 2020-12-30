import { swap } from '../utils/algoUtils';

export const bubbleSortHelper = (arr: number[]) : number[] => {
    const animations = [];
    bubbleSort(arr, animations);
    return animations;
}

/*
Iteratively sort array by swapping any pairs where the first 
adjacent element is larger than the second. Walk through the 
array until no swaps occur -> sorted.
*/
const bubbleSort = (arr: number[], animations: any[]) : void => {
    let sorted = false;
    let round = 0;
    let finalSorted: number;
    const length = arr.length;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < length - 1- round; i++) {
            if (arr[i] > arr[i + 1]) {
                animations.push([i, i + 1, true]);
                i === arr.length - 2 - round ? animations.push([i, i + 1, 'f']) : animations.push([i, i + 1])
                animations.push([i, arr[i + 1], i + 1, arr[i]]);
                
                sorted = false;
                swap(arr, i, i + 1);
            } else {
                animations.push([i, i + 1, false]);

                if (i === length - 2 - round) {
                    animations.push([i, i + 1, 'f'])
                    finalSorted = i + 1;
                } else {
                    animations.push([i, i + 1])
                }
                animations.push([i, arr[i], i + 1, arr[i + 1]])
            }
        }
        round++;
    }
    for (let j = finalSorted; j >= 0; j--) {
        animations.push([j, j, 'f'])
        animations.push([j, j, 'f'])
        animations.push([j, arr[j], j, arr[j]])
    } 
}