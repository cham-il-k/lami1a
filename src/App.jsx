import React, { useState, useEffect }  from 'react';
import {connect} from 'react-redux'
import { checkProfilSession} from './../src/store/actions/profil' 
import Header from './components/Header/Header' 
import {compose} from 'redux'
import Main from './pages/main/main'
import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'
import {createStructuredSelector} from 'reselect'
import { fetchSelectionsStart } from './../src/store/actions/selection'
import {selectCurrentProfil}  from './../src/store/selectors/profil'
import SearchHeader from './components/Header/SearchHeader'
import { isEmpty } from './util/is-empty';
import { createProductsCollection } from './../src/util/db/db'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ fetchSelectionsStart, checkProfilSession, currentProfil }) => {
  const notify = (message) => toast(`${message}`);

  const [globalError, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [getResult, setGetResult] = useState(false)
  const [result, setResult] = useState('')
  
  const [isLoading, setIsLoading] = useState(false)
  
function fetchArticle(articles){
    setIsLoading(true)
    try {
      if(articles.length > 1) {
        setGetResult(true) 
        setResult(articles)
        const results = articles.map(art => {
          console.log('article from search callback',{art})
        })
      } else {
        setGetResult(false)
        notify('No result')
      }
    } catch (error) {
     setError(error) 
     notify(error)
    }
}
  
useEffect(() => {
      //checkProfilSession()
      //fetchSelectionsStart()
     // createProductsCollection()
      }, [] ) 

return (
  <AppContainer>
  <Header />
  <SearchHeader callback={fetchArticle}/>  
   <Main />
      v2 Bismi ALLAH        
    <Footer/> 
    </AppContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
  checkProfilSession: () => dispatch(checkProfilSession()),
  fetchSelectionsStart: () => dispatch(fetchSelectionsStart())
})
const mapStateToProps = createStructuredSelector({
  currentProfil :selectCurrentProfil
})
const AppContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App)

export default AppContain
