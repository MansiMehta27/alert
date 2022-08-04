import { authsaga } from "./Auth.Saga";
import {all} from 'redux-saga/effects'

export function * rootsaga(){
    yield all ([
        authsaga()
    ])
}