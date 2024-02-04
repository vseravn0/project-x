import { FC, useMemo, useState } from "react"
import {  THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme ?? Theme.LIGHT

export  const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider