import { combineReducers } from "redux";
import { alertReduser } from "./alert.reduser";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./Counter.reduce";

export const rootReduser = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    alert: alertReduser
})