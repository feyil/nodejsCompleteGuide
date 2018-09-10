const Joi = require("joi");
const express = require("express");
const logger = require("./logger");
const authenticate = require("./authenticate");

const app = express();

app.use(express.json()); // middleware function

app.use(logger);

app.use(authenticate);


app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})