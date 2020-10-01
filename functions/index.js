const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HVq06AlzYoQd5L5pennPjhXM488tLqKdKzm4ep71Oj02ekRAlngM1WDnaEsCZfnMJjwOsv6fwWFLjdRvQuLYmdJ00dE69gLK5")


//API set up

    // App config 

    const app = express();

    // Middlewares
    app.use(cors({origin: true}));
    app.use(express.json());

    //API Routes
    app.get("/", (request, response) => response.status(200).send("hello world"));    
    
    //post request
    app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received for >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    });

        // OK - Created
    response.status(201).send({
    clientSecret: paymentIntent.client_secret,
        });
    });

    // - Listen command
    exports.api = functions.https.onRequest(app);

    //Example end point (local apo end point)
    //http://localhost:5001/challenge-aca94/us-central1/api