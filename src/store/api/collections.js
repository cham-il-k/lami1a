import firebase, {
    firestore, auth
} from '../../util/db/db'
/**
 * Selections
 */
export const apiCreateCollections = async (collections) => {
    try {
        const collectionsRef = await firestore.collection('collections')
        collections.forEach(collection => {
                collectionsRef.onSnapshot(async snapshot => {
                collectionsRef.doc(collection[0]).set(collection[1])
           }) 
        })
    } catch (error) {
        throw error
    }    
}

export const apiCreateProducts = async ({collectionKey, products}) => {
    try {
        const productsRef = await firestore.collection('products')
         const docRef = await productsRef.doc(collectionKey)     
           const docSnapshot = docRef.get()
           if(!docSnapshot.exists) {
            docRef.set(products)
           } 
    
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