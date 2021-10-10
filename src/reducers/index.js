import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import favouritesReducer from "./favouritesReducer"
import uiReducer from "./uiReducer";


const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    favourites: favouritesReducer,
    ui: uiReducer,
})

export default rootReducer