import {
    TOGGLE_HEADER_DROPDOWN,
    CLOSE_HEADER_DROPDOWN,
    OPEN_AUTOCOMPLETE,
    CLOSE_AUTOCOMPLETE,
    TOGGLE_MOBILE_SEARCH_INPUT,
    CLOSE_MOBILE_SEARCH_INPUT
} from "../../utils/constants";

export const toggleHeaderDropdown = () => ({ type: TOGGLE_HEADER_DROPDOWN })

export const closeHeaderDropdown = () => ({ type: CLOSE_HEADER_DROPDOWN })

export const openAutocomplete = () => ({ type: OPEN_AUTOCOMPLETE })

export const closeAutocomplete = () => ({ type: CLOSE_AUTOCOMPLETE })

export const toggleMobileSearch = () => ({ type: TOGGLE_MOBILE_SEARCH_INPUT })

export const closeMobileSearch = () => ({ type: CLOSE_MOBILE_SEARCH_INPUT })