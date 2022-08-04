import * as ActionTypes  from "../Actiontypes";
const intialstate ={
   Text: '',
   color: ''
}

export const alertReducer=(state = intialstate,action)=>{
    switch(action.type){
        case ActionTypes.SET_ALRET:
        return{
             ...state,
             text : action.payload.text,
             color : action.payload.color
            
        }
        case ActionTypes.RESET_ALRET:
        return{
             ...state,
             Text: '',
             color: ''
        }
        default:
            return state;
    }
}