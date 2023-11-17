
import {
    ADD_BREAK, ADD_SESSION, SUB_BREAK, SUB_SESSION, RESET_BREAK, RESET_SESSION, RESUME_SESSION, RESUME_BREAK, PAUSE_SESSION, PAUSE_BREAK, SWITCH_ACTIVE_TIMER
} from "./actions";


export const sessionReducer = (state = { duration: 25, running: false}, action) => {
    switch (action.type) {
        case ADD_SESSION:
            return {
                duration: state.duration + 1,
                running: false
            }
            break;
        case SUB_SESSION:
            return {
                duration: state.duration - 1,
                running: false
            }
            break;
        case RESET_SESSION:
            return {
                duration: 25, 
                running: false
            }
            break;
        case PAUSE_SESSION:
            return {
                duration: state.duration,
                running: false
            }
            break;
        case RESUME_SESSION:
            return {
                duration: state.duration,
                running: true
            }
            break;
        default:
            return state;
    }
}

export const breakReducer = (state = { duration: 5, running: false}, action) => {
    switch (action.type) {
        case ADD_BREAK:
            return {
                duration: state.duration + 1,
                running: false
            }
            break;
        case SUB_BREAK:
            return {
                duration: state.duration - 1,
                running: false
            }
            break;
        case RESET_BREAK:
            return {
                duration: 5, 
                running: false
            }
            break;
        case PAUSE_BREAK:
            return {
                duration: state.duration,
                running: false
            }
            break;
        case RESUME_BREAK:
            return {
                duration: state.duration,
                running: true
            }
            break;
        default:
            return state;
    }
}

export const activeTimerReducer = (state = { activeTimer: 1}, action) => {
    switch (action.type) {
        case SWITCH_ACTIVE_TIMER:
            return {
                activeTimer: state.activeTimer * -1
            }
            break;
        default:
            return state
    }
}