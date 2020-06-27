import {takeLatest, call, put, all} from "redux-saga/effects";
import {
    GOOGLE_SIGNIN_START,
    EMAIL_SIGNIN_START,
    SIGNUP_START,
    signInSuccess,
    signInFail,
    signUpFail,
    signUpSuccess,
    CHECK_PROFIL_SESSION,
    LOGOUT_START,
    logOutFail,
    logOutSuccess,
    SIGNUP_SUCCESS,
    setCurrentProfil,
    UPDATE_PROFIL_START,
    updateProfilFail,updateProfilSuccess,
    ADD_USER_START,addUserSuccess, addUserFail
} from './../actions/profil'
import {googleProvider, getCurrentProfil} from './../../util/db/auth.firebase'
import {apiRegister, apiCreateUserProfilDocument,apiUpdateCredential} from './../api/profils'
import {requestNotificationPermissions} from './../api/messages'

import { isEmpty } from './../../util/is-empty'
import firebase, { auth, firestore} from './../../util/db/db'
import { selectCurrentCollection, selectCurrentProfil } from "../selectors/profil";

export function* getSnapShotData(uid) {
    try {
        let profilFull = {}
        const profilRef = yield firestore.collection('profils').doc(uid)
        console.log({profilRef })
        profilRef.get().then(async profilSnapshot => {
            if (profilSnapshot.exists) {
                console.log(profilSnapshot.data())
                return profilSnapshot
            }else{
                return {
                    error:{
                        message:'document dont exist'
                    }
                }
            }
        })
    } catch (error) {
        yield put(signInFail(error))
    }
}
//Google
export function* googleSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const { uid, email} = user
        console.log({user})
        const profilSnapshot = yield call(apiCreateUserProfilDocument,[uid,email])
        console.log(profilSnapshot.data())
        if(!isEmpty(profilSnapshot)) {
              //yield  put(setCurrentProfil(uid,...profilSnapshot.data()))
              yield  put(signInSuccess( {uid,...profilSnapshot.data()} ))
            } else {
           return put(signInFail({message:"can t create Profil "}))
        }
        }catch (error) {
        yield put(signInFail(error ))
    }
}
//SignUP
export function* signInAfterSignUP({payload: {user} }) {
    const profilData =  yield getSnapShotData(user.uid)
    console.log('signIn  After signUp', {user})
    //yield put(setCurrentProfil({uid:user.uid,...profilData}))
    
    yield put(signInSuccess({
        uid: user.uid,
        ...user
    })) 
}

export function* signUp({payload :{email, password, login}}) {
    try {
        const profilCred = yield call(apiRegister,[email, password,login])
        if(!!profilCred.error) {
            if (profilCred.error['code'] === 'auth/email-already-in-use')
            yield put(signUpFail(profilCred.error))
        }else {

            yield put(signUpSuccess({...profilCred.data()}))
        }
        //yield put(setCurrentProfil({uid, profilData}))
    } catch (error) {
        yield put(signUpFail(error))
    } 
}
//Email SignIn
export function* emailSignIn({payload}) {
    try {
        console.log({payload})
        const {email, password} = payload['email']
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        console.log({user})
        const {uid} = user
        const profilSnapshot = yield call(apiCreateUserProfilDocument,[uid,email])
        console.log(profilSnapshot.data())
        if(!isEmpty(profilSnapshot)) {
              //yield  put(setCurrentProfil(uid,...profilSnapshot.data()))
              yield  put(signInSuccess({uid,...profilSnapshot.data()}))
            } else {
           return put(signInFail({message:"can t create Profil "}))
        }
        }catch (error) {
        yield put(signInFail(error ))
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
//update profil
export function* updateProfilAsync(credUpdate) {
    try {
        const {login,email,address, city , country} = credUpdate
        yield call(apiUpdateCredential,[login,email,address, city , country])
    } catch (error) {
        put(updateProfilFail(error))
    }
}

//handlers saga start actions
export function* isAuthenticated() {
    try {
        const userAuth = yield call(getCurrentProfil)
        if(!userAuth) return
        //yield call(requestNotificationPermissions)
        const profilData =  yield getSnapShotData(userAuth.uid)
      yield put(setCurrentProfil(profilData))
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* onUpdateStart() {
    yield takeLatest(UPDATE_PROFIL_START, updateProfilAsync)
}
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, googleSignIn)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGNIN_START, emailSignIn)
}

export function* onSignUpSuccess() {
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
        call(onSignUpSuccess),
        call(onUpdateStart),
        
    ])
}