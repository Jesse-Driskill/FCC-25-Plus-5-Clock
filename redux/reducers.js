
import {
    ADD_BREAK, ADD_SESSION, SUB_BREAK, SUB_SESSION, RESET_BREAK, RESET_SESSION, SWITCH_ACTIVE_TIMER, 
    SET_ACTIVE_TIMER_DURATION, DECREMENT_ACTIVE_TIMER_DURATION, PAUSE_ACTIVE_TIMER, RESUME_ACTIVE_TIMER
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

export const activeTimerReducer = (state = { activeTimer: 1, durationInSeconds: 1500, running: false}, action) => {
    switch (action.type) {
        //dispatch switch active timer then set active timer duration to properly change timers
        case SWITCH_ACTIVE_TIMER:
            return {
                activeTimer: state.activeTimer * -1
            }
            break;
        case SET_ACTIVE_TIMER_DURATION: {
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: action.durationInSeconds,
                running: false
            }
            break;
        }
        case DECREMENT_ACTIVE_TIMER_DURATION: {
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds - 1,
                running: true
            }
            break;
        }
        case PAUSE_ACTIVE_TIMER: {
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds,
                running: false
            }
            break;
        }
        case RESUME_ACTIVE_TIMER: {
            return {
                activeTimer: state.activeTimer,
                durationInSeconds: state.durationInSeconds,
                running: true
            }
            break;
        }
        default:
            return state
    }
}