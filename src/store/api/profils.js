import firebase, {
    firestore, auth
} from '../../util/db/db'

export const apiRegister = async ({email, password, login, ...props}) => {
    try {
       const user =  await auth.createUserWithEmailAndPassword(
            email,
            password
          ) 
          return user      
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