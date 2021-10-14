import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToFavourite, deleteFavourite } from "../reducers/favourites/ac";
import getStarsRating from "../utils/getStarsRating";
import getPlatformLogo from "../utils/getPlatformLogo";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
// Styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// Components
import GameMeta from "./GameMeta";
import ImagesLightbox from "./ImagesLightbox";

const GameDetail = () => {
    const [fullDesc, setFullDesc] = useState(false)
    const dispatch = useDispatch()
    const { auth } = useSelector(store => store.firebase)
    const { list } = useSelector(store => store.favourites)
    const { game, screenshot, fetchingDetail } = useSelector(store => store.detail)
    const history = useHistory()

    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shadow')) {
            history.push('/')
        }
    }

    const closeDetail = (e) => {
        e.preventDefault()
        history.push('/')
    }

    const showFullDescription = () => {
        setFullDesc(!fullDesc)
    }

    const addToFavouriteHandler = () => {
        dispatch(addToFavourite(game.id))
    }

    const deleteFavHandler = () => {
        dispatch(deleteFavourite(game.id))
    }

    return (
        <>
            {!fetchingDetail && (
                <CardShadow className='shadow' onClick={exitDetailHandler}>
                    <Detail>
                        <ContentLeft>
                            <CloseDetailsButton onClick={closeDetail}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span>Go back to home page</span>
                            </CloseDetailsButton>
                            {
                                auth.uid && list && list.length && list.some(listGame => listGame.id === game.id) &&
                                <RemoveFromFavouriteButton onClick={deleteFavHandler}>
                                    <FontAwesomeIcon icon={faHeartSolid} title={"Remove from favourites"}/>
                                </RemoveFromFavouriteButton> ||
                                auth.uid &&
                                <AddToFavouriteButton onClick={addToFavouriteHandler}>
                                    <FontAwesomeIcon icon={faHeart} title={"Add to favourite"}/>
                                </AddToFavouriteButton>
                            }
                            <Info>
                                <div>
                                    {moment(game.released).format('ll')}
                                </div>

                                <div>
                                    {game.platforms.map(data => (
                                        <span key={data.platform.id}>{getPlatformLogo(data.platform.name)}</span>
                                    ))}
                                </div>
                                {game.playtime ? (
                                    <div>
                                        Average playtime: {game.playtime} hours
                                    </div>
                                ) : null}
                            </Info>
                            <Name>
                                {game.name}
                            </Name>
                            <Description fullDesc={fullDesc}>
                                <div>
                                    {ReactHtmlParser(game.description)}
                                </div>
                                <span onClick={showFullDescription}>
                                    {fullDesc ? "Show less" : "Read more"}
                                </span>
                            </Description>
                            <GameMetaContainer>
                                <GameMeta name={"Rating"} data={game.rating} getStarsRating={getStarsRating} />
                                <GameMeta name={"Metascore"} data={game.metacritic} />
                                <GameMeta name={"Platforms"} array={game.platforms} />
                                <GameMeta name={"Genre"} array={game.genres} />
                                <GameMeta name={"Release Date"} data={game.released} />
                                <GameMeta name={"Developers"} array={game.developers} />
                                <GameMeta name={"Publishers"} array={game.publishers} />
                                <GameMeta name={"Age Rating"} data={game.esrb_rating} />
                                <GameMeta name={"Tags"} array={game.tags} width={"100%"} />
                                <GameMeta name={"Website"} data={game.website} width={"100%"} />
                            </GameMetaContainer>
                        </ContentLeft>
                        <ContentRight>
                            <ImagesLightbox screenshots={screenshot.results} gameName={game.name} />
                        </ContentRight>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow-y: scroll;
  overscroll-behavior-y: none;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar {
    background: white;
  }

  @media screen and (max-width: 768px) {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const AddToFavouriteButton = styled.div`
  margin-bottom: 1rem;
  
  svg {
    color: ${props => props.theme.colors.inputFont};
    font-size: 2rem;
  }
`

const RemoveFromFavouriteButton = styled.div`
  margin-bottom: 1rem;
  
  svg {
    opacity: 0.85;
    font-size: 2rem;
    color: #ec407a;
  }
`

const Detail = styled.div`
  width: 80%;
  min-height: 100vh;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: ${props => props.theme.colors.cardBg};
  position: absolute;
  left: 10%;
  color: black;
  display: flex;
  justify-content: space-between;

  img {
    width: 100%;
  }
  
  @media (max-width: 1024px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    padding: 2rem 1rem 8rem 1rem;
    left: 0;
    min-height: 100vh;
    flex-direction: column;
  }
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`

const CloseDetailsButton = styled.div`
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${props => props.theme.colors.inputFont};
  
  svg {
    margin-right: 0.5rem;
  }
`

const ContentLeft = styled.div`
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const ContentRight = styled.div`
  width: 30rem;
  flex: 0 0 auto;

  @media screen and (max-width: 1280px) {
    width: max-content;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Name = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  //margin-bottom: 1rem;
  color: ${props => props.theme.colors.paragraph};
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
  
  span {
    
    font-size: 1.15rem;
    margin-right: 0.5rem;
  }
  
  span:last-child {
    margin-right: 0;
  }
`

const GameMetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const Description = styled.div`
  margin-bottom: 2rem;
  
  div {
    margin-bottom: 0.5rem;
    overflow: hidden;
    height: ${props => props.fullDesc ? "auto" : "4.25rem"};
    transition: height 0.25s linear;
  }
  
  div p {
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.fullDesc ? "none" : "3"}; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.25s linear;
  }
  
  div p:last-child {
    margin: 0;
  }
  
  div h3 {
    font-size: 1.15rem;
    color: ${props => props.theme.colors.paragraph};
  }
  
  div ul {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.paragraph};
  }
  
  div ul li {
    margin-bottom: 1rem;
  }
  
  div ul li:last-child {
    margin: 0;
  }
  
  span {
    display: inline-flex;
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0.1rem 0.2rem;
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.font};
    color: ${props => props.theme.colors.font};
    border-radius: 0.25rem;
    align-items: center;
    opacity: 0.85;
  }
  
`

export default GameDetail