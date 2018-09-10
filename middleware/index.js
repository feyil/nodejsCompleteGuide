const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json()); // middleware function

app.use(function(req, res, next) {
    console.log("Logging...");
    next();
})

app.use(function(req,res, next) {
    console.log("Authentication...");
    next();
})


app.get("/", (req, res) => {
    res.send("Hello World");
})




app.listen(3000, () => {
    console.log("Listening on port 3000");
})