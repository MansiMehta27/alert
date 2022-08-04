import { createContext, useReducer } from "react";

import * as ActionTypes from "./ActionType"
import { themeReducer } from "./Reducer/ThemeReducer";

const ThemeContext= createContext();

const intial={
    theme:'light',
}
export const ThemeProvider=({children})=>{
    const [state,dispatch] = useReducer(themeReducer,intial);
    const toogle_theme=(theme)=>{
        const newtheme = theme === "light" ? "dark" : "light";
        dispatch({type: ActionTypes.TOOGLE_THEME, payload:newtheme})
    }

    return(
        <ThemeContext.Provider
        value={{
                ...state,
                toogle_theme
         }}
    >
        {children}        
    </ThemeContext.Provider>
    );
    
}
export default ThemeContext;