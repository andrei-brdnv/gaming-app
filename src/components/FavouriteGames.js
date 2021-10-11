import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text } from "../context/AppLangProvider";
// Styles
import {Games, SectionContainer} from "./Section";
// Components
import GameCard from "./GameCard";


const FavouriteGames = ({ gameArray, fetching, fetch, name }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            dispatch(fetch())
        }
    }, [fetching])

    return (
        <SectionContainer id={name}>
            <h2><Text tid={`${name} games`}/></h2>
            {gameArray && gameArray.length ? (
                <Games>
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
                </Games>
            ) : <p>No favourite games to display yet</p>}
        </SectionContainer>
    )
}

export default FavouriteGames