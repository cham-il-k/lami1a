import React, { useState, useEffect }  from 'react';
import {connect} from 'react-redux'
import { checkProfilSession} from './../src/store/actions/profil' 
import Header from './components/Header/Header' 
import {compose} from 'redux'
import Main from './pages/main/main'
import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'
import {createStructuredSelector} from 'reselect'
import { fetchSelectionsStart, fetchProductsStart } from './../src/store/actions/selection'
import {selectCurrentProfil}  from './../src/store/selectors/profil'
import SearchHeader from './components/Header/SearchHeader'
import { isEmpty } from './util/validators';
import { createProductsCollection } from './../src/util/db/db'


const App = ({ fetchSelectionsStart, checkProfilSession, currentProfil, fetchProductsStart }) => {

  const [globalError, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [getResult, setGetResult] = useState(false)
  const [result, setResult] = useState('')
  
  const [isLoading, setIsLoading] = useState(false)
  
 useEffect(() => {
  checkProfilSession()
 }, [checkProfilSession]) 
useEffect(() => {
      //fetchSelectionsStart()
     // createProductsCollection()
     fetchProductsStart()
},[fetchProductsStart]) 

return (
  <AppContainer>
    <Header />
    <SearchHeader />  
     <Main />
     <Footer/> 
  </AppContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
  checkProfilSession: () => dispatch(checkProfilSession()),
  fetchSelectionsStart: () => dispatch(fetchSelectionsStart()),
  fetchProductsStart: () => dispatch(fetchProductsStart())
})
const mapStateToProps = createStructuredSelector({
  currentProfil :selectCurrentProfil
})
const AppContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App)

export default AppContain
