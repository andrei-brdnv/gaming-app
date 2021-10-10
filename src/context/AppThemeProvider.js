import React, { useState, createContext } from "react";
import theme from "../utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

export const AppThemeContext = createContext();

const AppThemeProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState('lightTheme')

    const toggleTheme = () => {
        setThemeMode((prevState) => {
            if (prevState === 'lightTheme') {
                return 'darkTheme'
            } else {
                return 'lightTheme'
            }
        })
    }

    const value = {themeMode, toggleTheme}
    const customTheme = theme[themeMode];

    return (
        <AppThemeContext.Provider value={value}>
            <ThemeProvider theme={customTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export default AppThemeProvider