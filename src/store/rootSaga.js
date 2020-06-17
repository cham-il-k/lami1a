import { all, call  } from 'redux-saga/effects'
import { selectionSagas } from './sagas/selection'
import { profilSagas } from './sagas/profil'
import { cartSagas } from './sagas/cart'

export default function* rootSaga() {
   yield all([
        call(selectionSagas),
        call(profilSagas),
        call(cartSagas)
    ])
}