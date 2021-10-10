import React, { useContext } from "react";
// Styles
import styled from "styled-components";
import { AppLangContext } from "../context/AppLangProvider";

const LangSwitcher = () => {
    const { userLang, toggleLang } = useContext(AppLangContext)
    const handleLangChange = (e) => {
        toggleLang()
    }

    return (
        <Wrapper>
            <p onClick={handleLangChange}>mode: [{userLang === 'ru' ? 'ru' : 'en'}]</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: peachpuff;
  padding: 0.5rem;
  
  p {
    font-size: 1rem;
    line-height: 100%;
    color: black;
  }
`

export default LangSwitcher