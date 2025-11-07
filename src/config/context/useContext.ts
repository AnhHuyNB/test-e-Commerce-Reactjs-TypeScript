import { createContext } from "react";

export const Theme = {
    PINK: 'pink-theme',
    BLUE: 'blue-theme'
} as const

export type themeType = (typeof Theme)[keyof typeof Theme]

interface ThemeContextType{
    theme?: themeType,
    setTheme?: (value: themeType) => void
}

export const themeContext = createContext<ThemeContextType>({})

