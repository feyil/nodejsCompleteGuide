const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const express = require("express");
const logger = require("./logger");
const authenticate = require("./authenticate");

const app = express();

app.use(express.json()); // middleware function
app.use(express.urlencoded({ extended: true})); // key=value&key=value
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));

app.use(logger);

app.use(authenticate);


app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})