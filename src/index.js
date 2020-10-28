import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import GlobalStyle from './Global.styling'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import {store, persistor} from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Modal from 'react-modal'
const rootEl =  document.getElementById('root')
Modal.setAppElement(rootEl)
ReactDOM.render(
      <Provider store={store} >
        <Router>
        <PersistGate  persistor={ persistor }>
          <App />
          </PersistGate>
        </Router>
        <GlobalStyle />
      </Provider>
    ,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
if(module.hot) {
  module.hot.accept()
}