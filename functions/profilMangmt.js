const functions = require('firebase-functions')
const  admin = require('firebase-admin')
    
exports.getUidFromEmail  = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return user.uid
    }).catch(error => {
    return error
    })
})

