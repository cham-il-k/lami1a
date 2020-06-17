import {  all , put , call, takeLatest } from 'redux-saga/effects'
import { fetchCollectionsSuccess, fetchCollectionsFail,
     fetchSelectionsSuccess, fetchSelectionsFail,
         fetchProductsFail, fetchProductsSuccess
    } from '../actions/selection'
import { FETCH_COLLECTIONS_START, FETCH_PRODUCTS_START, FETCH_SELECTIONS_START} from './../actions/selection'
import {firestore} from './../../util/db/db'
import {transformCollectionSnapshotToMap} from './../../util/db/db'

//Selections
export function* fetchSelectionsAsync( ) {
    try {
        let collectionsMap = null
        const selectionRef = yield firestore.collection('selections')
         const snapshot = yield selectionRef.get()
         console.log((`${snapshot} sagas selections`))
        collectionsMap = yield call(transformCollectionSnapshotToMap, snapshot)
        yield put(fetchSelectionsSuccess(collectionsMap))    
        }
    catch (error) {
        console.log(`${error} sagas selections`)
      yield put(fetchSelectionsFail(error.message))  
     }
}
export function* onfetchSelectionsStart() {
    yield takeLatest(FETCH_SELECTIONS_START, fetchSelectionsAsync)
}
//Colection managment
export function* fetchCollectionsAsync( ) {
    try {
        const collections = []
        const collectionRef =  firestore.collection('collections').then(collectionRef => (collectionRef.get())).then(snapShot =>
                {
                    snapShot.map(collection => {
                        collections.concat(collection.data())
                    })
                }
            )
        yield put(fetchCollectionsSuccess(collections))    
    }
    catch (error) {
      yield put(fetchCollectionsFail(error.message))  
     }
}
export function* onfetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
//products
export function* fetchProductsAsync() {
    try {
        const products = []
        const collectionsSnapshot =  firestore.collection('products').get()
        collectionsSnapshot.docs.map(colSnapshot => {
            console.log(colSnapshot.data())
            return products.push(colSnapshot)
        })
        yield put(fetchProductsSuccess(products))    
    }
    catch (error) {
      yield put(fetchProductsFail(error.message))  
     }
}

export function* onfetchProductsStart() {
    yield takeLatest(FETCH_PRODUCTS_START, fetchProductsAsync)

} 
// Root ProfilsSagas

export function* selectionSagas() {
     yield all([call(onfetchCollectionsStart),
            call(onfetchProductsStart),
             call(onfetchSelectionsStart)
            ])
 }
