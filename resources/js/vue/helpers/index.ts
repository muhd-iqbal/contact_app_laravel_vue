export const setError = (err: { [key: string]: string }, key: string, msg: string) => {
    return {
        ...err,
        [key]: msg
    }
}
