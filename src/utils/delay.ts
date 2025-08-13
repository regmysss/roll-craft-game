export const delay = (fn: () => void, ms: number) => {
    return setTimeout(fn, ms);
}