import {  all , put , call, takeLatest } from 'redux-saga/effects'
import { fetchCollectionsSuccess, fetchCollectionsFail,
     fetchSelectionsSuccess, fetchSelectionsFail,
         fetchProductsFail, fetchProductsSuccess,
         addProductSuccess, addProductFail
    } from '../actions/selection'
import { FETCH_COLLECTIONS_START, FETCH_PRODUCTS_START, FETCH_SELECTIONS_START, ADD_PRODUCT_START} from './../actions/selection'
import {firestore} from './../../util/db/db'
import {transformCollectionSnapshotToMap} from './../../util/db/db'
import {isAuthenticated} from './profil'
import slug from 'slug'
import { clearCart } from '../actions/cart'
import { GET_COLLECTIONS_TITLE } from '../actions/profil'
//SELECTION 
export function* fetchSelectionsAsync( ) {
    try {
        let collectionsMap = null
        const userProfil= yield call(isAuthenticated)
        if(!userProfil ) {
            yield put(clearCart())
        } 
        const selectionRef = yield firestore.collection('selections')
         const snapshot = yield selectionRef.get()
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
//COLLECTION managment
export function* fetchCollectionsAsync( ) {
    try {
        const collections = []
         firestore.collection('collections').then(collectionRef => (collectionRef.get())).then(snapShot =>
                {
                    snapShot.map(collection => {
                      return  collections.concat(collection.data())
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
//FETCH products
export function* createProduct({payload:{product}}){
    const productsCollectionRef = yield firestore.collection('products')
    console.log({product})
    try {
        const productRef = yield productsCollectionRef.doc(slug(product.title)).set(product)
    }catch(error) {

        yield console.log(error)

    } 

    //productSnapshot.add({})

}


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
export function* onAddProductStart() {
    yield takeLatest(ADD_PRODUCT_START, createProduct)

} 

export function* getCollectionsTitleAsyn () {
    
}

export function* onGetCollectionsTitle() {
    yield takeLatest(GET_COLLECTIONS_TITLE, getCollectionsTitleAsyn)

} 

// Root ProfilsSagas

export function* selectionSagas() {
     yield all([call(onfetchCollectionsStart),
            call(onfetchProductsStart),
             call(onfetchSelectionsStart),
             call(onAddProductStart),
             call(onGetCollectionsTitle)
            ])
 }
