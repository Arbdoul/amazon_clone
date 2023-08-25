const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `sk_test_51Ni0igCUNGexcEWKRHQ2jU9gDrRgKgntfWDWb9DMD0kFjMCvLn0FgXv8FAnE2ewfmjSUFI5Mkr6TI95jfThcgECN0098EG472b`
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Route
// app.get("/", (request, response) =>
// response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for this amount:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subuint of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
