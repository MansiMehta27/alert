import { all, call, put, takeEvery } from 'redux-saga/effects'
import { emailverification } from '../Action/auth.action';
import { signupAPI } from '../../Container/Comman/apis/auth.api';
import * as ActionTypes from "../Actiontypes";
import {setalret } from '../Action/alert.action';

function* signUp(action) {
   try {
      const user = yield call(signupAPI, action.payload);
      yield put (setalret({text:user.payload,color:'success'}))
      yield put(emailverification(user));

      console.log(user);
   } catch (e) {
      yield put (setalret({text:e.payload, color :'error'}))
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
      console.log(e);
   }
}

function* watchSaga() {
   yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}
export function* authsaga() {
   yield all([
      watchSaga()
   ])
}

