import {
    TOGGLE_HEADER_DROPDOWN,
    CLOSE_HEADER_DROPDOWN,
    OPEN_AUTOCOMPLETE,
    CLOSE_AUTOCOMPLETE,
    TOGGLE_MOBILE_SEARCH_INPUT,
    CLOSE_MOBILE_SEARCH_INPUT
} from "../../utils/constants";

const initialState = {
    isOpenDropdown: false,
    isOpenSearchAutocomplete: false,
    isOpenMobileSearchInput: false
}

const uiReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case TOGGLE_HEADER_DROPDOWN:
            return {
                ...state,
                isOpenDropdown: !state.isOpenDropdown
            }
        case CLOSE_HEADER_DROPDOWN:
            return {
                ...state,
                isOpenDropdown: false
            }
        case OPEN_AUTOCOMPLETE:
            return {
                ...state,
                isOpenSearchAutocomplete: true
            }
        case CLOSE_AUTOCOMPLETE:
            return {
                ...state,
                isOpenSearchAutocomplete: false
            }
        case TOGGLE_MOBILE_SEARCH_INPUT:
            return {
                ...state,
                isOpenMobileSearchInput: !state.isOpenMobileSearchInput
            }
        case CLOSE_MOBILE_SEARCH_INPUT:
            return {
                ...state,
                isOpenMobileSearchInput: false
            }
        default:
            return state
    }
}

export default uiReducer