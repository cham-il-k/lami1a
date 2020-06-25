import firebase, {
    firestore, auth
} from '../../util/db/db'
/**
 * Selections queries
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

export const apifetchCollections = async () => {
    const selectionSnapshot = await firestore.collection('selections').get()
    const collections = []

    selectionSnapshot.onSnapshot(async snapshot => {
       // console.log(`Api Fetch collections ${snapshot.docs}`)
        collections = await snapshot.docs.map(docRef => {
            const collection_Ref = docRef.get()
            return collection_Ref.data()
        })
    })
    return collections
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

/**Batch CRUD
 * product manageement 
 * @param {string} productId 
 */

export const apiaddCollectionAndDocuments = async (collectionKey, collections) => {
    const collectionRef = firestore.collection(collectionKey)
     const batch = firestore.batch()
     collections.forEach(object => {
       const newCollRef = collectionRef.doc(object.title)
       batch.set(newCollRef,object)  
     })
     return await batch.commit()  
  }

export const apiCreateProduct =(async ({uid,product}) => {
    const {  title, description,price,collection,file } = product
    try {
        const {fileName, fileId} = file
        const url = await apiSelectionUploadsStorage(uid,file)
        const  fileDb = await  apiStoreImageGalleryDb(uid,url, file)
        firestore.collection('products').doc(title).set({ description, price, collection,fileName,fileId})
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
  