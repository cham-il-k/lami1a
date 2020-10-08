import firebase, {
    firestore, auth, firebaseTimestamp
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
// create object Collection by id
export const snapShotLooper = snapshot => {
    let data = {}
    snapshot.forEach(doc => {
        const id = doc.id
        data[id] = doc.data()
    })
    return data
}

 export const apiFetchAllProducts =  () => {
    try {
        const products = {}
          firestore.collection('products').get().then(async snapshot => {
                snapshot.forEach( async (product, index) => {
                   const id = product.id
                    products[id]=  product.data()
                })
        console.log({products})
        return new Promise((resolve, reject) => resolve(products))
         })
         } catch (error) {
        return Promise.reject(error)
    }
}

export const apifetchProductById = async (productId) => {
     firestore.collection('products').doc(productId).get().then(snapshot => ({
         id: snapshot.id,
         ...snapshot.data()
     }))
}

// create Product
export const apiCreateProduct =(async (item) => {
    const [uid, product] = item
    console.log({item}) 
    let { title, description,price,collection,selection,image } = product
    try {
        //console.log({product})
        //const {fileName, fileId} = file
        title = slug(title)
        price = parseInt(price) 
        const createdAt = firebaseTimestamp
        const newProduct = {uid,description, price, collection,image,selection, createdAt}
        addProductToSelection(newProduct)
        return firestore.collection('products').doc(title).set(newProduct)
                
    } catch (error) {
     Promise.reject(error)
 }
})


const addProductToSelection = async product => {
    try {
        console.log({product})

        const selection = product['selection'] || 'products'
        const collection = !!product['collection'] ? product['collection'] : 'market'
        const selectionSnaps = await firestore.collection(`/selections/${selection}/${collection}`).get()
        console.log({selectionSnaps})
        if(!selectionSnaps.exists) {
            selectionSnaps.doc(product['id']).set(product)
            console.log({docs:selectionSnaps.docs})
            console.log({data:selectionSnaps.data()})
        
        }
         
    }catch(error) {
        Promise.reject(error)
    }
} 
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
  