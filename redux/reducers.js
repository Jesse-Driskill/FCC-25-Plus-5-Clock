import { ADD, SUB, RESET, RESUME, PAUSE } from "./actions";


export const sessionReducer = (state = { duration: 25, running: false}, action) => {
    switch (action.type) {
        case ADD:
            return {
                duration: state.duration + 1,
                running: false
            }
            break;
        case SUB:
            return {
                duration: state.duration - 1,
                running: false
            }
            break;
        case RESET:
            return {
                duration: 25, 
                running: false
            }
            break;
        case PAUSE:
            return {
                duration: state.duration,
                running: false
            }
            break;
        case RESUME:
            return {
                duration: state.duration,
                running: true
            }
            break;
        default:
            return state;
    }
}

export const breakReducer = (state = { duration: 5, running: false }, action) => {
    switch (action.type) {
        case ADD:
            return {
                duration: state.duration + 1,
                running: false
            }
            break;
        case SUB:
            return {
                duration: state.duration - 1,
                running: false
            }
            break;
        case RESET:
            return {
                duration: 5, 
                running: false
            }
            break;
        case PAUSE:
            return {
                duration: state.duration,
                running: false
            }
            break;
        case RESUME:
            return {
                duration: state.duration,
                running: true
            }
            break;
        default:
            return state;
    }
}