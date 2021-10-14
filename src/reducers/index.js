import { combineReducers } from "redux";
import gamesReducer from "./games/gamesReducer";
import detailReducer from "./detail/detailReducer";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth/authReducer";
import favouritesReducer from "./favourites/favouritesReducer"
import uiReducer from "./ui/uiReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    favourites: favouritesReducer,
    ui: uiReducer,
})

export default rootReducer