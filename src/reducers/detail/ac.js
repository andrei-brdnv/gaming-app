import axios from "axios";
import { gameDetailURL, gameMovieURL, gameScreenshotURL } from "../../api";
import { FETCH_DETAIL, START, SUCCESS } from "../../utils/constants";

export const fetchGameDetail = (id) => async (dispatch) => {
    dispatch({
        type: FETCH_DETAIL + START
    })

    const detailData = await axios.get(gameDetailURL(id))
    const screenshotData = await axios.get(gameScreenshotURL(id))
    //const movieData = await axios.get(gameMovieURL(id))

    dispatch({
        type: FETCH_DETAIL + SUCCESS,
        payload: {
            game: detailData.data,
            screenshot: screenshotData.data,
            //movie: movieData.data,
        }
    })
}