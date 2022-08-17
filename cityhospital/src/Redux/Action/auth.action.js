import * as ActionTypes from "../ActionTypes"

//SIGN UP
export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:data})
}

export const emailVerificaton = (data) => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERYFICATON, payload:data})
}

//LOGIN
export const loginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_USER, payload: data})
}

export const alertloginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_LOGD, payload: data})
} 

//LOGOUT 
export const logoutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_USER})
}

export const logoutlogedAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_LOGED})
}

//GOOGLE SIGNUP
export const googlesignupAction = () => (dispatch) => {
    dispatch({type: ActionTypes.GOOGLE_SIGNUP})
}

//FORGOT PASSWORD
export const forgetPassowrdAction = (data)=>(dispatch)=>{
    dispatch({type:ActionTypes.FORGET_PASSWORD, payload:data})
}