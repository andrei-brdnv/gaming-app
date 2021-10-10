import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, fetchSearched } from "../../actions";
import { useMediaQuery } from "react-responsive";
// Styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimateSharedLayout } from "framer-motion";

const HeaderSearch = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const [focus, setFocus] = useState(false)
    let { searched, searchedCurrentPage } = useSelector(store => store.games)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(changeInput(input))
        dispatch(fetchSearched(input, searchedCurrentPage = 1))

        setInput('')
        inputRef.current.blur()
    }

    const clearInput = () => {
        setInput('')
        {!isMobile && inputRef.current.focus()}
    }

    useEffect(() => {
        if (searched.length && searchedCurrentPage <= 2) {
            const element = document.querySelector("#searched").offsetTop
            console.log('SCROLL TO TOP SEARCH')

            window.scrollTo({
                top: element - 112
            })
        }
    }, [searched.length])

    return (
        <Form onSubmit={submitSearch} focus={focus}>
            <Input
                type="text"
                placeholder={isMobile ? "Search" : "Search more than 500,000 games"}
                value={input}
                ref={inputRef}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleInput}
                focus={focus}
            />
            {input ? <FontAwesomeIcon icon={faTimes} onClick={clearInput}/> : null}
            <CancelButton focus={focus} /*animate={{x: 0}} initial={{x: 75}} transition={{duration: 0.125}}*/>Cancel</CancelButton>
        </Form>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  width: 100%;
  border-radius: 1.5rem;
  position: relative;
  
  svg {
    position: absolute;
    right: 1rem;
    cursor: pointer;
    padding: 0.25rem;
    font-size: 2rem;
    color: #707070;
  }

  svg:hover {
    transform: scale(1.25);
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;

    svg {
      position: absolute;
      right: ${props => props.focus ? '4.25rem' : '0.75rem'};
      cursor: pointer;
      transition: all 0.25s ease-in;
    }
  }
`

const CancelButton = styled(motion.span)`
  display: none;
  position: absolute;
  //width: 2rem;
  right: 0;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.inputFont};
  //margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: inline;
    transform: ${props => props.focus ? 'translateX(0)' : 'translateX(4rem)'};
    transition: all 0.25s ease-in;
  }
`

const Input = styled(motion.input)`
  width: 100%;
  border: 0;
  line-height: 1rem;
  font-size: 1rem;
  background-size: 1rem;
  padding: 0.75rem 2.25rem 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors.input};
  border-radius: 1.5rem;
  height: 100%;
  transition: all .25s ease;
  
  &:focus,
  &:hover {
    outline: none;
    background-color: #F8F8F8;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.inputFont};
  }
  
  &:focus::placeholder,
  &:hover::placeholder {
    color: #707070;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem 0.5rem 1rem;
    width: ${props => props.focus ? 'calc(100% - 3.5rem)' : '100%'};
    //margin-right: ${props => props.focus ? '1rem' : '0'};
    transition: width .25s ease-in;
  }
`

export default HeaderSearch