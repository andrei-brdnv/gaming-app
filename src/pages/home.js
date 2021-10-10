import React, {useEffect, useContext, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchFavourites,
    fetchNewGames,
    fetchPopular,
    fetchUpcoming,
    loadGames,
    showLoader,
    addToFavourite,
    deleteFavourite,
    fetchUpcomingStart,
    fetchPopularStart,
    fetchNewGamesStart, fetchSearched, fetchSearchedStart
} from "../actions";
import styled from "styled-components";
import Game from "../components/GameCard";
import { useLocation } from "react-router-dom";
import GameDetail from "../components/GameDetail";
import SimpleLoader from "../components/Loader";
import { AppLangContext, Text } from "../context/AppLangProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
    CLEAR_GAMESERIES,
    CLEAR_SEARCHED,
    FETCH_NEWGAMES,
    FETCH_POPULAR,
    FETCH_UPCOMING,
    START
} from "../utils/constants";

import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "../components/Skeleton";

import Section from "../components/Section";

import data from '../utils/mockedstate'
import SearchedGames from "../components/SearchedGames";
import FavouriteGames from "../components/FavouriteGames";

const Home = () => {
    const dispatch = useDispatch();

    const { upcoming, totalPagesUpcoming, popular, totalPagesPopular, newGames, totalPagesNewGames, fetchingUpcoming, fetchingPopular, fetchingNewGames, searched, totalPagesSearched, fetchingSearched, firstLoading, gameSeries, loaded, upcomingCurrentPage, popularCurrentPage, newGamesCurrentPage, searchedCurrentPage } = useSelector(store => store.games)
    //const { upcoming, popular, newGames } = data.games
    //const { totalPagesUpcoming, totalPagesPopular, totalPagesNewGames, fetchingUpcoming, fetchingPopular, fetchingNewGames, searched, firstLoading, gameSeries, loaded, upcomingCurrentPage, popularCurrentPage, newGamesCurrentPage } = useSelector(store => store.games)
    const { list, fetchFavourite } = useSelector(store => store.favourites)
    const { auth } = useSelector((store => store.firebase))
    const { signIn } = useSelector((store => store.auth))

    /*useFirestoreConnect(['games'])
    const games = useSelector((state => state.firestore.data.games))
    console.log(games)*/

    const location = useLocation()
    const pathId = location.pathname.split('/')[2]

    const { dictionary } = useContext(AppLangContext)

    return (
        <GameList>
            {pathId && <GameDetail/>}
            <SearchedGames
                gameArray={searched}
                totalPages={totalPagesSearched}
                currentPage={searchedCurrentPage}
                fetching={fetchingSearched}
                fetch={fetchSearched}
                fetchStart={fetchSearchedStart}
                name={"searched"}
            />

            {auth.uid ? (
                <FavouriteGames
                    gameArray={list}
                    fetching={fetchFavourite}
                    fetch={fetchFavourites}
                    name={"favourite"}
                />
            ) : null}

            <Section
                gameArray={upcoming}
                totalPages={totalPagesUpcoming}
                currentPage={upcomingCurrentPage}
                fetching={fetchingUpcoming}
                fetch={fetchUpcoming}
                fetchStart={fetchUpcomingStart}
                name={"upcoming"}
            />
            <Section
                gameArray={popular}
                totalPages={totalPagesPopular}
                currentPage={popularCurrentPage}
                fetching={fetchingPopular}
                fetch={fetchPopular}
                fetchStart={fetchPopularStart}
                name={"popular"}
            />
            <Section
                gameArray={newGames}
                totalPages={totalPagesNewGames}
                currentPage={newGamesCurrentPage}
                fetching={fetchingNewGames}
                fetch={fetchNewGames}
                fetchStart={fetchNewGamesStart}
                name={"new"}
            />
        </GameList>
    )
}

const GameList = styled.div`
  width: 100%;
`

export default Home