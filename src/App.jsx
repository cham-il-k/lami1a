import React, { useEffect, lazy }  from 'react';
import {connect} from 'react-redux'
import { checkProfilSession} from './../src/store/actions/profil' 
import Header from './components/Header/Header' 
import {compose} from 'redux'
import Main from './pages/main/main'
import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'
import {createStructuredSelector} from 'reselect'
import { selectBooks, selectProducts } from './store/selectors/selection'
import { fetchSelectionsStart, fetchProductsStart } from './../src/store/actions/selection'
import {selectCurrentProfil}  from './../src/store/selectors/profil'
import SearchHeader from './components/Header/SearchHeader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const App = ({ fetchSelectionsStart, checkProfilSession, currentProfil, fetchProductsStart }) => {
 useEffect(() => {
      fetchSelectionsStart()
     // createProductsCollection()
     //fetchProductsStart()
},[fetchSelectionsStart]) 

return (
  <AppContainer>
    <ErrorBoundary>
    <Header />
    <SearchHeader />  
     <Main />
     <Footer/> 
    </ErrorBoundary>
  </AppContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
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
