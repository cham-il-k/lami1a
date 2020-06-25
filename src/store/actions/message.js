import { apifetchMessages, } from './../api/messages'

export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAIL = 'FETCH_MESSAGES_FAIL'

export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'

export const REMOVE_MESSAGE_START = 'REMOVE_MESSAGE_START'
export const REMOVE_MESSAGE_SUCCESS = 'REMOVE_MESSAGE_SUCCESS'
export const REMOVE_MESSAGE_FAIL = 'REMOVE_MESSAGE_FAIL'


export const ADD_MESSAGE_START = 'ADD_MESSAGE_START'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS'
export const ADD_MESSAGE_FAIL = 'ADD_MESSAGE_FAIL'

export const fetchMessagesStart =  () => ({type: FETCH_MESSAGES_START})


export const fetchMessagesSuccess =  (messages) => {
    console.log(messages)    
    return {
                type: FETCH_MESSAGES_SUCCESS,
                payload:messages,
                errors: null
            }
    }
export const fetchMessagesFail =  () => {
    return {
        type: FETCH_MESSAGES_FAIL,
        errors: 'fetch messages Fail'
    }
}
export const addMessageStart = () => {
    return {
        type: ADD_MESSAGE_START,
       }
}

export const addMessageSuccess = (message) => {
    return {
        type: ADD_MESSAGE_SUCCESS,
        payload: message
    }
}

export const addMessageFail = (error) => {
    return {
        type: ADD_MESSAGE_FAIL,
        payload: error
    }
}

export const removeMessageStart = () => {
    return {
        type: ADD_MESSAGE_START,
    }
}
export const removeMessageSuccess = (message) => {
    return {
        type: REMOVE_MESSAGE_SUCCESS,
        payload: message
    }
}

export const removeMessageFail = (error) => {
    return {
        type: REMOVE_MESSAGE_SUCCESS,
        payload: error

    }
}


export const fetchUsersStart =  () => ({type: FETCH_USERS_START})


export const fetchUsersSuccess =  (users) => {
    console.log(users)    
    return {
                type: FETCH_USERS_SUCCESS,
                payload:users,
                errors: null
            }
    }
export const fetchUsersFail =  () => {
    return {
        type: FETCH_USERS_FAIL,
        errors: 'fetch users Fail'
    }
}
