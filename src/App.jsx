import React, { Component }  from 'react';
//import {auth} from './util/db/db'
import {connect} from 'react-redux'
//import {setCurrentProfil} from './store/actions/profil'
//import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
//
//import {
  //  selectCurrentProfil
  // } from './store/selectors/profil'
  //import {selectCollections} from './store/selectors/selection'
  /* import {fetchSelections } from './store/actions/selection'
  import { createStructuredSelector } from 'reselect'
  import { createUserProfilDocument} from './util/db/auth.firebase'
  */
 import Header from './components/Header/Header' 
 import Main from './pages/main/main'
 import Footer from './components/Footer/Footer' 
 import { BrowserRouter as Router } from 'react-router-dom'
import {AppContainer} from './app-styled.jsx'


class App extends Component {
//unsubscribeFromAuth=null
state = {
  loading: false,
  error:null,
}

render() {
  return (
    <AppContainer>
      
     <Header />
      <Main />
        BismiALLAH        
      <Footer/> 
    </AppContainer>
  );
  }
} 

export default App;
