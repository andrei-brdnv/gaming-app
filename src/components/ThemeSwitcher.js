import React, { useContext } from "react";
// Styles
import styled from "styled-components";
import { AppThemeContext } from "../context/AppThemeProvider";
/*import Switch from "react-switch";*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
    const { toggleTheme, themeMode } = useContext(AppThemeContext);
    const handleThemeChange = (e) => {
        toggleTheme();
    };

    /*return (
        <div>
            <Switch
                checked={themeMode === "lightTheme"}
                height={30}
                width={75}
                onColor={'#e0e0e0'}
                offColor={'#e0e0e0'}
                checkedIcon={
                    <FontAwesomeIcon
                        icon={faSun}
                        title={'Light Mode'}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: '30px',
                            paddingLeft: '10px',
                        }}
                        className='light'
                    />
                }
                uncheckedIcon={
                    <FontAwesomeIcon
                        icon={faMoon}
                        title={'Dark Mode'}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: '34px',
                            paddingLeft: '15px',
                        }}
                        className='dark'
                    />
                }
                onChange={handleThemeChange}
            />
        </div>
    )*/

    return (
        <Wrapper>
            <p onClick={handleThemeChange}>mode: [{themeMode === "lightTheme" ? 'Light' : 'Dark'}]</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //width: 20rem;
  background-color: transparent;
  padding: 0.5rem;
  
  p {
    font-size: 1rem;
    line-height: 100%;
    color: inherit;
  }
`

export default ThemeSwitcher