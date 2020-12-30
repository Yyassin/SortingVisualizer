export const insertionSortHelper = (arr: number[]): number[] => {
    const animations = [];
    insertionSort(arr, animations);
    return animations;
}

/*
Sort array by walking through each element and inserting it
in its place in the so-far sorted array behind it by shifting
the corresponding elements forward.
*/
const insertionSort = (arr: number[], animations: any[]): void => {
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        //shift current index back until
        //the index ahead of it is greater, hence in so-far sorted position.
        while (j >= 0 && key < arr[j]) {
            animations.push([j, i, false]);
            animations.push([j, i]);
            animations.push([j + 1, arr[j]]);
            arr[j + 1] = arr[j--];
        }

        animations.push([i, i, true]);
        animations.push([i, i]);
        animations.push([j + 1, key]);
        arr[j + 1] = key;
    }
}
