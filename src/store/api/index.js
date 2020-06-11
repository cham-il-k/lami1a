import firebaseApp, {
    firestore, auth
} from '../../util/db/db'
/**
 * Selections
 */
export const apifetchSelections = async () => {
    try {
        const selectionSnapshot = await firestore.collection('selections').get()
        const selections = []
        console.log({selectionSnapshot})
        await selectionSnapshot.onSnapshot(async snapshot => {
            console.log(`Api Fetch Selections ${snapshot.docs}`)
             selections = await snapshot.docs.map(docRef => {
                        return docRef.data()
                    })
        }) 
        return selections
    } catch (error) {
        throw error
    }    
}

export const apifetchCollections = async () => {
    const selectionSnapshot = await firestore.collection('selections').get()
    const collections = []

    selectionSnapshot.onSnapshot(async snapshot => {
        console.log(`Api Fetch collections ${snapshot.docs}`)
        collections = await snapshot.docs.map(docRef => {
            const collection_Ref = docRef.get()
            return collection_Ref.data()
        })
    })
    return collections
}
/**
 * product manageement
 * @param {string} productId 
 */
export const apifetchProductById = async (productId) => {
     firestore.collection('products').doc(productId).get().then(snapshot => ({
         id: snapshot.id,
         ...snapshot.data()
     }))
}
export const apifetchProducts = async (productId) => {
    firestore.collection('products').get().then(async snapshot => {
        const products = await snapshot.docs.map(product => ({
            id: product.id,
            ...product.data()
        }))
        return products
    })
}
/**
 * Auth registratipon User management
 */
export const register = async ({email, password, login, ...props}) => {
    try {
       const user =  await auth.createUserWithEmailAndPassword(
            email,
            password
          ) 
          return user      
    } catch (error) {return Promise.reject(error.message)
}}

