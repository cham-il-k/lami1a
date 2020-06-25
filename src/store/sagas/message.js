import {  all , put , call, takeLatest } from 'redux-saga/effects'
import {isEmpty} from './../../util/is-empty'
import { FETCH_MESSAGES_START, ADD_MESSAGE_START, FETCH_USERS_START, addMessageSuccess, addMessageFail,
     fetchMessagesFail, fetchMessagesSuccess, fetchUsersFail, fetchUsersSuccess} from '../actions/message'
import {firestore} from './../../util/db/db'
import {transformCollectionSnapshotToMap} from './../../util/db/db'
import {isAuthenticated} from './profil'
import {apiCreateMessage} from './../api/messages'
import {apiCreateProduct} from './../api/selections'
import slug from 'slug'
import { clearCart } from '../actions/cart'
//SELECTION 
export function* fetchMessagesAsync( ) {
    try {
        let collectionsMap = null
        const userProfil= yield call(isAuthenticated)
        if(!userProfil ) {
            yield put(clearCart())
        } 
        const selectionRef = yield firestore.collection('selections')
         const snapshot = yield selectionRef.get()
        collectionsMap = yield call(transformCollectionSnapshotToMap, snapshot)
        yield put(fetchMessagesSuccess(collectionsMap))    
        }
    catch (error) {
        console.log(`${error} sagas selections`)
      yield put(fetchMessagesFail(error.message))  
     }
}
export function* onfetchMessagesStart() {
    yield takeLatest(FETCH_MESSAGES_START, fetchMessagesSuccess)
}
//USERS managment
export function* fetchUsersAsync( ) {
    try {
        const collections = []
         firestore.collection('users').then(collectionRef => (collectionRef.get())).then(snapShot =>
                {
                    snapShot.map(collection => {
                      return  collections.concat(collection.data())
                    })
                }
            )
        yield put(fetchUsersSuccess(collections))    
    }
    catch (error) {
      yield put(fetchUsersFail(error.message))  
     }
}
export function* onfetchUsersStart() {
    yield takeLatest(FETCH_USERS_START, fetchUsersAsync)
}
//FETCH products
export function* createMessage({payload:{uid,message}}){
try {
    const {user, description,text } = message 
    const productRegistred = yield call(apiCreateMessage,[uid,message])
    if(!isEmpty(productRegistred)) {
        put(addMessageSuccess(productRegistred))
    }else {
        put(addMessageFail({error:'product cant be added'}))
    }
}catch(error) {
    yield put(addMessageFail(error))
    } 
}


export function* onCreateMessageStart() {
    yield takeLatest(ADD_MESSAGE_START, createMessage)

} 


export function* selectionSagas() {
     yield all([call(onfetchMessagesStart),
            call(onCreateMessageStart),
             call(onfetchUsersStart),
             ])
 }
