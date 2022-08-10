import * as ActionTypes  from "../Actiontypes";
const intialstate ={
   text: '',
   color: ''
}

export const alertReducer=(state = intialstate,action)=>{
    console.log(action.type,action.payload);
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
             text: '',
             color: ''
        }
        default:
            return state;
    }
}