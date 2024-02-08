import { useCallback, useContext } from 'react';
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = ():UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
    }, [theme]);

    return {
        theme,
        toggleTheme,
    };
};
