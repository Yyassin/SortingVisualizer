export const mergeSortHelper = (arr: number[]): number[] => {
    const aux = [...arr];
    const animations = [];
    mergeSort(arr, aux, 0, arr.length - 1, animations);
    return animations;
}

/*
Merge implementation using auxiliary array to maintain indices.
Merges array1: low->mid, array2: mid+1->high.
Store merge results in auxiliary array then copy to original array.
*/
const merge = (arr: number[], aux: number[], low: number, 
    mid: number, high: number, animations: any[]): void => {
    let k = low, 
        i = low,
        j = mid + 1;

    const finalMerge = 2 * (j - k) >= arr.length;

        //Merge the two halves, storing results in auxiliary.
        while (i <= mid && j <= high) {
            animations.push([i, j])
            finalMerge ? animations.push([i, j, 'f']) : animations.push([i, j])
    
            if (arr[i] <= arr[j]) {
                animations.push([k, arr[i]]);
                aux[k++] = arr[i++];
            } else {
                animations.push([k, arr[j]]);
                aux[k++] = arr[j++];
            }
        }
     
        //Complete merging first half incase the second completes
        //first. Second is already in place if first half completes
        //first.
        while(i <= mid) {
            animations.push([k, i])
            animations.push([k, i])
            animations.push([k, arr[i]])
            aux[k++] = arr[i++];
        }

        //Copy merge result back into original array.
        for (let i = low; i <= high; i++) {
            arr[i] = aux[i];
        }
}

/*
Recursively sort array by halving until reaching until cells. 
Merge and sort 'adjacent' unit cells to rebuild the sorted array.
*/
const mergeSort = (arr: number[], aux: number[], low: number,
    high: number, animations: any[]): void => {
    if (low >= high) {
        return;
    }

    const mid = Math.floor( low + (high - low) / 2);

    //Merge sort on lower and upper halves.
    mergeSort(arr, aux, low, mid, animations);
    mergeSort(arr, aux, mid + 1, high, animations);

    //Merge the result
    merge(arr, aux, low, mid, high, animations);
}