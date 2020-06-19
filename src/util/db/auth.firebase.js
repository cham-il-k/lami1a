import options from './../../config'
import {isEmpty } from '../is-empty'
import firebase, { auth, firestore} from './../db/db'
import bcrypt from 'bcryptjs'

export const googleProvider = new firebase.auth.GoogleAuthProvider();

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

export const getCurrentProfil = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe =  auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
})
} 


// on envoie le nom de la collection  [selections] // et collectin 'coran / sagesse / objets ludiques / discount'
