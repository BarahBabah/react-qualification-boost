import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

interface useThemeResult {
    handleTheme: () => void;
    theme: Theme;
}
export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.DARK_SEA_WAVES;
            break;
        case Theme.DARK_SEA_WAVES:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGHT, handleTheme };
}
