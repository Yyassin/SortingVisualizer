import { swap } from "../utils/algoUtils";

export const selectionSortHelper = (arr: number[]): number[] => {
    const animations = [];
    selectionSort(arr, animations);
    return animations;
}

/*
Sort the array by dividing it into two halves: left as sorted, right
unsorted. Walk through the unsorted portion and repeatedly find the 
minimum element and add it to the next index in the sorted portion until
fully sorted.
*/
const selectionSort = (arr, animations) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let j;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                animations.push([min, j, true])
                animations.push([min, j])
                min = j;
            } else {
                animations.push([min, j, false])
                animations.push([min, j])
            }
        }
        
        if (min !== i) {
            animations.push([i, arr[min], min, arr[i]]);
            animations.push([i, min])
            swap(arr, i, min);
        } else {
            animations.push([i, arr[i], min, arr[min]]);
            animations.push([min, i])
        }

        animations.push([i, i])
        animations.push([i, i, 'f'])
    }
}