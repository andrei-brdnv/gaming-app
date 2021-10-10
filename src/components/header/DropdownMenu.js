import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut, closeItem } from "../../actions";
import { AppThemeContext } from "../../context/AppThemeProvider";
import { AppLangContext } from "../../context/AppLangProvider";
// Styles
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { IconButton } from "./HeaderNavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(0);
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store.firebase);
    const dropdownRef = useRef(null);
    const { toggleTheme, themeMode } = useContext(AppThemeContext);
    const { userLang, toggleLang } = useContext(AppLangContext);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
        console.log("DDREF", dropdownRef)
    }, [])

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
        console.log("DDREF", dropdownRef)
    }

    const handleThemeChange = (e) => {
        toggleTheme();
    };

    const handleLangChange = (e) => {
        toggleLang()
    }

    const handleLogout = () => {
        dispatch(signOut())
        dispatch(closeItem())
    }

    const DropdownItem = (props) => {
        return (
            <MenuItem
                onClick={() => {
                    props.goToMenu && setActiveMenu(props.goToMenu);
                    props.mode === "theme" && props.handleThemeChange();
                    props.mode === "lang" && props.handleLangChange();
                    props.mode === "logout" && props.handleLogout();
                }}
            >
                {props.goToMenu ? <StyledIconButton>{props.leftIcon}</StyledIconButton> : null}
                {props.children}
                <IconRight>{props.rightIcon}</IconRight>
            </MenuItem>
        );
    }

    return (
        <Container height={menuHeight} ref={dropdownRef}>
                <CSSTransition
                    in={activeMenu === 'main'}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <Menu>
                        {auth.uid ?
                            <DropdownItem mode="logout" handleLogout={handleLogout}>
                                Logout
                            </DropdownItem> :
                            <>
                                <DropdownItem>
                                    <Link to={"/sign-in"}>Sign in</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={"sign-up"}>Create an account</Link>
                                </DropdownItem>
                            </>
                        }
                        <DropdownItem
                            leftIcon={<FontAwesomeIcon icon={faCog} />}
                            rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                            goToMenu="settings"
                        >
                            Settings
                        </DropdownItem>
                    </Menu>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'settings'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <Menu>
                        <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                            Settings
                        </DropdownItem>
                        <DropdownItem mode={"theme"} handleThemeChange={handleThemeChange}>
                            {themeMode === 'lightTheme' ? 'Light theme' : 'Dark theme'}
                        </DropdownItem>
                        <DropdownItem mode={"lang"} handleLangChange={handleLangChange}>
                            {userLang === 'ru' ? 'Русский' : 'English'}
                        </DropdownItem>
                    </Menu>
                </CSSTransition>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 4.75rem;
  width: 15rem;
  max-width: 100%;
  transform: translateX(-45%);
  background-color: #F8F8F8;
  border: 1px solid #BEBEBE;
  border-radius: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  height: ${props => props.height}px;
  transition: height 0.25s ease;
  font-size: 0.85rem;
  box-sizing: content-box;
  
  // CSSTransitionGroup
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
    padding-right: 1rem;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 0.5s ease;
  }
  
  // CSSTransitionGroup
  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .menu-secondary-exit {

  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    position: static;
    top: 0;
    width: auto;
    transform: translateX(0);
    border: none;
    border-radius: 0;
    padding: 1rem;
    font-size: 1rem;

    .menu-primary-enter-active {
      padding-right: 2rem;
    }
  }
`

const Menu = styled.div`
  width: 100%;
  color: #303030;
  text-decoration: none;
`

const MenuItem = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: background .5s;
  padding: 0.5rem;
  width: 100%;
  color: #303030;
  text-decoration: none;
  cursor: pointer;
  
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #303030;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #BEBEBE;
    }
  }
`

const IconRight = styled.span`
  margin-left: auto;
  flex-shrink: 0;
  color: #707070;
`

const StyledIconButton = styled(IconButton)`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem 0 0;
  flex-shrink: 0;
  background-color: #707070;

  &:hover {
    filter: none;
  }
  
  svg {
    font-size: 1.15rem;
  }
`

export default DropdownMenu