import { FETCH_DETAIL, START, SUCCESS } from "../../utils/constants";

const initialState = {
    game: { platforms: [] },
    screenshot: { results: [] },
    //movie: { results: [] },
    fetchingDetail: true
}

const detailReducer = (state = initialState, action) => {
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
                //movie: payload.movie,
                fetchingDetail: false,
            }
        default:
            return state
    }
}

export default detailReducer