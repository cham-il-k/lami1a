import React, { Component }  from 'react';
import {connect} from 'react-redux'
import {setCurrentProfil, getAllProfils} from './store/actions/profil'
import { createStructuredSelector } from 'reselect'
import {selectCurrentProfil } from './store/selectors/profil'
import {selectSelections} from './../src/store/selectors/selection' 

 import { createUserProfilDocument} from './util/db/auth.firebase'
 import { auth } from './util/db/db'
 import Header from './components/Header/Header' 
 import Main from './pages/main/main'
 import Footer from './components/Footer/Footer' 
import {AppContainer} from './app-styled.jsx'
import { apiCreateCollections, apiCreateProducts } from './../src/store/api/collections'
import { fetchSelections } from './../src/store/actions/selection'
import {firestore, transformCollectionSnapshotToMap} from './../src/util/db/db'
import { isEmpty } from './util/is-empty';

class App extends Component {
unsubscribeFromAuth=null
unsubscribeFromSelections = null  

state = {
  loading: false,
  error:null,
  currentProfil:null,
  selections:''
}
componentDidMount(){
  const {
    getAllProfils,
    setCurrentProfil,
    currentProfil
  } = this.props
  try {
    // fetch selections
    const {fetchSelections} = this.props
    this.unsubscribeFromSelections = firestore.collection('selections').get().then(async snapshot => {
      const selectionsMap =  await transformCollectionSnapshotToMap(snapshot)
      //console.log(selectionsMap)  
      fetchSelections(selectionsMap)
    }).catch(error => {
        console.log(error)
    }
    )
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
        const userRef = await createUserProfilDocument(userAuth)
       if (typeof userRef === 'undefined' ||( userRef === null)) {
        return 
       } else {
        if( isEmpty(userRef) ||( userRef !== null)){
          userRef.onSnapshot( async snapshot => {
            const {email,products} = snapshot.data() 
            setCurrentProfil({
              id:snapshot.id,
              email,
              products
            })
          })
        }
       }
        
      }
      setCurrentProfil(userAuth)
    }
    )
} catch (error) {
  return {
    error:error
  }}
}
componentWillUnmount() {
  
  if (typeof this.unsubscribeFromSelections == 'function' )
{  this.unsubscribeFromAuth()
  this.unsubscribeFromSelections()
}
}

render() {
  return (
    <AppContainer>
     <Header />
      <Main />
       v2 Bismi ALLAH        
      <Footer/> 
    </AppContainer>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentProfil: selectCurrentProfil,
  selections: selectSelections   
})

const  mapDispatchToProps = (dispatch) => {
  return {
    setCurrentProfil: (profil) => dispatch(setCurrentProfil(profil)),
    getAllProfils:() => dispatch(getAllProfils()),
    fetchSelections:(selectionsMap) => dispatch(fetchSelections(selectionsMap))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
