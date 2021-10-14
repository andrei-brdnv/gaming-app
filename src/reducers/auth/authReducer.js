import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from "../../utils/constants";

const initialState = {
    authError: null,
    list: [],
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                authError: null,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                authError: 'Login failed'
            }
        case SIGNOUT_SUCCESS:
            return state
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
};

export default authReducer;