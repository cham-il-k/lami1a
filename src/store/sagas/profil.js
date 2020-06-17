import {takeLatest, call, put, all} from "redux-saga/effects";
import {
    GOOGLE_SIGNIN_START,
    EMAIL_SIGNIN_START,
    SIGNUP_START,
    SigninSuccess,
    SigninFail,
    signUpFail,
    signUpSuccess,
    CHECK_PROFIL_SESSION,
    LOGOUT_START,
    logOutFail,
    logOutSuccess,
    SIGNUP_SUCCESS,
} from './../actions/profil'
import {googleProvider,createUserProfilDocument, getCurrentProfil} from './../../util/db/auth.firebase'
import {apiRegister} from './../api'

import firebase, { auth, firestore} from './../../util/db/db'

export function* getSnapShotFromAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfilDocument, userAuth, additionalData)
        const userSnapShot = yield userRef.get()
        yield put(SigninSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))
    } catch (error) {
        yield put(SigninFail(error))
    }
}
//Google
export function* googleSignIn() {
    try {
        const {
            user
        } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromAuth(user)
    } catch (error) {
        yield put(SigninFail(error))
    }
}
//SignUP
export function* signInAfterSignUP({payload: {user, additionalData} }) {
    yield put(getSnapShotFromAuth(user, additionalData))
}

export function* signUp({payload :{email, password, login}}) {
    try {
        const {user, additionalData} = yield apiRegister({email, password})
        yield put(getSnapShotFromAuth({user, additionalData:{login}}))
    } catch (error) {
        yield put(signUpFail(error))
    } 
}
//Email SignIn
export function* emailSignIn({payload :{email,password}}) {
    try {
        console.log(JSON.stringify({email,password}))
        const {
            user
        } = yield auth.signInWithEmailAndPassword(email, password);
         yield getSnapShotFromAuth(user)
        
    } catch (error) {
        yield put(SigninFail(error))
    }
}
// logout 
export function* logout(){
    try {
        console.log('logout')
         yield auth.signOut()
        yield put(logOutSuccess())
    } catch (error) {
        yield put(logOutFail(error))
    }
} 


//handlers saga start actions
export function* isAuthenticated() {
    try {
        const userAuth = yield getCurrentProfil()
        if(!userAuth) return
        yield getSnapShotFromAuth(userAuth)
    } catch (error) {
        yield put(SigninFail(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, googleSignIn)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGNIN_START, emailSignIn)
}

export function* onsignUpSuccess() {
    yield takeLatest(SIGNUP_SUCCESS, signInAfterSignUP) 
} 

export function* onSignUpStart() {
    yield takeLatest(SIGNUP_START, signUp)
}
export function* onLogoutStart() {
    console.log('logout start')
    yield takeLatest(LOGOUT_START, logout)
}
export function* onCheckProfilSession() {
    yield takeLatest(CHECK_PROFIL_SESSION, isAuthenticated)
}

export function* profilSagas() {
    yield all([    
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onCheckProfilSession),
        call(onLogoutStart),
        call(onsignUpSuccess)
    ])
}