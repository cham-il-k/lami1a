import {
    takeLatest,
    call,
    put,
    all
} from "redux-saga/effects";
import {
    GOOGLE_SIGNIN_START,
    SIGNIN_START,
    signinSuccess,
    signinFail
} from './../actions/profil'
import {
    googleProvider,
    createUserProfilDocument
} from './../../util/db/auth.firebase'
import firebase from 'firebase'
import  'firebase/auth'

const auth = firebase.auth()
export function* getSnapShotFromAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfilDocument, userAuth)
        const userSnapShot = yield userRef.get()
        yield put(signinSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))

    } catch (error) {
        yield put(signinFail(error))
    }
}
export function* signInWithGoogle() {
    try {
        const {
            user
        } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromAuth(user)
    } catch (error) {
        yield put(signinFail(error))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle)
}


export function* signInWithEmail({
    payload: {
        email,
        password
    }
}) {
    try {
        const {
            user
        } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromAuth(user)
    } catch (error) {
        yield put(signinFail(error))
    }
}
export function* onSignInStart() {
    yield takeLatest(SIGNIN_START, signInWithEmail)
}


export function* profilSagas() {
    yield all([call(onGoogleSignInStart),
        call(onSignInStart)
    ])
}