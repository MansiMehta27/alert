import * as ActionTypes  from "../Actiontypes";
const intialstate ={
        isloading:false,
        user:null,
        error:''
}

export const authReducer=(state = intialstate,action)=>{
    switch(action.type){
        case ActionTypes.EMAIL_VEREFICATION:
        return{
              ...state,
              isloading:false,
              user:action.payload,
              error:''
        }
        default:
            return state;
    }
}