import React, { useState, createContext, useContext } from "react";
import dictionary from "../utils/dictionary";

export const AppLangContext = createContext({
    userLanguage: 'en',
    dictionary: dictionary.en,
})

export const AppLangProvider = ({children}) => {
    const [userLang, setUserLang] = useState('en')

    const toggleLang = () => {
        setUserLang(prevState => {
            if (prevState === 'en') {
                return 'ru'
            } else {
                return 'en'
            }
        })
    }

    const value = {
        userLang,
        dictionary: dictionary[userLang],
        toggleLang,
    }

    return (
        <AppLangContext.Provider value={value}>
            {children}
        </AppLangContext.Provider>
    )
}

export function Text({ tid }) {
    const languageContext = useContext(AppLangContext)

    return languageContext.dictionary[tid] || tid
}