import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text } from "../context/AppLangProvider";
import { pageSize } from "../api";
// Styles
import styled from "styled-components";
// Components
import GameCard from "./GameCard";
import Skeleton from "./Skeleton";
import LoaderCard from "./LoaderCard";

const Section = ({ gameArray, totalPages, currentPage, fetching, fetch, fetchStart, name }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            dispatch(fetch(currentPage))
        }
    }, [fetching])

    return (
        <SectionContainer id={name}>
            <h2><Text tid={`${name} games`}/></h2>
            <Games>
                {!gameArray.length && Array.from({length: pageSize}, (_, i) => i + 1).map((n) => <Skeleton
                    key={n}/>)}

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
                    Array.from({length: pageSize}, (_, i) => i + 1).map((n) => <Skeleton key={n}/>) :
                    null
                }
            </Games>
            <LoaderCard onClick={() => dispatch(fetchStart())} name={name}/>
        </SectionContainer>
    )
}

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  h2 {
    font-weight: 700;
    margin-bottom: 3rem;
  }
  
  p {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
`

export const Games = styled.div`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;

  @media screen and (max-width: 768px) {
    //min-height: min-content;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-row-gap: 2rem;
  }
`

export default Section