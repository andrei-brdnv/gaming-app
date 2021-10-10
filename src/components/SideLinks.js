import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_SEARCHED } from "../utils/constants";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideLinks = () => {
    const dispatch = useDispatch()
    const { searched, searchedName } = useSelector(store => store.games)

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute("href")
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location - 112,
        })
    }

    const clearSearched = () => {
        dispatch({type: CLEAR_SEARCHED})
    }

    return (
        <Links className="links">
            {searched.length || searchedName ? (
                <Searched animate={{scale: 1}} initial={{scale: 0.5}} transition={{type: 'spring'}}>
                    <SideLink href="#searched" onClick={handleClick}>Searched</SideLink>
                    <FontAwesomeIcon onClick={clearSearched} icon={faTimes} title={'Delete'}/>
                </Searched>
            ) : null}

            <SideLink href="#upcoming" onClick={handleClick}>Upcoming</SideLink>
            <SideLink href="#popular" onClick={handleClick}>Popular</SideLink>
            <SideLink href="#new" onClick={handleClick}>New games</SideLink>
        </Links>
    )
}

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;
  position: relative;
`

const Searched = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  width: 100%;

  svg {
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
  }

  svg:hover {
    transform: scale(1.25);
  }
`

const SideLink = styled.a`
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.inputFont};
  
  &.active {
    transition: all .15s ease;
    //background-color: ${props => props.theme.colors.header};
    background-color: #707070;
    color: white;
  }
`

export default SideLinks