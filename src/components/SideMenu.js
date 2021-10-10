import React, { useEffect } from "react";
import navHighlighter from "../utils/navHighlighter";
// Styles
import styled from "styled-components";
// Components
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";
import SideLinks from "./SideLinks";

const SideMenu = () => {
    useEffect(() => {
        window.addEventListener('scroll', navHighlighter);
        return () => window.removeEventListener('scroll', navHighlighter);
    }, [navHighlighter])

    const scrollToTop = () => {
        window.scrollTo({
            top: -112
        })
    }

    return (
        <Container>
            <SideNav>
                <Home onClick={scrollToTop}>Home</Home>
                <SideLinks/>
                {/*<ThemeSwitcher/>
                <LangSwitcher/>*/}
            </SideNav>
        </Container>
    )
}

const Container = styled.div`
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SideNav = styled.nav`
  position: sticky;
  top: 7rem;
  width: 10rem;
`

const Home = styled.h2`
  margin-bottom: 3rem;
  cursor: pointer;
`

export default SideMenu