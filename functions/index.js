const functions = require('firebase-functions');
const admin = require('firebase-admin')
const config = require('./lami1a-b8cc1c7ae5ec.json')
const stripe = require('stripe')(process.env.SECRET_KEY)
const express = require('express')
const app = express()
//const getUidFromEmail = require('./profilMangmt')
admin.initializeApp(config)

const cors = require('cors')({origin: true});

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

app.post('/stripe',(req, res) => {

    try {
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
        
    } catch (error) {
        res.json({error})
    }
})
exports.stripe = functions.https.onRequest(app)

exports.resizeImage = require('./resize_image')

exports.onProductCreation = require('./triggers')