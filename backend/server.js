const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose');
const stripe = require("stripe")(
    "sk_test_51GxZ12EXtqLGnPz4balALYOhHmWAKVbU3en1MWX0mDom9D42HM0lvCsrbvYpBmmlPeZ52Ut9HrVGUS6YJl3dmh1o00myinqDaW"
);
const uuid = require("uuid/v4");

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

var Users = require('./routes/api/Users');
var Auth = require('./routes/api/auth');

const Contact = require('./routes/contacts');


app.use('/api/users', Users);
app.use('/api/auth', Auth);

app.use('/contacts',Contact);

app.get("/", (req, res) => {
    res.send("THANK YOU");
});

app.get('/v1/customers',(req,res)=>{

        var stripe = require('stripe')('sk_test_51GxZ12EXtqLGnPz4balALYOhHmWAKVbU3en1MWX0mDom9D42HM0lvCsrbvYpBmmlPeZ52Ut9HrVGUS6YJl3dmh1o00myinqDaW');


        stripe.customers.list(
            {limit: 3},
            function(err, customers) {
                if (err) return res.status(400).json({ success: false, err });
                res.status(200).json({ success: true, customers });
                console.log(customers.data)
            });
    }

);
app.get('/v1/balance',(req,res)=>{

        const stripe = require('stripe')('sk_test_51GxZ12EXtqLGnPz4balALYOhHmWAKVbU3en1MWX0mDom9D42HM0lvCsrbvYpBmmlPeZ52Ut9HrVGUS6YJl3dmh1o00myinqDaW');

        stripe.balance.retrieve(function(err, balance) {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, balance });
            console.log(balance.data)
        });

        stripe.customers.list(
            {limit: 3},
            function(err, customers) {
                if (err) return res.status(400).json({ success: false, err });
                res.status(200).json({ success: true, customers });
                console.log(customers.data)
            });
    }

);
app.get('/v1/balance',(req,res)=>{

        const stripe = require('stripe')('sk_test_51GxZ12EXtqLGnPz4balALYOhHmWAKVbU3en1MWX0mDom9D42HM0lvCsrbvYpBmmlPeZ52Ut9HrVGUS6YJl3dmh1o00myinqDaW');

        stripe.balance.retrieve(function(err, balance) {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, balance });
            console.log(balance.data)
        });







    }

);

app.post("/checkout", async (req, res) => {
    
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "lkr",
                customer: customer.id,
                receipt_email: token.email,
                description: `Donated the LKR {product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started " + port));