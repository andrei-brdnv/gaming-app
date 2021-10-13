const base_url = 'https://api.rawg.io/api/'
const API_KEY = '53539d8347eb4d3ab10e30a71e39a8eb'

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

export const pageSize = 10;

export const upcomingGamesURL = (upcomingCurrentPage) => `${base_url}games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&page=${upcomingCurrentPage}`;
export const popularGamesURL = (popularCurrentPage) => `${base_url}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}&page=${popularCurrentPage}`;
export const newGamesURL = (newGamesCurrentPage) => `${base_url}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=${pageSize}&page=${newGamesCurrentPage}`;

export const gameDetailURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
export const searchGameURL = (game_name, searchedCurrentPage) => `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=${pageSize}&page=${searchedCurrentPage}`;
export const dynamicSearchURL = (game_name) => `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=${pageSize}`
export const gameMovieURL = (game_id) => `${base_url}games/${game_id}/movies?key=${API_KEY}`;
export const gameSeriesURL = (game_id) => `${base_url}games/${game_id}/game-series?key=${API_KEY}`;
