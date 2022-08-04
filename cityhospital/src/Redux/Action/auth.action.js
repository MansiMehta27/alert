import *as ActionTypes from "../Actiontypes"

export const signupAction = (data)=>(dispatch)=>{
    dispatch({type : ActionTypes.SIGNUP_USER,payload:data})
}
export const emailverification = (user)=>(dispatch)=>{
    dispatch({type : ActionTypes.EMAIL_VEREFICATION,payload:user})
}