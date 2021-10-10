import {CLOSE, TOGGLE_OPEN} from "../utils/constants";

const initState = {
    open: false
}

const uiReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case TOGGLE_OPEN:
            return {
                ...state,
                open: !state.open
            }
        case CLOSE:
            return {
                ...state,
                open: false
            }
        default:
            return {...state}
    }
}

export default uiReducer