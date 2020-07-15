import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import GlobalStyle from './Global.styling'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import {store, persistor} from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store} >
    <Router>
    <PersistGate  persistor={ persistor }>
      <App />
      </PersistGate>
    </Router>
    <GlobalStyle />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if(module.hot) {
  module.hot.accept()
}