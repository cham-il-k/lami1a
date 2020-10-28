import {takeLatest, call, put, all, fork } from "redux-saga/effects";
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

import { isEmpty } from '../../util/validators'
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
        //console.log({user})
        yield put(setCurrentProfil({uid,email}))
        const profilRef = yield firestore.doc(`/profils/${uid}`)
       console.log({profilRef}) 
       if(profilRef.get().exists) {
           yield put(signInSuccess({uid,...profilRef.get().data()}))
         }
        else {
            const createdAt = new Date();
            const userProfil = { email,products:[], collections:[],createdAt, favoutites:[],comments:[]}
            yield profilRef.set(userProfil, { merge: true })
            const profilSnapshot = yield profilRef.get()
            console.log({profilSnapshot})  
            yield put(signInSuccess({uid,...profilSnapshot.data()} ))
            /* yield put(setCurrentProfil({uid,...profilSnapshot.data()})) */
       
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

export function* signUp({...payload}) {
console.log({payload})
    try {
    let {email, password, login} = payload.payload
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    //console.log({user})
    const currentProfil= {uid:user.uid, email: user.email, login:login}
    yield put(setCurrentProfil(currentProfil))
    console.log( {emailVerif: user.sendEmailVerification()})
    const {uid} = user
    const createdAt = firebaseTimestamp()
    const profilRef = yield firestore.doc(`profils/${uid}`)
    const profilSnapshot = yield profilRef.get()
    console.log({data: profilSnapshot['data']}) 
    if(profilSnapshot.exists) {
        console.log({profilData: profilSnapshot.data()})
        yield put(signUpSuccess({uid,...profilSnapshot.data()}))
    
    }
    else {
        const createdAt = new Date();
       const userProfil = { login, email,products:[], collections:[],createdAt, favourites:[],comments:[], createdAt}
       // profilSnapshot.set
       try {
           const profilSnap = yield  profilRef.set(userProfil)
           const userDocument =  yield call(asyncGetProfilDocument(uid))
           yield put(signUpSuccess({uid,...userDocument} ))
           console.log({snapshot: profilSnap})
        } catch (error) {
            yield put(signUpFail({error, message : error.message}))
        }
    }
    } catch (error) {
            yield put(signUpFail({error, message : error.message}))
    }
}
//Email SignIn
export function* emailSignIn({payload}) {
    try {
        const {email, password} = payload['email']
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const {uid} = user
        yield put(setCurrentProfil({uid,email:user.email}))
        
        const profilRef = yield  firestore.doc(`/profils/${uid}`)
        const profilSnapshot = yield profilRef.get()
        if(!profilSnapshot.exists) {
            const createdAt = new Date();
            const userProfil = { email,products:[], collections:[],createdAt, favoutites:[],comments:[]}
             yield profilRef.set(userProfil, { merge: true })
            const profilSnapshot = yield profilRef.get()
           /*  yield put(setCurrentProfil({uid,...profilSnapshot.data()}))
            */ 
           yield put(signInSuccess({uid,...profilSnapshot.data()} ))
        
        }
        yield put(signInSuccess({uid,...profilSnapshot.data()} ))
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
         const {uid,login,email,address, city , country, role} = payload
        console.log({credential:{uid,login,email,address, city , country, role}})
        const profilRef = yield firestore.collection('profils').doc(uid).update({address,city,country,login, role})
            console.log({profilRef})
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
           // console.log(profilData.data())  
        yield put(setCurrentProfil({uid:userAuth.uid, ...profilData.data()}))
    } catch (error) {
        yield put(isAuthenticatedFail(error)) 
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
        fork(onGoogleSignInStart),
        fork(onEmailSignInStart),
        fork(onSignUpStart),
        fork(onCheckProfilSession),
        fork(onLogoutStart),
        fork(onSignUpSuccess),
        fork(onUpdateProfilStart),
        fork(onGetProfilDocument)
        ])
}