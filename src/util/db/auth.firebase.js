import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import options from './../../config'
import {isEmpty } from '../is-empty'
import firebaseApp from './../db/db'
import bcrypt from 'bcryptjs'
export const auth = firebase.auth()
const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

/* auth.getRedirectResult().then(function (result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
  }
  var user = result.user;
});
 */

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


export const createUserProfilDocument = async (userAuth, additionalData) => {
  if (!userAuth) return {
          error:true,
          message:'dont have a userAuth'
        };
  try {
    const { email, password , uid} =  {...userAuth};
    const userRef = firestore.collection('profils').doc(uid)
    const snapShot = await userRef.get();
    if (!snapShot.exists && !isEmpty(email)) {
        const hashPassword = hashPassword(password)
        const createdAt = new Date();
        await userRef.set({
          email,
          password:hashPassword,
          createdAt,
          ...additionalData
        });
        return userRef;
      } else {
        return {
          message:true,
          error: false,
          message:`user  ${email} exists`
        }
        }
    } catch (error) {
      return {
        error: true,
        message: `firebase Error to create profile ${error}`
      }
      }
  };  
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
