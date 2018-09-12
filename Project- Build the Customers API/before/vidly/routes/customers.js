const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();
console.log("deneme");

const Customer = mongoose.model("Customer", new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isGold: Boolean,
    phone: String
}));

router.get("/", async (req, res) => {
    const customer = await Customer.find().sort("name");
    res.send(customer);
});

router.post("/", async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });

    customer = await customer.save();

    res.send(customer);
});

router.put("/:id", async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findByIdAndUpdate(req.params.id,
    {
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    }, {new: true});

    if (!customer) return res.status(404).send("The customer with the given ID was not found");

    res.send(customer);
});

router.delete("/:id", async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);

    if (!customer) return res.status(404).send("The customer with the given ID was not found");

    res.send(customer);
});

router.get("/:id", async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.send(customer)
    }
    catch(ex) {
        res.status(404).send("The customer with the given ID was not found");
    }

});

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).required(),
        isGold: Joi.required(),
        phone: Joi.required()
    };

    return Joi.validate(customer, schema);
}

module.exports = router; // Do not forget!!