import { all, call, put, takeEvery } from 'redux-saga/effects'
import { forgetPassowrdAPI, googlesignupAPI, loginAPI, logoutAPI, signUpAPI } from '../../common/apis/auth.api';
import { auth } from '../../firebase';
import { history } from '../../history';
import { setAlert } from '../Action/alert.action';
import { alertloginAction, emailVerificaton, logoutlogedAction } from '../Action/auth.action';
import * as ActionTypes from "../ActionTypes"

function* signUP(action) {
   try {
      const user = yield call(signUpAPI, action.payload);
      yield put(setAlert({text:user.payload, color:"success"}))
      yield put(emailVerificaton(user));
   } catch (e) {
      yield put (setAlert({text:e.payload, color:"error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* login(action) {
   try{
      const user = yield call (loginAPI, action.payload);
      yield put(setAlert({text:"Login Successfully", color:"success"}))
      yield put(alertloginAction(user))
      history.push("/")
   }catch(e){
      yield put (setAlert({text:e.payload, color:"error"}))
   }
}

function* logout(action){
   try{
      const user = yield call(logoutAPI)
      yield put(setAlert({text:user.payload, color:"success"}))
      yield put(logoutlogedAction(user))
      history.push("/")
   }catch(e){
      yield put (setAlert({text:e.payload, color:"error"}))
   }
}

function* googlesignup(action){
   try{
      const user = yield call(googlesignupAPI)
      yield put(setAlert({text:"Signup Successfully", color:"success"}))
      yield put(alertloginAction(user))
      history.push("/")
   }catch(e){
      yield put (setAlert({text:e.payload, color:"error"}))
   }
}

function* forgetPassword(action) {
   try{
      const user = yield call(forgetPassowrdAPI, action.payload)
      console.log(user);
      yield put(setAlert({text:"Please Check Your Email Id", color:"success"}))
      yield put(alertloginAction(user))
      history.push("/")
   }catch(e){
      yield put(setAlert({text: e.payload, color:"error"}))
   }
}

function* watchSignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUP);
}

function* watchLogin() {
   yield takeEvery(ActionTypes.LOGIN_USER, login);
}

function* watchLogout() {
   yield takeEvery(ActionTypes.LOGOUT_USER, logout)
}

function* watchGooglesignup() {
   yield takeEvery(ActionTypes.GOOGLE_SIGNUP, googlesignup)
}

function* watchForgetpassword() {
   yield takeEvery(ActionTypes.FORGET_PASSWORD, forgetPassword)
}

export function* authSaga() {
   yield all([
      watchSignup(),
      watchLogin(),
      watchLogout(),
      watchGooglesignup(),
      watchForgetpassword()
   ])
}