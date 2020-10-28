const functions = require('firebase-functions');
const admin = require('firebase-admin')

//const getUidFromEmail = require('./profilMangmt')
const firestore = admin.firestore()

exports.addItemsToSelection = functions.https.onRequest(async(req, res) => {
    let date = ''
    try {
         const prodQuerSnapshot = await firestore.collection('products').get()
        const products = prodQuerSnapshot.docs.map((prod) => ({id: prod.id, ...prod.data()}))
        const selectionsQuerSnapsot = firestore.collection('selections').get()
        const timestamp = prodQuerSnapshot.get('created_at')
        date = timestamp.toDate();
          res.json({products, date})  
    } catch (error) {
        res.json({error, date:date})  

    }})

exports.onProductCreation = functions.firestore.document('products/productId').onWrite(async (change, context) => {
    console.log({docSnapshot, context })
    const productId = context.params.productId

})