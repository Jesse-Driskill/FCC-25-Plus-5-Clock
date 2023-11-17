
export const ADD = "ADD";
export const SUB = "SUB";
export const RESET = "RESET";
export const PAUSE = "PAUSE";
export const RESUME = "RESUME";


export const addMinute = () => {
    return {
        type: ADD

    }
}

export const subMinute = () => {
    return {
        type: SUB

    }
}

export const resetTimer = () => {
    return {
        type: RESET

    }
}

export const pauseTimer = () => {
    return {
        type: PAUSE

    }
}

export const resumeTimer = () => {
    return {
        type: RESUME
    }
}