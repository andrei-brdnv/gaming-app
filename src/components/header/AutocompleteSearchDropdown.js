import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useClickOutside from "../../utils/clickOutsideFunc";
import usePrevious from "../../utils/usePrevious";
import { fetchAutocompleteSearch } from "../../reducers/games/ac";
import { fetchGameDetail } from "../../reducers/detail/ac";
import { closeAutocomplete } from "../../reducers/ui/ac";
import { smallImage } from "../../utils/mediaResize";
import { useMediaQuery } from "react-responsive";
// Styles
import styled from "styled-components";

export const AutocompleteSearchDropdown = ({ input, submitSearch }) => {
    const dispatch = useDispatch()
    const { autocompleteSearch, autocompleteCount } = useSelector(store => store.games)
    const { game } = useSelector(store => store.detail)
    const autocompleteRef = useRef(null)

    let prev = usePrevious(game.id)

    useClickOutside(autocompleteRef, () => {
        input && dispatch(closeAutocomplete())
    })

    const loadDetailHandler = (id) => {
        dispatch(closeAutocomplete())

        if (id !== prev) {
            dispatch(fetchGameDetail(id))
        }
    }

    useEffect(() => {
        if (input) dispatch(fetchAutocompleteSearch(input))
    }, [input])

    return (
        <Container ref={autocompleteRef}>
            <GamesCount>Games: {autocompleteCount}</GamesCount>
            <SearchedList>
                {autocompleteSearch && autocompleteSearch.map(game => (
                    <li key={game.id}>
                        <Link to={`/game/${game.id}`} onClick={() => loadDetailHandler(game.id)}>
                            <img src={smallImage(game.background_image, 200)} alt={null} />
                            <span>{game.name}</span>
                        </Link>
                    </li>
                ))}
            </SearchedList>
            <SubmitButton onClick={submitSearch}>See all results</SubmitButton>
        </Container>
    );
};

const Container = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.cardBg};
  top: 3rem;
  left: 0;
  padding: 0.75rem;
  border-radius: 0.5rem;
  min-height: 20vh;
  width: 100%;
  overscroll-behavior-y: none;
  overflow: auto;
  
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 7.5rem;
    min-height: 100vh;
    border-radius: 0;
    z-index: 50;
  }
`

const GamesCount = styled.div`
  padding: 0.5rem;
  color: #282828;
`

const SearchedList = styled.ul`
  list-style: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    transition: background-color 0.25s;
    border-radius: 0.5rem;
  }
  
  @media (hover: hover) and (pointer: fine) {
    a:hover {
      background-color: #BEBEBE;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 0.9rem;
  }
`

const SubmitButton = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.25s;
  border-radius: 0.5rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #BEBEBE;
    }
  }
`