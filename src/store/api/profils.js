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
              const profilCred = await apiCreateUserProfilDocument(user.uid,email)
              console.log({profilCred})
              return profilCred 
            }).catch(async error => {
                console.log({error},{emplacement: 'catch car existe deja emplacement then'})
                if(error['code'] === "auth/email-already-in-use"){
                 
                   const getUidFromEmail= await functions.httpsCallable('getUidFromEmail')
                   getUidFromEmail({email}).then(async data => {
                    const userUid = data['data'] 
                console.log({error},{emplacement: 'then from functions '})
                        const profilCred = await apiCreateUserProfilDocument(userUid, email)
                        console.log(profilCred)
                        return Promise.resolve(profilCred)
                    }).catch(error => {
                console.log({error},{emplacement: 'catch apres apprl functions '})
                    
                    return Promise.reject(error) 
                    }) 
                }else {
                console.log({error},{emplacement: 'else n existe pas mais y aprblm'})
                } 
                })
        } 
         catch (error) {return Promise.reject(error)
}}

export const apiCreateUserProfilDocument = async (profil) => {
    if (isEmpty(profil)) return ;
        try {
        const uid = profil[0]
        const email = profil[1]
            var getOptions = {
           source: 'server'
        };
       const createdAt = new Date();
           const userProfil = { email, login:'',products:[], collections:[],createdAt}
           /* const profilsCollectionRef = await firestore.collection('profils')
           const profilsCollectionRefSnapshot = await firestore.collection('profils').get()
           profilsCollectionRefSnapshot.docs.map(async profil => {
               await console.log({profil})
           })
            */
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

const apiGetUserProfil = (uid) => {
    firestore.collection('profils').doc(uid)
    .get().then(snapshot => ({uid, ...snapshot.data()}))
}