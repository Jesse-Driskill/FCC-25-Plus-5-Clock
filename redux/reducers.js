
import {
    ADD_BREAK, ADD_SESSION, SUB_BREAK, SUB_SESSION, RESET_BREAK, RESET_SESSION, SWITCH_ACTIVE_TIMER, 
    SET_ACTIVE_TIMER_DURATION, DECREMENT_ACTIVE_TIMER_DURATION, PAUSE_ACTIVE_TIMER, RESUME_ACTIVE_TIMER, SET_ACTIVE_TIMER,
    SWITCH_UPDATE_STATUS, SET_UPDATE_STATUS
} from "./actions";


export const sessionReducer = (state = { durationInSeconds: 1500 }, action) => {
    switch (action.type) {
        case ADD_SESSION:
            return {
                durationInSeconds: state.durationInSeconds + 60,
            }
            break;
        case SUB_SESSION:
            return {
                durationInSeconds: state.durationInSeconds - 60,
            }
            break;
        case RESET_SESSION:
            return {
                durationInSeconds: 1500, 
            }
            break;
        default:
            return state;
    }
}

export const breakReducer = (state = { durationInSeconds: 300 }, action) => {
    switch (action.type) {
        case ADD_BREAK:
            return {
                durationInSeconds: state.durationInSeconds + 60,
            }
            break;
        case SUB_BREAK:
            return {
                durationInSeconds: state.durationInSeconds - 60,
            }
            break;
        case RESET_BREAK:
            return {
                durationInSeconds: 300, 
            }
            break;
        default:
            return state;
    }
}

export const activeTimerReducer = (state = { activeTimer: "Session", durationInSeconds: 1500, running: false}, action) => {
    switch (action.type) {
        //dispatch switch active timer then set active timer duration to properly change timers
        case SWITCH_ACTIVE_TIMER:

            let newTimer;

            if (state.activeTimer === "Session") {
                newTimer = "Break";
            } else {
                newTimer = "Session";
            }

            return {
                activeTimer: newTimer
            }
            break;
        case SET_ACTIVE_TIMER_DURATION:
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: action.durationInSeconds,
                running: false
            }
            break;
        case DECREMENT_ACTIVE_TIMER_DURATION:
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds - 1,
                running: true
            }
            break;
        case PAUSE_ACTIVE_TIMER:
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds,
                running: false
            }
            break;
        case RESUME_ACTIVE_TIMER:
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds,
                running: true
            }
            break;
        case SET_ACTIVE_TIMER:
            return {
                activeTimer: action.timerName
            }
            break;
        default:
            return state
    }
}

export const updateStatusReducer = (state = {updating: false}, action) => {
    switch (action.type) {
        case SWITCH_UPDATE_STATUS:
            return {
                updating: !state.updating
            }
        case SET_UPDATE_STATUS:
            return {
                updating: action.status
            }
            break
        default:
            return state;
    }
}