import { firestore } from "firebase";
import { auth } from "../../util/db/db";
import { register } from './../api'
/**
 * ACTION TYPE
 */
export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'

export const GOOGLE_SIGNIN_START = 'SIGNIN_START';
export const GOOGLE_SIGNIN_SUCCESS = 'GOOGLE_SIGNIN_SUCCESS'
export const GOOGLE_SIGNIN_FAIL = 'GOOGLE_SIGNIN_FAIL'

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'


export const SET_CURRENT_PROFIL = 'SET_CURRENT_PROFIL'
export const SELECT_CURRENT_PROFIL = 'SELECT_CURRENT_PROFIL'

export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const GET_COLLECTION = 'GET_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const LOGOUT = 'LOGOUT'


export const setCurrentProfil = (profil) => {
    return {
        type: SET_CURRENT_PROFIL,
        payload: profil
    }
}
export const  registerStart = async ({email, password}) => {
    return register({email, password}).then( userAuth => {
        return {
            type: SIGNUP_SUCCESS,
            payload:userAuth

        }
    }, (errorMessage => Promise.reject(errorMessage)
    ))
}  

export const signinStart = (emailAndPassword) => ({
    type: SIGNIN_START,
    payload: emailAndPassword
})

export const signinSuccess = (profil) => ({
    type: SIGNIN_SUCCESS,
    payload:profil
})

export const signinFail = (error) => ({
    type: SIGNIN_FAIL,
    payload: error
    
})

export const googleSigninStart = () => ({
    type: GOOGLE_SIGNIN_START,
    
})


export const setAuthToken = token => {
if (token) {
    localStorage.setItem('jwtToken', `Bearer ${token}`)
} else {
    localStorage.removeItem('jwtToken')
}
}

export const logOut = () => {
    auth().logOut()
    return {
        type: LOGOUT,
        
    }
}