
export const ADD_SESSION = "ADD_SESSION";
export const SUB_SESSION = "SUB_SESSION";
export const RESET_SESSION = "RESET_SESSION";
export const PAUSE_SESSION = "PAUSE_SESSION";
export const RESUME_SESSION = "RESUME_SESSION";

export const ADD_BREAK = "ADD_BREAK";
export const SUB_BREAK = "SUB_BREAK";
export const RESET_BREAK = "RESET_BREAK";
export const PAUSE_BREAK = "PAUSE_BREAK";
export const RESUME_BREAK = "RESUME_BREAK";

export const SWITCH_ACTIVE_TIMER = "SWITCH_ACTIVE_TIMER";


export const addSessionMinute = () => {
    return {
        type: ADD_SESSION
    }
}

export const subSessionMinute = () => {
    return {
        type: SUB_SESSION

    }
}

export const resetSessionTimer = () => {
    return {
        type: RESET_SESSION

    }
}

export const pauseSessionTimer = () => {
    return {
        type: PAUSE_SESSION

    }
}

export const resumeSessionTimer = () => {
    return {
        type: RESUME_SESSION
    }
}





export const addBreakMinute = () => {
    return {
        type: ADD_BREAK
    }
}

export const subBreakMinute = () => {
    return {
        type: SUB_BREAK

    }
}

export const resetBreakTimer = () => {
    return {
        type: RESET_BREAK

    }
}

export const pauseBreakTimer = () => {
    return {
        type: PAUSE_BREAK

    }
}

export const resumeBreakTimer = () => {
    return {
        type: RESUME_BREAK
    }
}




export const switchActiveTimer = () => {
    return {
        type: SWITCH_ACTIVE_TIMER
    }
}