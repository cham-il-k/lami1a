import * as firebase from 'firebase/app'
//import * as firebaseui from 'firebaseui'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import options from './../../config'
const slug = require('slug')

/* firebaseApp.onLog((level='error')=> {
  console.log(firebaseApp)
})
*/
firebase.initializeApp(options.firebaseConfig) 
export const auth = firebase.auth()
export const firestore = firebase.firestore()
 const storage = firebase.storage()
export const storageRef = storage.ref()
export const productImageRef = storageRef.child('/productImages')
export const functions =  firebase.functions()
//auth.functions().useFunctionsEmulator('http://localhost:5001')
export default firebase
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp


/**
 * tools 
 * @param {string} selectionName 
 */
 export const addSelection = async (selectionName) => {
   const objectToAdd = Object.entries([])
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
 export const transformCollectionSnapshotToMap = (selectionsSnapshot) => {
  const transformedCollection = selectionsSnapshot.docs.map(selection => {
    //console.log({selection})
    const { title, collections, id, imageUrl} = selection.data()
    return {
      routeName: encodeURI(title),
      id,
      title,
      imageUrl,
      collections
    }
  })
     return  transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()]= collection
        return accumulator
    },{})
}

export const createContatctDocument = (country, email, message) => {
  if(email) {
    firestore.collection('contact').get().then(snapshot => {
      snapshot.docs.map(emailent => (emailent===email))
    })
  }  
  const collectionRef = firestore.collection('contact')
}

/**
 * @augments (collectionRef, [IdsRef])
 */
export  const  readConcurrently = async (collection, ids) => {

  const docSnap =  ids.map(id => collection.doc(id).get())
  const result = await Promise.all(docSnap)
  return result.map(v => v.data())  
}

/**
 * Call admin privileges token
 * @param {email} param0 
 */

export const adminCheck =(userRef) => {
  userRef.getIdTokenResult().then(idTokenResult => {
    if(idTokenResult.claims.admin) {
      /**
       * @todo setProfilAdmin links 
       */
    }else {


    }
  })

}
/***
 * manage products collection
 */

export const createProductsCollection = async () => {
  const collectionSnapshot = await firestore.collection('collections').get()
  const collectionMap = new Map()
  collectionSnapshot.docs.forEach(async (docSnapShot) => {
    const {title, selection, items } = await docSnapShot.data()
    items.forEach(async (item ) => {
      const product = {
        ...item,
        collection:title,
        selection
      }
      //dbCreateProduct(product)
    } ) 
  })

}


/**
 * Quries
 */

const querySelection = ({...arg}) => {


  firestore.collection(arg.collection).orderBy('date', 'desc')
  firestore.collection(arg.collection).orderBy('date', 'desc').limit(20)
  firestore.collection(arg.collection).orderBy('date', 'desc').startAfter('las')
  firestore.collection(arg.collection).orderBy('date', 'desc').startAt('lastweek')
  firestore.collection(arg.collection).orderBy('date', 'desc').endAt('lastweek')
  firestore.collection(arg.collection).orderBy('date', 'desc').endBeforet('lastweek')
  firestore.collection(arg.collection).orderBy('date', 'desc').where('date','<=','today').where('name','==','ja')
  firestore.collection(arg.collection).orderBy('date', 'desc').where('products','array-contains','tivres').where('name','==','ja')
  /**
   * thinking aboutcomposites indexe
   */
  firestore.collection(arg.collection).orderBy('date', 'desc').where('autor','array-contains','hicam').where('livre','==','tafsir')
  /**
   * Roles
    match /posts/{documents} {
     getRole() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.roles
  }

    allow read;
    allow update: if  getRoles().hasAny (['edit','admin']) == true
    allow write: if  getRoles().hasAny (['admin']) == true
/// ACL
  match /securedata/{document}
  allow read ;
  allow write: if resource.data.members.hasAny(request.auth.uid)

*/

  /**
   *  
   * 
   * */ 
   }  