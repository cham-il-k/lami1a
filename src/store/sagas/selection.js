import {  all , put , call, takeLatest } from 'redux-saga/effects'
import {isEmpty} from './../../util/validators'
import { fetchCollectionsSuccess, fetchCollectionsFail,
     fetchSelectionsSuccess, fetchSelectionsFail,
         fetchProductsFail, fetchProductsSuccess,
         addProductSuccess, addProductFail
    } from '../actions/selection'
import { FETCH_COLLECTIONS_START, FETCH_PRODUCTS_START, FETCH_SELECTIONS_START,
     ADD_PRODUCT_START} from './../actions/selection'
import {firestore, storageRef, productImageRef, transformCollectionSnapshotToMap} from './../../util/db/db'
import {isAuthenticated} from './profil'
//import {apiCreateProduct} from './../api/selections'
import { apiCreateProduct} from './../api/product'
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
//Add products 
export function* createProduct({payload:{uid,product}}){
try {

    console.log({payload: {uid, product}})
    const { image } = product
    const fileStorage = yield storageRef.child(`${productImageRef}/${uid}/${image.name}`).put(image)
    const item  = {...product,image:fileStorage.ref.location.path}
    console.log({fileStorage:fileStorage.ref.location.path},{product}) 
    const productRegistred = yield call(apiCreateProduct,[uid,item])
    if(!isEmpty(productRegistred)) {
        const productRegistredSelection = yield call(apiCreateProduct,[uid,item])
        put(addProductSuccess(productRegistred))
    }else {
        put(addProductFail({error:'product cant be added'}))
    }
}catch(error) {
    yield put(addProductFail(error))
    } 
}

export function* fetchProductsAsync() {
    let  products ={}
    try {
          firestore
         .collection('products').get().then(snapshot => {
             snapshot.forEach( async (product, index) => {
                const id = product.id
                 products[id]=  product.data()
            })
       }) 
        //products = yield call(apiFetchAllProducts)
        console.log({products})
        yield put(fetchProductsSuccess(products))    
    }
    catch (error) {
      yield put(fetchProductsFail(error))  
     }
}

export function* onfetchProductsStart() {
    yield takeLatest(FETCH_PRODUCTS_START, fetchProductsAsync)

} 
export function* onAddProductStart() {
    yield takeLatest(ADD_PRODUCT_START, createProduct)

} 

export function* getCollectionsTitleAsync () {
    
}

export function* onGetCollectionsTitle() {
    yield takeLatest(GET_COLLECTIONS_TITLE, getCollectionsTitleAsync)

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
