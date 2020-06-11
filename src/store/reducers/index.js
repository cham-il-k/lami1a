import {combineReducers } from 'redux'
import profilReducer from './profil'
import cartReducer from './cart'
import selectionReducer from './selection'
//import shopReducer from './shop'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'selection', 'profil'] 
  }

const rootReducer = combineReducers(
    {   
        profil:profilReducer,
        cart:cartReducer,
        selection:selectionReducer
    }
)

export default persistReducer(persistConfig, rootReducer)