import {FETCH_DETAIL, START, SUCCESS} from "../utils/constants";

const initState = {
    game: { platforms: [] },
    screenshot: { results: [] },
    movie: { results: [] },
    fetchingDetail: true
}

const detailReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_DETAIL + START:
            return {
                ...state,
                fetchingDetail: true,
            }

        case FETCH_DETAIL + SUCCESS:
            return {
                ...state,
                game: payload.game,
                screenshot: payload.screenshot,
                movie: payload.movie,
                fetchingDetail: false,
            }
        /*case GET_DETAIL:
            return {
                ...state,
                game: payload.game,
                screenshot: payload.screenshot,
                movie: payload.movie,
                isLoading: false,
            }
        case LOADING_DETAIL:
            return {
                ...state,
                isLoading: true,
            }*/
        default:
            return state
    }
}

export default detailReducer