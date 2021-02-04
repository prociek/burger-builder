import { put, delay } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions";

export function* logoutSaga() {
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6VxfodXFpcju6ibyEnqhv4_ywF3xGjcU`;
  if (action.isSignUp)
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6VxfodXFpcju6ibyEnqhv4_ywF3xGjcU`;
  try {
    const res = yield axios.post(url, {
      email: action.email,
      password: action.password,
      returnSecureToken: true
    });
    const expirationDate = yield new Date(
      new Date().getTime() + res.data.expiresIn * 1000
    );
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("token", res.data.idToken);
    yield localStorage.setItem("userId", res.data.localId);
    yield put(actions.authSuccess(res.data.idToken, res.data.localId));
    yield put(actions.checkAuthTimeout(res.data.expiresIn));
  } catch (err) {
    yield put(actions.authFail(err.response.data.error));
  }
}

export function* checkUserAuthSaga() {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      yield put(actions.authSuccess(token, localStorage.getItem("userId")));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
