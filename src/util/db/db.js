import  firebase from 'firebase'
//import * as firebaseui from 'firebaseui'
import {
  INITIAL_COLLECTIONS
} from './shopData'
import 'firebase/auth'
import 'firebase/firestore'
import options from './../../config'
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(options.firebaseConfig) : firebase.app();
 
/* firebaseApp.onLog((level='error')=> {
  console.log(firebaseApp)
})
 */
export default firebaseApp
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const {
    Timestamp
  } = firebase.firestore


/**
 * tools 
 * @param {string} selectionName 
 */
 export const addSelection = async (selectionName) => {
   const objectToAdd = Object.entries(INITIAL_COLLECTIONS)
   let writeBatch = firestore.batch()
   try {
     // recup collection Ref 
     const collectionRef = await firestore.collection(selectionName)
     //init le write batch 
     // la boucle de credations des collections  
     const querySnapshot = await collectionRef.get()
     if (querySnapshot.empty) {
       objectToAdd.forEach(async entry => {
         // creation des objects lié  la clé  key  
         const newDocRef = collectionRef.doc(`${entry[0]}`)
         writeBatch.set(newDocRef, entry[1])
       })
     }
      writeBatch.commit().then(res => ({
       error: null,
       message: `batch commit ${res}`
     }))
   } catch (error) {
     return {
       error: true,
       message: `batch commit error  ${error}`
     }
   }
 }