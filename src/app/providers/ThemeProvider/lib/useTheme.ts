import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";
import { useContext } from "react";
interface useThemeResult {
  handleTheme: () => void;
  theme: Theme;
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, handleTheme };
}
