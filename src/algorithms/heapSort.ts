import { swap } from '../utils/algoUtils';

export const heapSortHelper = (arr: number[]) : number[] => {
    const animations = [];
    heapSort(arr, animations);
    return animations;
}

/* 
Recursive method to insert nodes into max heap
arr: array, 
n: total nodes, 
i: current node being considered as max (root)
animations: animations array
*/
const heapify = (arr: number[], n: number, i: number, animations: any[]): void => {
    /*
    For a zero-indexed array rep. of max heap:
    parent @ Math.floor((i - 1) / 2)
    left child @ 2i + 1
    right child @ 2i + 2
    */

    let largest = i;
    const left = 2 * i + 1,
    right = 2 * i + 2;

    //left child was larger
    if (left < n && arr[left] > arr[largest]) {
        animations.push([left, largest, true])
        animations.push([left, largest])
        largest = left;
    }

    //right child was larger
    if (right < n && arr[right] > arr[largest]) {
        animations.push([right, largest, true])
        animations.push([right, largest])
        largest = right;
    }

    //if swapped, recursively call heapify on child node
    if (largest !== i) {
        animations.push([i, largest, false])
        animations.push([i, largest])
        animations.push([i, arr[largest], largest, arr[i]])
        animations.push([i, largest])
        swap(arr, i, largest);
        heapify(arr, n, largest, animations)
    }
}

/*
Recursively sort array by extracting max heap root.
Store it at the end of the array and heapify the remaining array, repeat.
*/
const heapSort = (arr: number[], animations: any[]): void => {
    //rearrange array into heap structure
    const start = Math.floor(arr.length / 2) - 1;

    for (let i = start; i >= 0; i--) {
        heapify(arr, arr.length, i, animations)
    }

    //extract n roots, and heapify new root (former last index)
    for (let i = arr.length - 1; i >= 0; i-- ) {
        animations.push([0, arr[i], i, arr[0]])
        animations.push([0, i, true])
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp
        heapify(arr, i, 0, animations); // size is one less as we remove nodes
    }
}

