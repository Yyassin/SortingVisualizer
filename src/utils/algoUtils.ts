export const swap = (arr: number[], a: number, b: number) : void => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

export const randomIntFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);