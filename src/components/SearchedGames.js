import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../context/AppLangProvider";
import { pageSize } from "../api";
// Styles
import styled from "styled-components";
import { SectionContainer, Games } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// Components
import GameCard from "./GameCard";
import Skeleton from "./Skeleton";
import LoaderCard from "./LoaderCard";
import {CLEAR_SEARCHED} from "../utils/constants";

const SearchedGames = ({ gameArray, totalPages, currentPage, fetching, fetch, fetchStart, name }) => {
    const dispatch = useDispatch()
    const { searchedName } = useSelector(store => store.games)

    useEffect(() => {
        if (fetching && currentPage > 1) {
            dispatch(fetch(searchedName, currentPage))
        }
    }, [fetching])

    const clearSearched = () => {
        dispatch({type: CLEAR_SEARCHED})
    }

    return (
        <>
            {gameArray.length || searchedName ? (
                <SectionContainer id={name}>
                    <Title>
                        <Text tid={`${name} games`}/>
                        <FontAwesomeIcon onClick={clearSearched} icon={faTimesCircle} />
                    </Title>
                    <Games>
                        {!gameArray.length && Array.from({length: pageSize}, (_, i) => i + 1).map((n) =>
                            <Skeleton key={n}/>
                        )}

                        {gameArray && gameArray.map(game => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                                platforms={game.platforms}
                                genres={game.genres}
                                rating={game.rating}
                                metacritic={game.metacritic}
                            />
                        ))}

                        {gameArray.length < totalPages && totalPages !== currentPage && fetching ?
                            Array.from({length: pageSize}, (_, i) => i + 1).map((n) =>
                                <Skeleton key={n} />) : null
                        }
                    </Games>
                    <LoaderCard onClick={() => dispatch(fetchStart())} name={name} />
                </SectionContainer>
            ) : null}
        </>
    )
}

const Title = styled.h2`
  svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    svg {
      display: inline;
      transform: translate(0.5rem, 0.15rem);
      color: #707070;
    }
  }
`

export default SearchedGames