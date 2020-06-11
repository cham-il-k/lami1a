import React, { Component }  from 'react';
import {connect} from 'react-redux'
//import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
//
//import {selectCollections} from './store/selectors/selection'
// import {fetchSelections } from './store/actions/selection'
import {setCurrentProfil} from './store/actions/profil'
import { createStructuredSelector } from 'reselect'
import {selectCurrentProfil } from './store/selectors/profil'

 import { createUserProfilDocument} from './util/db/auth.firebase'
 import { auth } from './util/db/db'
 import Header from './components/Header/Header' 
 import Main from './pages/main/main'
 import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'


class App extends Component {
unsubscribeFromAuth=null

state = {
  loading: false,
  error:null,
  currentProfil:null,
}
componentDidMount(){
  const {
    setCurrentProfil,
    currentProfil
  } = this.props
    try {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfilDocument(userAuth)
       //console.log(userRef)
        if(!userRef.message){
          userRef.onSnapshot( async snapshot => {
            const {email,products} = snapshot.data() 
            setCurrentProfil({
              id:snapshot.id,
              email,
              products
            })
          }
          )
        }
      }else {
          setCurrentProfil({})
      }
    })
} catch (error) {
  return {
    error:error
  }
}
}
componentWillUnmount() {
  this.unsubscribeFromAuth()
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

const mapStateToProps = createStructuredSelector({
  currentProfil: selectCurrentProfil
})

const  mapDispatchToProps = (dispatch) => {
  return {
    setCurrentProfil: (profil) => dispatch(setCurrentProfil(profil))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
