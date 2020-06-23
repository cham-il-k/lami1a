import {
    firestore, auth, functions
} from '../../util/db/db'
import { isEmpty } from '../../util/is-empty'
import moduleName from 'module'
import {setCurrentProfil} from './../actions/profil'

export const apiRegister = async (cred) => {
    try {
    console.log({cred})
    const email  = cred[0]
    const password = cred[1]
    const login = cred[2]
       
     auth.createUserWithEmailAndPassword(
            email,
            password
          ).then(async ({userRef:{user}})  => {
              const userProfil = {uid: user.uid, email, login,products:[], collections:[]}
              const profilSnapshot = await apiCreateUserProfilDocument(user.uid,email)
              console.log({profilSnapshot})
              return profilSnapshot 
            }).catch(async error => {
                console.log({error})
                if(error['code'] === "auth/email-already-in-use"){
                 console.log({email},{password})
                   const getUidFromEmail= functions.httpsCallable('getUidFromEmail')
                   getUidFromEmail({email}).then(async userUid => {
                    console.log(userUid)
                        const profilSnapshot = await apiCreateUserProfilDocument(userUid, email)
                        return profilSnapshot
                        
                    }).catch(error => {
                        return Promise.reject(error) 
                    }) 
                } 
                })
        } 
         catch (error) {return Promise.reject(error)
}}

export const apiCreateUserProfilDocument = async (uid, email) => {
    if (isEmpty(email)) return ;
        try {
       var getOptions = {
           source: 'server'
       };
       const createdAt = new Date();
           const userProfil = {email, login:'',products:[], collections:[],createdAt}
           const profilRef = firestore.collection('profils').doc(uid)
           const profilSnapshot = await profilRef.get()
            console.log({profilSnapshot})   
            if(profilSnapshot.exists) {
                   console.log(profilRef)
                   profilRef.set(userProfil) 
                   return profilSnapshot
               }else {
                profilRef.set(userProfil)
                console.log(profilSnapshot)
                return profilSnapshot
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


const apiGetUserProfil = (uid) => {
    firestore.collection('profils').doc(uid)
    .get().then(snapshot => ({uid, ...snapshot.data()}))
}