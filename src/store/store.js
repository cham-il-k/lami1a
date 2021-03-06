import React from 'react'   
import { createStore , applyMiddleware } from 'redux'
//import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './rootSaga'
//import thunk from 'redux-thunk'

//React.lazy(() => import('./selectors/s'));
const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ]
    
if (process.env.NODE_ENV === 'development') {
       middleware.push(logger)
}

export const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store, ()=> {
       console.log(store)
})
sagaMiddleware.run(rootSaga)

/**@todo*/
/* 
if ( process.env.NODE_ENV === 'development' )  {
store.subscribe(() =>{console.log(`On subscribe State is :: --> ${JSON.stringify(store.getState())}`)
              })
} */