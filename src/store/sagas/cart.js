import {takeLatest, call, put, all} from "redux-saga/effects";
import { SIGNUP_SUCCESS} from './../actions/profil'
import { clearCart} from './../actions/cart'
export function* clearCartOnSignOutSuccess() {
    yield put(clearCart())
}


export function* onSignOutSuccess() {
    yield takeLatest( SIGNUP_SUCCESS, clearCartOnSignOutSuccess)
}



export  function* cartSagas()  {
    yield all([
        call(onSignOutSuccess)])
}