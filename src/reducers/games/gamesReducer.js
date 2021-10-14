import {
    FETCH_SEARCHED,
    CLEAR_SEARCHED,
    FETCH_UPCOMING,
    START,
    SUCCESS,
    FETCH_POPULAR,
    FETCH_NEWGAMES,
    RESET_SEARCHED,
    FETCH_AUTOCOMPLETE_SEARCH
} from "../../utils/constants";

const initialState = {
    upcoming: [],
    fetchingUpcoming: true,
    totalPagesUpcoming: 0,
    upcomingCurrentPage: 1,

    popular: [],
    fetchingPopular: true,
    totalPagesPopular: 0,
    popularCurrentPage: 1,

    newGames: [],
    fetchingNewGames: true,
    totalPagesNewGames: 0,
    newGamesCurrentPage: 1,

    searched: [],
    searchedName: '',
    fetchingSearched: false,
    totalPagesSearched: 0,
    searchedCurrentPage: 1,

    autocompleteSearch: [],
    autocompleteCount: 0,

    gameSeries: [],
    fetchingGameSeries: false,

    loaded: false,
}

const gamesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_UPCOMING + START:
            return {
                ...state,
                fetchingUpcoming: true,
            }
        case FETCH_UPCOMING + SUCCESS:
            return {
                ...state,
                upcoming: [...state.upcoming, ...payload.upcoming],
                totalPagesUpcoming: payload.totalPagesUpcoming,
                upcomingCurrentPage: payload.upcomingCurrentPage,
                fetchingUpcoming: false,
                loaded: true,
            }
        case FETCH_POPULAR + START:
            return {
                ...state,
                fetchingPopular: true,
            }
        case FETCH_POPULAR + SUCCESS:
            return {
                ...state,
                popular: [...state.popular, ...payload.popular],
                totalPagesPopular: payload.totalPagesPopular,
                popularCurrentPage: payload.popularCurrentPage,
                fetchingPopular: false,
                loaded: true,
            }
        case FETCH_NEWGAMES + START:
            return {
                ...state,
                fetchingNewGames: true,
            }
        case FETCH_NEWGAMES + SUCCESS:
            return {
                ...state,
                newGames: [...state.newGames, ...payload.newGames],
                totalPagesNewGames: payload.totalPagesNewGames,
                newGamesCurrentPage: payload.newGamesCurrentPage,
                fetchingNewGames: false,
                loaded: true,
            }
        case RESET_SEARCHED:
            return {
                ...state,
                searched: [],
                searchedName: payload.input,
                fetchingSearched: false,
                totalPagesSearched: 0,
                searchedCurrentPage: 1,
            }
        case FETCH_AUTOCOMPLETE_SEARCH:
            return {
                ...state,
                autocompleteSearch: payload.autocompleteSearch,
                autocompleteCount: payload.autocompleteCount,
            }
        case FETCH_SEARCHED + START:
            return {
                ...state,
                fetchingSearched: true,
            }
        case FETCH_SEARCHED + SUCCESS:
            return {
                ...state,
                searched: [...state.searched, ...payload.searched],
                totalPagesSearched: payload.totalPagesSearched,
                searchedCurrentPage: payload.searchedCurrentPage,
                fetchingSearched: false,
                loaded: true,
            }
        case CLEAR_SEARCHED:
            return {
                ...state,
                searched: [],
                searchedName: '',
                fetchingSearched: false,
                totalPagesSearched: 0,
                searchedCurrentPage: 1,
            }
        default:
            return {...state}
    }
}

export default gamesReducer