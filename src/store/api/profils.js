import firebase, {
    firestore, auth
} from '../../util/db/db'

export const apiRegister = async ({email, password, login, ...props}) => {
    try {
       const userRef =  await auth.createUserWithEmailAndPassword(
            email,
            password
          ) 
        const { user } = userRef
        const userProfil = {uid: user.uid, email, login,products:[], collections:[],...props}
        
       const userCred = await apiCreateUserProfilDocument(userProfil)
        
       return (userCred)
    } catch (error) {return Promise.reject(error.message)
}}

export const apiCreateUserProfilDocument = async (userProfil ) => {
    const {uid, email} = userProfil
    if (!email) return ;
    console.log(uid)
    let userRef 
    try {
      const createdAt = new Date();
      userProfil = {...userProfil,createdAt}
      let userRef = await firestore.doc(`/profils/${uid}`).set(userProfil)
      } catch (error) {
          return {
            error : error['code']
          }
        }
    return userRef
   };
  

export const apiGetAllProfils = async () => {

    const profilCollectionSnapshot = await firestore.collection('profils').get()
    if(!!profilCollectionSnapshot) {
        const profils = await profilCollectionSnapshot.docs.map(profilRef => profilRef.data())
        return {profils}
    }else {
        return {profils: []}
    }
} 
const apiGetUserProfil = (uid) => {
    firestore.collection('profils').doc(uid)
    .get().then(snapshot => ({uid, ...snapshot.data()}))
}