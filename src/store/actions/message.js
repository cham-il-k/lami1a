import { apiCall } from "../../util/api-call";
import { addError,removeError} from './error'

export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
//export const FETCH_PROGRAM = 'FETCH_PROGRAM';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const createMessageStart = (message ) => {
    return {
        type:CREATE_MESSAGE_START,
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
