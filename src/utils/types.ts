export type SortingVisualizerSchema = {
    array: number[],
    numBlocks: number,
    animationSpeed: number,
    running: boolean,
    max: number
}

export type NavPropsSchema = {
    open: boolean,
    handleChange?: (key: string) => void
}

export type BurgerSchema = {
    handleChange?: (key: string) => void
}

export type NavBarSchema = {
    numBlocks: number,
    running: boolean,
    max: number,
    animationSpeed: number,
    resetArray: () => void,
    sort: (key: string) => void,
    handleSpeedChange: (newValue: number | number[]) => void,
    handleNumChange: (newValue: number | number[]) => void
}