import { takeEvery, take, put , call, takeLatest } from 'redux-saga/effects'
import firebase  from 'firebase'
import 'firebase/firestore'
import { fetchCollectionSuccess, fetchCollectionsFail} from './../actions/shop'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const PAY_PRODUCT = 'PAY_PRODUCT'
export const PAY_PRODUCT_FAIL = 'PAY_PRODUCT_FAIL'
export const VALID_PRODUCT = 'VALID_PRODUCT'
export const SHIP_PRODUCT = 'SHIP_PRODUCT'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'

const firestore = firebase.firestore()
export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* fetchCollectionsAsync( ) {
    try {
        const collections = []
        const collectionRef =  firestore.collection('selection').then(collectionRef => (collectionRef.get())).then(snapShot =>
                {
                    snapShot.map(collection => {
                        collections.concat(collection.data())
                    })
                }
            )
        yield put(fetchCollectionSuccess(collections))    
    }
    catch (error) {
      yield put(fetchCollectionsFail(error.message))  
     }
}

export function* validProduct( product ){
    yield take(VALID_PRODUCT)
}
export function* payProduct( id ){
yield take( PAY_PRODUCT)
}
export function* shipProduct(checkout){
 yield take(SHIP_PRODUCT)
}