import firebase, {firestore} from './db'


export const  fetchProductById = async(productId) => {

    const productSnapshot = await firestore.collection('products').doc(productId).get()
    return({id:productSnapshot.id, ...productSnapshot.data()})
}

export const productService = async() => {

    const productSnapshot = await firestore.collection('products').get()
    const products = productSnapshot.docs.map(prod => ({id: prod.id, ...prod.data()}))
    return(products)
}
