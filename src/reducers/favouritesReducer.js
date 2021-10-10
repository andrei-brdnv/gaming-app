import {
    ADD_FAVOURITE,
    FETCH_FAVOURITE,
    DELETE_FAVOURITE,
    START,
    SUCCESS,
    FAIL
} from "../utils/constants";

const initState = {
    list: [],
    fetchFavourite: true,
}

const favouritesReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_FAVOURITE + START:
            return state
        case ADD_FAVOURITE + SUCCESS:
            return {
                ...state,
                fetchFavourite: true,
            }

        case ADD_FAVOURITE + FAIL:
            return state

        case FETCH_FAVOURITE + START:
            return {
                ...state,
                fetchFavourite: true,
            }
        case FETCH_FAVOURITE + SUCCESS:
            return {
                ...state,
                list: [...payload],
                fetchFavourite: false,
            }
        case DELETE_FAVOURITE + START:
            return state
        case DELETE_FAVOURITE + SUCCESS:
            return {
                ...state,
                fetchFavourite: true,
            }

        default:
            return state
    }
}

export default favouritesReducer