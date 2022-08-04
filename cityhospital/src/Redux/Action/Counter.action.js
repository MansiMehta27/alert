import * as ActionTypes from "../Actiontypes";
export const incrementCounter =()=>(dispach)=>{
    dispach({type : ActionTypes.INCREMENT_COUNTER})
}
export const decrementCounter=()=>(dispach)=>{
    dispach({type:ActionTypes.DECREMENT_COUNTER})
}