const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51IhYD2SBhy2urMOMH1fBmi6xojOkv3eQiKIgGIQtzorDX3qEi1ngdHi4gOJ0qkRH2q0fnFSiC8TNWnjFoLa28Tmq00GNn8dVOZ')


const app = express();


app.use(cors({ origin: true }))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send('hello world')
})
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log("payment request received for amount ------- ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-1de8a/us-central1/api
