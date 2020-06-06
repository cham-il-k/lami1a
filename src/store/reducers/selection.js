import {INITIAL_COLLECTIONS} from './shopData'
import {
    FETCH_SELECTIONS_SUCCESS,
    FETCH_COLLECTIONS,
    FETCH_SELECTION,
    ADD_COLLECTION,
    INIT_COLLECTION,
    FETCH_COLLECTION,
    REMOVE_COLLECTION,
    REMOVE_SELECTION,
    INIT_SELECTIONS
} from './../actions/selection'
const initialState = {
        selections: INITIAL_COLLECTIONS,
        error: '',
        loading: false
    };
    
const selectionReducer = ( state = initialState , action) => {
    switch (action.type) {
        case FETCH_SELECTIONS_SUCCESS:
            return {
                ...state,
                selections: action.payload
            };
            
        case FETCH_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        
        case ADD_COLLECTION:
            return {
                ...state,
                 collections: [...state.collections, action.payload]
            };
        
        case REMOVE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        case REMOVE_SELECTION:
            return {
                ...state,
                selections: action.payload
            };
        default:
            return state ;       
    
    }
}

export default selectionReducer; 
