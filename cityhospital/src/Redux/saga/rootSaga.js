import { all } from "redux-saga/effects";
import { authSaga } from "./Auth.Saga";

export function* rootSaga() {
    yield all([
        authSaga()
    ])
 }