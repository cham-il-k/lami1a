import {takeLatest, call, put, all} from "redux-saga/effects";
import { SIGNUP_SUCCESS, LOGOUT_SUCCESS, DEL_CART_ON_START} from './../actions/profil'
import { clearCart} from './../actions/cart'
export function* clearCartOnSignOutSuccess() {
    yield put(clearCart())
}
export function* clearCartOnStart() {
    yield put(clearCart)
}

export function* onSignOutSuccess() {
    yield takeLatest( LOGOUT_SUCCESS, clearCartOnSignOutSuccess)
}

export function* ondelCartOnStart() {
    yield takeLatest( DEL_CART_ON_START, clearCartOnStart)
}


export  function* cartSagas()  {
    yield all([
        call(onSignOutSuccess)])
}