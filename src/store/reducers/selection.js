import {
    FETCH_SELECTIONS_SUCCESS,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SELECTIONS_FAIL,
    INIT_COLLECTION,
    FETCH_COLLECTION,
    REMOVE_COLLECTION_SUCCESS,
    REMOVE_SELECTION,
    INIT_SELECTIONS,
    ADD_COLLECTION_SUCCESS,
    FETCH_PRODUCTS_FAIL,
} from './../actions/selection'
const initialState = {
        selections:{},
        collections:{},
        isFetching:false,
        items:{},
        error: '',
        loading: false
    };
    
const selectionReducer = ( state = initialState , action) => {
    switch (action.type) {
        case FETCH_SELECTIONS_SUCCESS:
           // console.log(action.payload)
            return {
                ...state,
                selections: action.payload
            };
            
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload
            };
            
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                items: action.payload
            };
        

        case ADD_COLLECTION_SUCCESS:
            return {
                ...state,
                 collections: [...state.collections, action.payload]
            };
        
        case REMOVE_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload
            };
        
        default:
            return state ;       
    
    }
}

export default selectionReducer; 
