import {  apiGetAllProfils} from './../api'

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


export const SET_NULL_CURRENT_USER = 'SET_NULL_CURRENT_USER'
export const SET_NULL_ERROR = 'SET_NULL_ERROR'
export const SET_NULL_CURRENT_PROFIL = 'SET_NULL_CURRENT_PROFIL'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CHECK_CURRENT_USER = 'CHECK_CURRENT_USER'

export const SIGN_PROFIL_FAIL = 'SIGN_PROFIL_FAIL'
export const SIGN_PROFIL_SUCCESS = 'SIGN_PROFIL_SUCCESS'
export const SIGN_PROFIL_START = 'SIGN_PROFIL_SUCCESS'

export const CHECK_PROFIL_SESSION = 'CHECK_PROFIL_SESSION'
export const IS_AUTHENTICATED_FAIL =  'IS_AUTHENTICATED_FAIL'
export const GET_PROFIL_DOCUMENT = 'GET_PROFIL_DOCUMENT'
export const SET_COLLECTION_SELECTION = 'SET_COLLECTION_SELECTION'
export const SET_CURRENT_PROFIL = 'SET_CURRENT_PROFIL'
export const SELECT_CURRENT_PROFIL = 'SELECT_CURRENT_PROFIL'
export const UPDATE_PROFIL_START = 'UPDATE_PROFIL_START'
export const UPDATE_PROFIL_SUCCESS = 'UPDATE_PROFIL_SUCCESS'
export const UPDATE_PROFIL_FAIL = 'UPDATE_PROFIL_FAIL'
export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'

export const GET_COLLECTIONS_TITLE = 'GET_COLLECTIONS_TITLE'
export const GET_ALL_PROFILS = 'GET_ALL_PROFILS'
export const DEL_CART_ON_START = 'DEL_CART_ON_START'
export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const GET_COLLECTION = 'GET_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';

 
export const checkProfilSession = () => ({
    type: CHECK_PROFIL_SESSION
})
export const checkCurrentUser = () => ({
    type: CHECK_CURRENT_USER
})
export const getProfilDocument = (uid) => ({
    type: GET_PROFIL_DOCUMENT,
    payload:uid
})

export const setCurrentProfil = (profil) => {
  //console.log({profil})
    return { 
       type:SET_CURRENT_PROFIL,
        payload: profil
    }
} 
export const signUpStart = ({...cred}) => {
    
    return {
        type:SIGNUP_START,
        payload: cred 
    }
}

export const signProfilStart = (profil) => {
    console.log({profil})
    return {
        type:SIGN_PROFIL_START,
        payload: profil 
    }
}
export const  signUpSuccess = async (userCred) => {
    console.log({userCred}) 
    return {
            type: SIGNUP_SUCCESS,
            payload:{...userCred}
        }
}  
export const signUpFail = (error) => {
    console.warn({error})
    return {
        type:SIGNUP_FAIL,
        error:error,
    }
}

export const emailSigninStart = (emailAndPassword) => {
    console.warn({emailAndPassword})
 return{   type: EMAIL_SIGNIN_START,
    payload:emailAndPassword}
}

export const signInSuccess = (profil) => {
//console.log({profil})
    return     {
    type: SIGNIN_SUCCESS,
    payload:profil
}
}

export const signInFail = (error) =>{ 
    console.log({...error})
return {
    type: SIGNIN_FAIL,
    error: {...error}
    
}}

export const signProfilFail = (error) =>{ 
    console.log({...error})
return {
    type: SIGN_PROFIL_FAIL,
    error: {...error}
    
}}

export const signProfilSuccess = (profil) =>{ 
    console.log({profil})
return {
    type: SIGN_PROFIL_SUCCESS,
    payload: profil
    
}}

export const setNullError = () => ({
    type: SET_NULL_ERROR,
    })


export const setNullCurrentProfil = () => ({
    type: SET_NULL_CURRENT_PROFIL,
    })    

export const setNullCurrentUser = () => ({
    type: SET_NULL_CURRENT_USER,
    })    

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
} 
 export const setCurrentUser = (user) => {
     return {
         type:SET_CURRENT_USER,
         payload:user
     }
 }

export const isAuthenticatedFail =(error) => {
    
    return({
    type:IS_AUTHENTICATED_FAIL,
    payload: error
    })
}
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

export const updateProfilStart = (credential) => {
    console.log({credential})
    return{
      type: UPDATE_PROFIL_START,
        payload:credential
    }
}


export const updateProfilSuccess = (profil) => ({
    type: UPDATE_PROFIL_SUCCESS,
    payload:profil
})

export const updateProfilFail = (error) => ({
    type: UPDATE_PROFIL_FAIL,
    error:error
})

export const addUserStart = (credUser) => ({
    type:ADD_USER_START,
    payload:credUser
})

export const addUserSuccess = () => ({
    type:ADD_USER_SUCCESS,
    
})

export const addUserFail = () => ({
    type:ADD_USER_FAIL,
})

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