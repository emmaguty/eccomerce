const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe("sk_test_51MfUQRI8refubrkfvMDTmsLU3m6QOT1q9suTsTgbyo321F4tCtyIgG4RCFDdCucgD61x39Kilg321sdJxubhMfL000p5xN8z1h");

const app = express();

//middleware

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json())

app.post("/api/checkout", async (req, res) => {
    console.log(req.body);
    res.send("Recibido");
    const { id, amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Basket of Products",
            payment_method: id,
            confirm: true,
        })

        console.log(payment);

        return res.status(200).json({ message: "Success" });

    } catch (error) { 
        return res.json({message: error.raw.message})
    }
});

app.listen(3001, () => {
    console.log("Sever on Port", 3001);
});

