const express = require('express')
const cors = require('cors')
const bodyParser = reqire('body-parser')
const path = require('path')
if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.post('/payement',(req, res, next) => {
    const body = {
        source:req.body.token.id,
        amount: req.body.amount,
        currency:'eu'
    }
stripe.charges.create(body,(stripeErr, stripeResp) => {
if(stripeErr) {
    res.status(500).send({error:stripeErr})
}
res.status(200).send({success:stripeResp})

})

})
app.listen(port,error => {
    if(error) throw error
})
