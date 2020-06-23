import { auth } from "../../util/db/db";
import { apiRegister, apiGetAllProfils} from './../api'
/**
 * ACTION TYPE
 */
export const EMAIL_SIGNIN_START = 'EMAIL_SIGNIN_START';
export const GOOGLE_SIGNIN_START = 'GOOGLE_SIGNIN_START';

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'

export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export const CHECK_PROFIL_SESSION = 'CHECK_PROFIL_SESSION'

export const SET_CURRENT_PROFIL = 'SET_CURRENT_PROFIL'
export const SELECT_CURRENT_PROFIL = 'SELECT_CURRENT_PROFIL'

export const GET_COLLECTIONS_TITLE = 'GET_COLLECTIONS_TITLE'
export const GET_ALL_PROFILS = 'GET_ALL_PROFILS'
export const DEL_CART_ON_START = 'DEL_CART_ON_START'
export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const GET_COLLECTION = 'GET_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';

 
export const checkProfilSession = () => ({
    type: CHECK_PROFIL_SESSION
})

export const setCurrentProfil = (profil) => {
   console.log({profil})
    return { 
       type:SET_CURRENT_PROFIL,
        payload: profil
    }
} 
export const signUpStart = (profilCredential) => {
    return {
        type:SIGNUP_START,
        payload: profilCredential 
    }
}
export const  signUpSuccess = async ({user,additionalData}) => {
        return {
            type: SIGNUP_SUCCESS,
            payload:{user,additionalData}
        }
}  
export const signUpFail = (error) => {
    return {
        type:SIGNUP_FAIL,
        error:error
    }
}
export const emailSigninStart = (emailAndPassword) => ({
    type: EMAIL_SIGNIN_START,
    payload:emailAndPassword
})

export const SigninSuccess = (profil) => {

console.log({profil})

    return     {
    type: SIGNIN_SUCCESS,
    payload:profil
}
}

export const SigninFail = (error) => ({
    type: SIGNIN_FAIL,
    payload: error
    
})

export const googleSigninStart = () => ({
    type: GOOGLE_SIGNIN_START,
    
})



export const logOutStart = () => {
    return {
        type: LOGOUT_START,
    }
}

export const logOutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
        
    }
}
export const logOutFail = (error) => {
    return {
        type: LOGOUT_FAIL,
        payload:error
    }
}

export const getCollectionsTitle = async () => {
        return {
            type: GET_COLLECTIONS_TITLE,
        }
}
export const getAllProfils = async () => {
    const profils = await apiGetAllProfils()
    console.log(profils) 
    return {
        type: GET_ALL_PROFILS,
        payload: profils
}
}
export const delCartOnStart = () => {
    return {
        type:DEL_CART_ON_START
    }
}