import { createContext, useReducer } from "react"
import * as ActionTypes from "./ActionTypes"
import { themeReducer } from "./reducer/Theme.reducer";

const ThemeContext = createContext();

const initval = {
    theme: "light",
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initval);

    const toogle_theme = (theme) => {
        const newtheme = theme === "light" ? "dark" : "light"
        dispatch({ type: ActionTypes.TOOGEL_THEME, payload: newtheme })
    }


    return (
        <ThemeContext.Provider
        value={{
            ...state,
            toogle_theme
        }}>
        {children}
    </ThemeContext.Provider>
    )
}

export default ThemeContext