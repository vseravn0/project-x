import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export const THEME_LOCAL_STORAGE_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});
