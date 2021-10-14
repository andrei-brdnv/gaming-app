import axios from "axios";
import { gameDetailURL } from "../../api";
import {
    ADD_FAVOURITE,
    DELETE_FAVOURITE,
    FETCH_FAVOURITE,
    START,
    SUCCESS,
    FAIL
} from "../../utils/constants";

export const addToFavourite = (gameId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        dispatch({
            type: ADD_FAVOURITE + START
        })

        firestore.collection('users').doc(userId).collection('games').add({
            game: gameId,
            addedAt: new Date(),
        })
            .then(() => {
                dispatch({ type: ADD_FAVOURITE + SUCCESS })
            })
            .catch(err => {
                dispatch({ type: ADD_FAVOURITE + FAIL, err })
            })
    }
}

export const fetchFavourites = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        dispatch({
            type: FETCH_FAVOURITE + START
        })

        firestore.collection('users').doc(userId).collection('games').orderBy('addedAt', 'desc').get()
            .then(res => {
                const arr = []
                res.forEach(document => {
                    arr.push(document.data().game)
                })

                return arr

            })
            .then(res => {
                let requests = res.map(id => axios.get(gameDetailURL(id)))

                Promise.all(requests)
                    .then(responses => {
                        return responses.map(res => res.data)
                    })
                    .then(res => {
                        dispatch({
                            type: FETCH_FAVOURITE + SUCCESS,
                            payload: res
                        })
                    })
            })
    }
}


export const deleteFavourite = (gameId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        dispatch({
            type: DELETE_FAVOURITE + START
        })

        firestore.collection('users').doc(userId).collection('games').where('game', '==', gameId).get()
            .then(res => {
                res.forEach(doc => {
                    doc.ref.delete()
                })
            })
            .then(() => {
                dispatch({ type: DELETE_FAVOURITE + SUCCESS })
            })
    }
}