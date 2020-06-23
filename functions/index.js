const functions = require('firebase-functions');
const admin = require('firebase-admin')
const config = require('./lami1a-b8cc1c7ae5ec.json')
const getUidFromEmail = require('./profilMangmt')
admin.initializeApp(config)
exports.stripe = functions.https.onCall((req, res) => {
})

exports.getUidFromEmail = getUidFromEmail

exports.makeAdmin = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        let message =''
        let uid =''
        if(data.email === 'hicham.horsejux@gmail.com' || user.isAdmin){
            message = 'admin priviledges'
           uid = user.uid
            return admin.auth().setCustomUserClaims(user.uid,{ admin : true })

        }else {
            message = 'user priviledges'
            uid = user.uid
            return admin.auth().setCustomUserClaims(user.uid,{ admin : false })
        }
    }).then(() => {
        return {
            email:data.email,
            message,
            uid    
        }
    }).catch(error => {
        return error
    })
})
    
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
