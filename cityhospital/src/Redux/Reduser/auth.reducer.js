import * as ActionTypes from "../ActionTypes"
const intialstate = {
    isLoading: false,
    user: null,
    error: ''
}
export const authReducer = (state = intialstate, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_LOGD:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGOUT_LOGED:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
        // case ActionTypes.EMAIL_VERYFICATON:
        //     return{
        //         ...state,
        //         isLoading: false,
        //         user: action.payload,
        //         error: ''
        //     }
        default:
            return state;
    }
}