import * as firebase from 'firebase/app'
//import * as firebaseui from 'firebaseui'
import {
  INITIAL_COLLECTIONS
} from './shopData'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import options from './../../config'
firebase.initializeApp(options.firebaseConfig) 
 
/* firebaseApp.onLog((level='error')=> {
  console.log(firebaseApp)
})
 */
export default firebase
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storageRef = firebase.storage()
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
 export const transformCollectionSnapshotToMap = (selectionsSnapshot) => {
  const transformedCollection = selectionsSnapshot.docs.map(selection => {
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
export const deletProduct = (doc) => {

  firestore.collection('products').doc(doc).delete()  
}

export const updateProduct = (doc) => {

  firestore.collection('products').doc(doc).delete()  
}
/**
 * reate galery products/ and Selections
 * @param {*} param0 
 */
export const storeImageRef = (user, url, fileName) =>  {
  
  firestore.collection('selectionGallery').add({
    imageUrl:`${url}`,
    admin:`${user.uid}`,
    fileName:`selectionGallery/${fileName}`
  }).then(() => ({message:'image is stored'}))
  .catch((err) => ({
    err
  }))
}

const deletImage = (imageId) => {
  auth.currentUser.getIdTokenResult().then(idTokenResult => {
    if(idTokenResult.claims.admin){
      firestore.collection('selectionGallery').doc(imageId).delete()
    }
  } )
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