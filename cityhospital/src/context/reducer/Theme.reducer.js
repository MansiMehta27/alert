import * as ActionTypes from "../ActionTypes"

export const themeReducer = (state, action)=>{
    switch(action.type){
        case ActionTypes.TOOGEL_THEME:
        return{
            ...state,
            theme: action.payload
        }
        default:
            return state;
    }
}