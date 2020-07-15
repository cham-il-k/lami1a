import firebase, {
    firestore, auth
} from '../../util/db/db'
import slug from 'slug'
/**
 * Selections queries
 */

export const apiProductsCollection = async ({collectionKey, products}) => {
    try {
        const productsRef = await firestore.collection('products')
         const docRef = await productsRef.doc(collectionKey)     
           const docSnapshot = docRef.get()
           if(!docSnapshot.exists) {
               docRef
            .docRef.set(products)
           } 
    
    } catch (error) {
        throw error
    }    
}
export const apiShopProducts = async () => {
    try {
        const productsRef = await firestore.collection('products')
        const productsSnapshot = productsRef.get()
        productsSnapshot.docs.map((colDoc) => {
                const items = colDoc.data()
                return items.reduce((acc, item) => {
                    acc[item.id] = item
                    return acc
                }, {})
            })
         } catch (error) {
        throw error
    }
}

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

// create Product
export const apiCreateProduct =(async (reference) => {
    const uid = reference[0]
    const product = reference[1]
    const { title, description,price,collection, selection } = product
    try {
        console.log({product})
        firestore.collection('products').doc(title).set({ description, price, collection,selection})
        .then(async product => {
            return Promise.resolve(product)
        } )
    } catch (error) {
     Promise.reject(error)
 }
})


  //MANAGEMENT image storage
export const apiStoreImageGalleryDb = async (uid, url, file) => {
 try {
    firestore.collection('selectionImages').add({
        imageUrl:`${url}`,
        uploadedBy:`${uid}`,
        fileName:`selectionUploads /${file.name}`
        }).then((fileDb) => {
           Promise.resolve(fileDb) 
        })    
 } catch (error) {
    Promise.reject(error)
}
}
export const apiDeleteImage = async(file) => {
    try {
        const storageRef = firebase.storage() 
    auth.currentUser.getIdTokenResult().then(async idTokenResult => {
        if(idTokenResult.claims.admin) {
             firestore.collection('selectionImages').doc(file.id).delete().then(res => {
                return Promise.resolve('file deleted from database')    
            }).catc(error => {
                return Promise.reject(`cant delet file from database  ${file.name}`)

             })
            storageRef.child(`selectionUploads/${file.id}`).delete().then(res => {
                return Promise.resolve('file deleted from storage')    
            }).catc(error => {
                return Promise.reject(`cant delet file ${file.name}`)

            })  
        }
    })   
    } catch (error) {
        return Promise.reject(`cant delet file ${file.name}`)
    }


}
export const apiSelectionUploadsStorage = async (uid,file) => {
    const metadata = {'contentType': file.type}
    const storageRef = firebase.storage() 
    storageRef.child(`selectionUploads/${file.id}`).put(file, metadata).then(snapshot => {
      const messageByteTransfered = snapshot.byteTransfered
       const  uploaded =  snapshot.totalBytes
        const snapshhorDownload =  snapshot.ref.getDownloadURL().then(url => {
            apiStoreImageGalleryDb(uid, url, file)
            return url 
        })
})}   
  