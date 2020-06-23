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
    setCurrentProfil,
} from './../actions/profil'
import {googleProvider, getCurrentProfil} from './../../util/db/auth.firebase'
import {apiRegister, apiCreateUserProfilDocument} from './../api/profils'
import { isEmpty } from './../../util/is-empty'
import firebase, { auth, firestore} from './../../util/db/db'
import { selectCurrentCollection, selectCurrentProfil } from "../selectors/profil";

export function* getSnapShotData(uid) {
    try {
        let profilFull = {}
        const profilRef = yield firestore.collection('profils').doc(uid)
        console.log({profilRef })
        yield profilRef.get().then(async doc => {
            if (doc.exists) {
                console.log(doc.data())
                profilFull = doc.data()
                return doc.data()
            }
            else 
            {
                console.log({doc})
            }
        })/* 
        yield put(SigninSuccess({
            id:uid,
            ...profilFull
        })) */
        
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
        const { uid, email} = user
        console.log({uid},{email})
        console.log({user})
        const profilSnapshot = yield call(apiCreateUserProfilDocument,[uid,email])
        if(!isEmpty(profilSnapshot)) {
            if(profilSnapshot.exists) {
                console.log({profilSnapshot})
                yield  put(selectCurrentProfil(profilSnapshot.data()))
            } else {
           return Promise.reject(
               {error:{
               message:"api create profil returns not exist"
           } })
        }
        
        }} catch (error) {
        yield put(SigninFail({error: {
            error,
            errorMAssage:error.message
        }}))
    }
}
//SignUP
export function* signInAfterSignUP({payload: {user} }) {
    const profilData =  yield getSnapShotData(user.uid)
    yield put(setCurrentProfil(profilData))
    
    yield put(SigninSuccess({
        id: user.uid,
        ...profilData
    })) 
}



export function* signUp({payload :{email, password, login}}) {
    try {
        const profilSnapsot = yield call(apiRegister,[email, password,login])
     console.log(profilSnapsot.data())            
    } catch (error) {
        yield put(signUpFail(error))
    } 
}
//Email SignIn
export function* emailSignIn({payload}) {
    try {
        const {email, password} = payload.email
        const {
            user
        } = yield auth.signInWithEmailAndPassword(email, password);
         
        const profilData =  yield getSnapShotData(user.uid)
        
       yield put(setCurrentProfil(profilData))
         yield put(SigninSuccess({
            id: user.uid,
            ...profilData
        }))
        
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
       const profilData =  yield getSnapShotData(userAuth.uid)
       put(setCurrentProfil(profilData))
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