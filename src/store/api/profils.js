import firebase, {
    firestore, auth
} from '../../util/db/db'
import { createUserProfilDocument } from './../../util/db/auth.firebase'
export const apiRegister = async ({email, password, login, ...props}) => {
    try {
       const userRef =  await auth.createUserWithEmailAndPassword(
            email,
            password
          ) 
        const { user } = userRef
       const userCred =  createUserProfilDocument(user,login,...props)
        return ({...userCred})
    } catch (error) {return Promise.reject(error.message)
}}

export const apiGetAllProfils = async () => {

    const profilCollectionSnapshot = await firestore.collection('profils').get()
    if(!!profilCollectionSnapshot) {
        const profils = await profilCollectionSnapshot.docs.map(profilRef => profilRef.data())
        return {profils}
    }else {
        return {profils: []}
    }
} 