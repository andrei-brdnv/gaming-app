import {
    FETCH_FAVOURITE,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS, SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    START
} from "../../utils/constants";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {

        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => {
                dispatch({type: LOGIN_SUCCESS});
            })
            .then(() => {
                dispatch({ type: FETCH_FAVOURITE + START })
            })
            .catch((err) => {
                dispatch({type: LOGIN_ERROR, err});
            });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: SIGNOUT_SUCCESS })
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                userName: newUser.userName
            })
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS })
        }).then(() => {
            dispatch({ type: FETCH_FAVOURITE + START })
        }).catch(err => {
            dispatch({ type: SIGNUP_ERROR, err })
        })
    }
}