const functions = require('firebase-functions');
const admin = require('firebase-admin')
const config = require('./lami1a-b8cc1c7ae5ec.json')
admin.initializeApp(config)
exports.makeAdmin = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        if(user.isAdmin) {
            return admin.auth().setCustomUserClaims(user.uid,{ admin : true })
        }else {
            return admin.auth().setCustomUserClaims(user.uid,{ admin : false })
        }
    }).then(() => {
        return 'you are admin'
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
