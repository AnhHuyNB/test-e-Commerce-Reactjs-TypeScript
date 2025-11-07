import { useContext, useEffect } from "react";
import { Theme, themeContext } from "./useContext";

const useTheme = () => {
    const { theme, setTheme} = useContext(themeContext)

    const toggleTheme = () => {
            const newTheme =  theme === Theme.PINK? Theme.BLUE : Theme.PINK
            setTheme?.(newTheme)
        }

    useEffect(() =>{
            document.body.className = `${theme}`
    })
    return {theme, toggleTheme}
}

export default useTheme;