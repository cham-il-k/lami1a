import React, { useState, useEffect }  from 'react';
import {connect} from 'react-redux'
import { checkProfilSession} from './../src/store/actions/profil' 
import Header from './components/Header/Header' 
import Main from './pages/main/main'
import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'
import {createStructuredSelector} from 'reselect'
import { fetchSelectionsStart } from './../src/store/actions/selection'
import {selectCurrentProfil}  from './../src/store/selectors/profil'
import { isEmpty } from './util/is-empty';
const App = ({ fetchSelectionsStart, checkProfilSession, currentProfil }) => {

useEffect(() => {
      checkProfilSession()
      fetchSelectionsStart()
  }, [checkProfilSession, fetchSelectionsStart] ) 

  return (
    <AppContainer>
    <Header />
      <Main />
             v2 Bismi ALLAH        
      <Footer/> 
d      </AppContainer>
     );
  }


const mapDispatchToProps = (dispatch) => ({
  checkProfilSession: () => dispatch(checkProfilSession()),
  fetchSelectionsStart: () => dispatch(fetchSelectionsStart())
})
const mapStateToProps = createStructuredSelector({
  currentProfil :selectCurrentProfil

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
