import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeItem } from "../../reducers/ui/ac";
import { debounce } from "../../utils/debounce";
// Styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
// Components
import HeaderSearch from "./HeaderSearch";
import HeaderNav from "./HeaderNav";

const Header = () => {
    const dispatch = useDispatch()
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const { open } = useSelector(store => store.ui)

    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
        const verticalScroll = window.scrollY;
        // set state based on location info
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30 || verticalScroll === 0));
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);

        {open && dispatch(closeItem())}
    }, 50);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <Wrapper visible={visible}>
            <HeaderContainer>
                <Logo><FontAwesomeIcon icon={faDove}/></Logo>
                <HeaderSearch/>
                <HeaderNav/>
            </HeaderContainer>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  position: fixed;
  top: ${props => props.visible ? '0' : '-6rem'};
  width: 100vw;
  background-color: ${props => props.theme.colors.header};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: top 0.35s linear;
  z-index: 15;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: relative;
  padding: 0 2rem;
  height: 5rem;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  font-size: 2.5rem;
  margin-right: 9.5rem;
`

export default Header