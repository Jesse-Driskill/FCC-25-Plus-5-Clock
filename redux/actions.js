
export const ADD_SESSION = "ADD_SESSION";
export const SUB_SESSION = "SUB_SESSION";
export const RESET_SESSION = "RESET_SESSION";

export const ADD_BREAK = "ADD_BREAK";
export const SUB_BREAK = "SUB_BREAK";
export const RESET_BREAK = "RESET_BREAK";

export const SWITCH_ACTIVE_TIMER = "SWITCH_ACTIVE_TIMER";
export const SET_ACTIVE_TIMER_DURATION = "SET_ACTIVE_TIMER_DURATION";
export const DECREMENT_ACTIVE_TIMER_DURATION = "DECREMENT_ACTIVE_TIMER_DURATION";
export const PAUSE_ACTIVE_TIMER = "PAUSE_ACTIVE_TIMER";
export const RESUME_ACTIVE_TIMER = "RESUME_ACTIVE_TIMER";
export const SET_ACTIVE_TIMER = "SET_ACTIVE_TIMER";


export const SWITCH_UPDATE_STATUS = "SWITCH_UPDATE_STATUS";
export const SET_UPDATE_STATUS = "SET_UPDATE_STATUS";

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





export const switchActiveTimer = () => {
    return {
        type: SWITCH_ACTIVE_TIMER
    }
}

export const decrementActiveTimerDuration = () => {
    return {type: DECREMENT_ACTIVE_TIMER_DURATION}
}

export const setActiveTimerDuration = (seconds) => {
    return {
        type: SET_ACTIVE_TIMER_DURATION, durationInSeconds: seconds
    }
}

export const resumeActiveTimer = () => {
    return {
        type: RESUME_ACTIVE_TIMER
    }
}

export const pauseActiveTimer = () => {
    return {
        type: PAUSE_ACTIVE_TIMER
    }
}

export const setActiveTimer = (timerName) => {
    // console.log("ACTIVE TIMER SET")
    return {
        type: SET_ACTIVE_TIMER_DURATION, timerName: timerName
    }
}

export const switchUpdateStatus = () => {
    return {
        type: SWITCH_UPDATE_STATUS
    }
}

export const setUpdateStatus = (bool) => {
    return {
        type: SET_UPDATE_STATUS, status: bool
    }
}


