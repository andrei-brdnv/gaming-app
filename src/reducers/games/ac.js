import axios from "axios";
import {dynamicSearchURL, newGamesURL, popularGamesURL, searchGameURL, upcomingGamesURL} from "../../api";
import {
    CHANGE_INPUT, FETCH_AUTOCOMPLETE_SEARCH,
    FETCH_NEWGAMES,
    FETCH_POPULAR,
    FETCH_SEARCHED,
    FETCH_UPCOMING,
    START,
    SUCCESS
} from "../../utils/constants";

export const fetchUpcomingStart = () => ({
    type: FETCH_UPCOMING + START
})

export const fetchPopularStart = () => ({
    type: FETCH_POPULAR + START
})

export const fetchNewGamesStart = () => ({
    type: FETCH_NEWGAMES + START
})

export const fetchSearchedStart = () => ({
    type: FETCH_SEARCHED + START
})

export const changeInput = (input) => {
    return {
        type: CHANGE_INPUT,
        payload: {input},
    }
}

export const fetchAutocompleteSearch = (game_name) => async (dispatch) => {
    await axios.get(dynamicSearchURL(game_name))
        .then(response => dispatch({
            type: FETCH_AUTOCOMPLETE_SEARCH,
            payload: {
                autocompleteSearch: response.data.results
            }
        }))
}

export const fetchUpcoming = (upcomingCurrentPage) => async (dispatch) => {
    dispatch({
        type: FETCH_UPCOMING + START
    })

    await axios.get(upcomingGamesURL(upcomingCurrentPage))
        .then(response => dispatch({
            type: FETCH_UPCOMING + SUCCESS,
            payload: {
                upcoming: response.data.results,
                totalPagesUpcoming: response.data.count,
                upcomingCurrentPage: upcomingCurrentPage + 1
            }
        }))
}

export const fetchPopular = (popularCurrentPage) => async (dispatch) => {
    dispatch({
        type: FETCH_POPULAR + START
    })

    await axios.get(popularGamesURL(popularCurrentPage))
        .then(response => dispatch({
            type: FETCH_POPULAR + SUCCESS,
            payload: {
                popular: response.data.results,
                totalPagesPopular: response.data.count,
                popularCurrentPage: popularCurrentPage + 1
            }
        }))
}

export const fetchNewGames = (newGamesCurrentPage) => async (dispatch) => {
    dispatch({
        type: FETCH_NEWGAMES + START
    })

    await axios.get(newGamesURL(newGamesCurrentPage))
        .then(response => dispatch({
            type: FETCH_NEWGAMES + SUCCESS,
            payload: {
                newGames: response.data.results,
                totalPagesNewGames: response.data.count,
                newGamesCurrentPage: newGamesCurrentPage + 1
            }
        }))
}

export const fetchSearched = (game_name, searchedCurrentPage) => async (dispatch) => {
    dispatch({
        type: FETCH_SEARCHED + START
    })

    await axios.get(searchGameURL(game_name, searchedCurrentPage))
        .then(response => dispatch({
            type: FETCH_SEARCHED + SUCCESS,
            payload: {
                searched: response.data.results,
                totalPagesSearched: response.data.count,
                searchedCurrentPage: searchedCurrentPage + 1
            }
        }))
}