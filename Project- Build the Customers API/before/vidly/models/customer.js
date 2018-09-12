const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model("Customer", new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isGold: Boolean,
    phone: String
}));


function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).required(),
        isGold: Joi.required(),
        phone: Joi.required()
    };

    return Joi.validate(customer, schema);
}

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;