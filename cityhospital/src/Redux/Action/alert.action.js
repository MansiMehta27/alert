import * as ActionTypes from "../Actiontypes";

export const setalret =(data)=>(dispatch)=>{
    dispatch({type : ActionTypes.SET_ALRET,payload : data})
}
export const resetalret=()=>(dispatch)=>{
    dispatch({type:ActionTypes.RESET_ALRET})
}