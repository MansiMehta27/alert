import * as ActionTypes from "../ActionTypes";
const intialstate = {
    isloading: false,
    user: null,
    error: ''
}

export const authReducer = (state = intialstate, action) => {
    switch (action.type) {

        case ActionTypes.LOGIN_LOGD:
            return {
                ...state,
                isloading: false,
                user: action.payload,
                error: ''
            }
            case ActionTypes.LOGOUT_LOGD:
                return{
                    ...state,
                    isloading:false,
                    user : null,
                    error:''
                }
        // case ActionTypes.EMAIL_VEREFICATION:
        // return{
        //       ...state,
        //       isloading:false,
        //       user:action.payload,
        //       error:''
        // }
        default:
            return state;
    }
}