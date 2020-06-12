import options from './../../config'
import {isEmpty } from '../is-empty'
import firebase, { auth, firestore} from './../db/db'
import bcrypt from 'bcryptjs'

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const encryptePassword = ( password ) => {
  if (!password) {
    return {
      error:true,
      message:' No password to encrypt'
    }
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return err
    }
    return hash
     })
}

export const verifPassword = (password, hash) => {
  const passwordHash = hash
  return new Promise((resolve, reject) => {
  bcrypt.compare(password, passwordHash, (err, same) => {
    if (err) {
      return reject(err)
    }
    resolve(same)
  })
  })
}

export const createUserProfilDocument = async (userAuth) => {
  if (!userAuth) return ;
  
  const { email, uid, login, products, collections } =  userAuth;
  let userRef = firestore.doc(`/profils/${uid}`)
  const profilSnapshot = await userRef.get();
  if (!profilSnapshot.exists && !isEmpty(email)) {
    try {
        const createdAt = new Date();
        await userRef.set({
          uid,
          email,
          createdAt,
          login:login || '',
          products: products || [],
          collections:collections || [],
       });
      } catch (error) {
        return {
          message : error['code']
        }
      }
  return userRef
     
  };
}  
// on envoie le nom de la collection  [selections] // et collectin 'coran / sagesse / objets ludiques / discount'
export const addCollectionAndDocuments = async (collectionKey, collections) => {
  const collectionRef = firestore.collection(collectionKey)
   const batch = firestore.batch()
   collections.forEach(object => {
     const newCollRef = collectionRef.doc(object.title)
     batch.set(newCollRef,object)  
   })
   return await batch.commit()  
}
