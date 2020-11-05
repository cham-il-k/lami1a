import {
    firestore, auth, functions
} from '../../util/db/db'
import { isEmpty } from '../../util/validators'
import {setCurrentProfil} from './../actions/profil'


export const apiGetCurrentProfil = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe =  auth.onAuthStateChanged(userAuth => {
        unsubscribe()
        //console.log({userAuth})
        resolve(userAuth)
      }, reject)
  })
  } 

  
  export const apiRegister = async (cred) => {
    try {
    console.log({cred})
    const email  = cred[0]
    const password = cred[1]
    const login = cred[2]
    const {user }  = await auth.createUserWithEmailAndPassword(email,password)
    const userProfil = {uid: user.uid, email, login,products:[], collections:[]}
    return apiCreateUserProfilDocument([user.uid,email])
    }
    catch (error) {return Promise.reject(error)
}}

export const apiCreateUserProfilDocument = async (profil) => {
    if (isEmpty(profil)) return ;
        try {
        const uid = profil[0]
        const email = profil[1]
        const login = profil[2] || ''
        const getOptions = {
           source: 'server'
        };
       const createdAt = new Date();
       const userProfil = { email, login,products:[], collections:[],createdAt}
       const profilRef = await firestore.doc(`/profils/${uid}`)
       console.log({profilRef}) 
       if(profilRef.get().exists) {
           /* console.log({uid},{profilSnap:profilRef.get().data()})
           return  ({uid:uid,profilCred:profilRef.get()}) */
           console.log(({uid:uid,profilCred:profilRef.get()}))
           return new Promise((resolve, reject) => {
                resolve({error:{code:'auth/email-already-registred'}})
           })
        }else {
            console.log({userProfil}) 
            return profilRef.set(userProfil).get()
        }
        } catch (error) {
           return Promise.reject(error.message)
       };
}

export const apiGetAllProfils = async () => {

    const profilsDocRefs  = firestore.collection('profils').get().docs
    if(!!profilsDocRefs) {
        const profils = await profilsDocRefs.map(profilRef => profilRef.data())
        return {profils}
    }else {
        return {profils: []}
    }
} 
export const apiUpdateCredential = async (updateCred) => {

    const uid = updateCred[0] 
    const login = updateCred[1]
    const email = updateCred[2]
    const  address = updateCred[3]
    const city = updateCred[4]
    const country = updateCred[5]
    const role = updateCred[6]
    try {
      //const updateUser = await auth.currentUser.updateProfile({displayName:login, email})
        const updateDbProfil = await firestore.collection('profils').doc(uid).update({address,city,country,login, role})
            console.log({updateDbProfil})
        return Promise.resolve(updateDbProfil)
        //  console.log({updateUser}, {updateDbProfil})
    } catch (error) {
        return Promise.reject({error})
    }
}
 
const getUidFromEmail = async (email) => {
        const getUidFromEmail= await functions.httpsCallable('getUidFromEmail')
          getUidFromEmail({email}).then(async data => {
           const userUid = data['data'] 
        const profilCred = await apiCreateUserProfilDocument([userUid, email])
               console.log(profilCred)
               return Promise.resolve(profilCred)
           }).catch(error => {
       console.log({error},{emplacement: 'catch apres apprl functions '})
           
    })
} 
const apiGetUserProfil = (uid) => {
    firestore.collection('profils').doc(uid)
    .get().then(snapshot => ({uid, ...snapshot.data()}))
}