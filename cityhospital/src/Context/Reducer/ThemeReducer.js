// import * as ActionTypes from "../ActionTypes"

import * as ActionTypes from'../ActionType';




export const themeReducer=(state,action)=>{
    switch(action.type){
        case  ActionTypes.TOOGLE_THEME:
         return{
            ...state,
            theme:action.payload
        }
        default:
            return state;
    }
}