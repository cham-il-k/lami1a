import {
    firestore, auth, functions
} from '../../util/db/db'
import { isEmpty } from '../../util/is-empty'
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
               return  apiCreateUserProfilDocument([user.uid,email])
              
            }).catch(async error => {
                console.log({error},{emplacement: 'Profil Exists in db you can login '})
                return new Promise((resolv, reject) => {

                }
                    
            )     
        })} 
         catch (error) {return Promise.reject(error)
}}

export const apiCreateUserProfilDocument = async (profil) => {
    if (isEmpty(profil)) return ;
        try {
        const uid = profil[0]
        const email = profil[1]
        const getOptions = {
           source: 'server'
        };
       const createdAt = new Date();
           const userProfil = { email, login:'',products:[], collections:[],createdAt}
           const profilRef = await firestore.doc(`/profils/${uid}`)
            if(profilRef.get().exists) {
               console.log({uid},{profilSnap:profilRef.get().data()})
               return  profilRef.get()
            }else {
                await profilRef.set(userProfil)
                 console.log({userProfil}) 
                return  profilRef.get()               }
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
    const {uid, login,email, address,city,country} = updateCred
    try {
        auth.currentUser.updateProfile({
            address,city,country,login
        }).then(res => {
            return Promise.resolve(`Profile updated ${email}`)
        })
       firestore.collection('profils').doc(uid).update({
            address,city,country,login
        }).then(res => {
            return Promise.resolve(`Profile updated ${email}`)
        })        

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