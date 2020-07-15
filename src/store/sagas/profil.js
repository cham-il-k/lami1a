import {takeLatest, call, put, all} from "redux-saga/effects";
import {
    updateProfilSuccess,
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
    GET_PROFIL_DOCUMENT,
    getProfilDocument,
    updateProfilFail,
    isAuthenticatedFail
} from './../actions/profil'
import {googleProvider } from './../../util/db/auth.firebase'
import {apiRegister, apiCreateUserProfilDocument,apiUpdateCredential, apiGetCurrentProfil} from './../api/profils'
import {requestNotificationPermissions} from './../api/messages'

import { isEmpty } from './../../util/is-empty'
import firebase, { auth, firestore, firebaseTimestamp} from './../../util/db/db'
import { selectCurrentCollection, selectCurrentProfil } from "../selectors/profil";
 
export function* asyncGetProfilDocument(uid) {
 if(!uid) return
    try {
      const profilData = yield firestore.collection('profils').doc(uid).get()
        return({uid, ...profilData.data()})        
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
        const profilRef = yield firestore.doc(`/profils/${uid}`)
       console.log({profilRef}) 
       if(profilRef.get().exists) {
           yield put(signInSuccess({uid,...profilRef.get().data()}))
         }
        else {
            const createdAt = new Date();
            const userProfil = { email,products:[], collections:[],createdAt, favoutites:[],comments:[]}
                yield profilRef.set(userProfil, { merge: true })
            const profilSnapShot = yield profilRef.get()
            console.log({profilSnapShot})  
            yield put(signInSuccess({uid,...profilSnapShot.data()} ))
         }
        } catch (error) {
             yield put(signUpFail({error, message : ' You can t signUP'}))
       }
}

//SignUP
export function* signInAfterSignUP({payload: {userCred} }) {
    console.log({userCred}) 
    yield put(signInSuccess({
        uid: userCred.uid,
        ...userCred
    })) 
}

export function* signUp({payload :{email, password, login}}) {
try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    console.log({user})
    user.sendEmailVerification()
    const {uid} = user
    const createdAt = firebaseTimestamp()
    const profilRef = yield firestore.doc(`profils/${uid}`)
    const profilSnapshot = yield profilRef.get()
    console.log({currentUser:auth.currentUser}) 
    if(profilSnapshot.exists) {
        console.log(profilSnapshot.data())
        yield put(signUpSuccess({uid,...profilSnapshot.data()}))
    }
    else {
        const userProfil = { login, email,products:[], collections:[],createdAt, favourites:[],comments:[]}
        const profilData =  yield profilRef.set(userProfil)
        const profilSnapshot = profilData.get()
        console.log({profilSnapshot})
        yield put(signUpSuccess({uid,...profilSnapshot.data()} ))
    }
    } catch (error) {
            yield put(signUpFail({error, message : 'You cant signUp'}))
    }
}
//Email SignIn
export function* emailSignIn({payload}) {
    try {
        
        const {email, password} = payload['email']
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const {uid} = user
        const profilRef = yield  firestore.doc(`/profils/${uid}`)
        const profilSnapshot = yield profilRef.get()
        if(profilSnapshot.exists) {
            yield put(signInSuccess({uid,...profilSnapshot.data()}))
        }
        else {
            const createdAt = new Date();
            const userProfil = { email,products:[], collections:[],createdAt, favoutites:[],comments:[]}
             yield profilRef.set(userProfil, { merge: true })
            const profilSnapShot = yield profilRef.get()
            console.log({profilSnapShot})  
            yield put(signInSuccess({uid,...profilSnapShot.data()} ))
         }
        
        } catch (error) {
            yield put(signInFail({error, message : 'You can t signIn'}))
        }
}

// logout 
export function* logout(){
    try {
        yield auth.signOut()
        yield put(logOutSuccess())
    } catch (error) {
            yield put(logOutFail(error))
    }
} 
//update profil
export function* updateProfilAsync({payload}) {
    try {
        console.log({payload})
        const {uid,login,email,address, city , country} = payload
        console.log({credential:{uid,login,email,address, city , country}})
        yield call(apiUpdateCredential,[uid,login,email,address, city , country])
        yield put(updateProfilSuccess(payload))
    } catch (error) {
        put(updateProfilFail(error))
    }
}

export function* isAuthenticated() {
    try {
        const userAuth = yield call(apiGetCurrentProfil)
        if(!userAuth) return
        const profilRef =  yield  firestore.doc(`/profils/${userAuth.uid}`)
        const profilData =  yield profilRef.get()
        yield put(setCurrentProfil({uid:userAuth.uid, ...profilData.data()}))
    } catch (error) {
        yield 
    }
}


//handlers saga start actions
export function* onUpdateProfilStart() {
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
    yield takeLatest(LOGOUT_START, logout)
}
export function* onCheckProfilSession() {
    yield takeLatest(CHECK_PROFIL_SESSION, isAuthenticated)
}
export function* onGetProfilDocument() {
    yield takeLatest(GET_PROFIL_DOCUMENT, asyncGetProfilDocument)
}

export function* profilSagas() {
    yield all([    
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onCheckProfilSession),
        call(onLogoutStart),
        call(onSignUpSuccess),
        call(onUpdateProfilStart),
        call(onGetProfilDocument)
        ])
}