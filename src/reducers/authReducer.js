const initState = {
    authError: null,
    list: [],
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                authError: null,
            }
        case 'SIGNOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        /*case 'ADDGAME_START':
            return {
                ...state,
                fbfetch: true,
            }
        case 'ADDGAME_SUCCESS':
            return {
                ...state,
                fbfetch: false,
            }

        case 'ADDGAME_ERROR':
            return state

        case 'FETCHFAV_START':
            return {
                ...state,
                fbfetch: true,
            }
        case 'FETCHFAV_SUCCESS':
            return {
                ...state,
                list: action.payload,
                fbfetch: false,
            }
        case 'DELETEFAV_START':
            return {
                ...state,
                fbfetch: true,
            }
        case 'DELETEFAV_SUCCESS':
            return {
                ...state,
                fbfetch: false,
            }*/
        default:
            return state
    }
};

export default authReducer;