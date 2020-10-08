const functions = require('firebase-functions');
const admin = require('firebase-admin')
const config = require('./lami1a-b8cc1c7ae5ec.json')
const stripe = require('stripe')(process.env.SECRET_KEY)
//const getUidFromEmail = require('./profilMangmt')
admin.initializeApp(config)
const cors = require('cors')({origin: true});

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
exports.stripe = functions.https.onCall((req, res) => {
    const body = {
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'eur'
    }
    
        stripe.charges.create(body, (stripeErr, stripeRes ) => {
            if(stripeErr) {
                res.status(500).send({error,  stripeErr})    
            }else {
                res.status(200).send({success: stripeRes})
            }

        })

})


exports.getUidFromEmail  = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return user.uid
    }).catch(error => {
    return error
    })
})


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
    
exports.sendNotifications = functions.firestore.document('messages/messageId').onCreate(async snapshot => {
    const text = snapshot.data().text
    const description = snapshot.data().description
    const payload = {
        notification:{
            title:`${snapshot.data().title} posted a message`,
            body: text ? ((text.lengh <= 100 ) ? text : text.substring(0,95)+'...') :'',
            click_action:`https://${process.env.GCLOUD_PROJECT}.firebaseapp.com`,
            i
        }
    }
    //Get List Of Tokens
    const allTokens = await admin.firestore.collection('fcmTokens').get()
    const tokens = []
    allTokens.forEach((tokenDoc) =>  
        tokens.push(tokens.id)
    )
    if(allTokens.lengh > 0) {
        const response = await admin.messaging().sendToDevice(tokens, payload)
        await cleanupTokens(response, tokens)
        console.log('notificatcion has been sent and tokens cleaned up ') 
    }
})
exports.cleanupTokens = (response, tokens) => {
    const tokensDelete = []
    response.results.forEach((res,ind) => {
        const error = res.error
        if(error) {
            console.log('Fail to send Notification', tokens[ind], error)
            if(error.code === 'messsaging/invalid-registration-token' ) {
                const deleteTask = admin.firestore().collection('messages').doc(tokens[ind]).delete()
                tokensDelete.push(deleteTask)
            }
        }
    })
    return Promise.all(tokensDelete)
}