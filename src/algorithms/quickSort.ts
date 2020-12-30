import { swap } from "../utils/algoUtils";

export const quickSortHelper = (arr: number[]) : number[] => {
    const animations = [];
    quickSort(arr, 0, arr.length - 1, animations);
    return animations;
}

/*
Consider final index in segment as pivot. Partition the segment
around this pivot, swapping elements and returning the index
such that the partitioned element is in its sorted position: i.e 
greater than all left indices and less than all right indices.
*/
const partition = (arr: number[], low: number, high: number, animations: any[]): number => {
    const pivotVal = arr[high];
    let pivotIdx = low;
    
    //Pivot index always points to sorted position so far.
    //If i < pivot value, then we increment the pivot index and swap i 
    //with the index's former value since it may be larger (if not equal).
    for (let i = low; i < high; i++) {
        if (arr[i] < pivotVal) {
            animations.push([i, high, true])
            animations.push([i, high])

            animations.push([i, arr[pivotIdx], pivotIdx, arr[i]]);

            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
            pivotIdx++;
            
        } else {
            animations.push([i, high, false])
            animations.push([i, high])

            animations.push([i, arr[i], pivotIdx, arr[pivotIdx]]);
        }
    }    

    //Move the pivot in its sorted position.
    animations.push([pivotIdx, pivotIdx, 'f'])
    animations.push([pivotIdx, arr[high], high, arr[pivotIdx]]);

    swap(arr, pivotIdx, high);
    return pivotIdx;
}

/*
Recursively sort array by choosing pivot and placing it in its sorted position.
Call quicksort on the resulting two sub-arrays.
*/
const quickSort = (arr: number[], low: number, high: number, animations: any[]): void => {
    if (low >= high) {
        return;
    }

        const pivot = partition(arr, low, high, animations);
        quickSort(arr, low, pivot - 1, animations);
        quickSort(arr, pivot + 1, high, animations);
}


