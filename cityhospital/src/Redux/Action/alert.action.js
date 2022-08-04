import * as ActionTypes from "../Actiontypes";
export const setalret =(user)=>(dispach)=>{
    dispach({type : ActionTypes.SET_ALRET,payload : user})
}
export const resetalret=()=>(dispach)=>{
    dispach({type:ActionTypes.RESET_ALRET})
}