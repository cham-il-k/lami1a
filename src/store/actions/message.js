import { apiCall } from "../../util/api-call";
import { addError,removeError} from './error'

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
//export const FETCH_PROGRAM = 'FETCH_PROGRAM';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const addMessage = (message ) => {
    return {
        type:ADD_MESSAGE,
        payload : {
            ...message
        }
    }
}
export const loadMessages = (messages) => {
    return {
        type:LOAD_MESSAGES,
        payload: {messages}
    }
}

export const removeMessage = (message ) => {
    return {
        type:REMOVE_MESSAGE,
        payload : {
            message
        }
    }
}
export const fetchMessages = () => {
    return dispatch => {
        apiCall('get','/message').then(res => {
            dispatch(loadMessages(res))
        }).catch( err => 
            addError(err.message)   )
        }
    }
