import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import {store, persistor} from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './components/Spinner/Spinner'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
    <PersistGate loading={ <Spinner/>} persistor={ persistor }>
      <App />
      </PersistGate>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
