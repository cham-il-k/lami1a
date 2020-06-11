import { apifetchSelections, apifetchCollections} from './../api'
import {firestore} from './../../util/db/db'


export const ADD_SELECTION = 'ADD_SELECTION'
export const FETCH_SELECTIONS_SUCCESS = 'FETCH_SELECTIONS_SUCCESS'
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS'
export const FETCH_SELECTION = 'FETCH_SELECTION'
export const FETCH_FAIL = 'FETCH_FAIL'
export const REMOVE_SELECTION = 'REMOVE_SELECTION'
export const INIT_SELECTION = 'INIT_SELECTION'
export const INIT_SELECTIONS = 'INIT_SELECTIONS'
export const ADD_COLLECTION = 'ADD_COLLECTION'
export const INIT_COLLECTION = 'INIT_COLLECTION'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION'

export const fetchSelections =  (selections) => {
        return {
                type: FETCH_SELECTIONS_SUCCESS,
                payload:selections,
                errors: null
            }
    }
export const addCollection = (collection) => {
    return {
        type: ADD_COLLECTION,
        payload: collection

    }
}

export const initSelections = async () => {
    const selections = apifetchSelections
    return {
        type: INIT_SELECTIONS,
        payload: selections
    }
}
export const addSelection = (selection) => {
    return {
        type: ADD_SELECTION,
        payload: selection
    }
}
export const initCollection = (collection) => {
    return {
        type: INIT_COLLECTION,
        payload: collection
    }
}
export const fetchCollections = async () => {
        try {
            const collections = await apifetchCollections()
            return {
                type: FETCH_COLLECTIONS,
                payload: collections,
                errors: null
            }
        } catch (err) {
            return {
                type: FETCH_FAIL,
                payload: {},
                errors: err
            }
        }

    }
