const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const express = require("express");
const logger = require("./logger");
const authenticate = require("./authenticate");

const app = express();

console.log(`NODE_ENV ${process.env.NODE_ENV}`);
console.log(`app: ${app.get("env")}`);

app.use(express.json()); // middleware function
app.use(express.urlencoded({ extended: true})); // key=value&key=value
app.use(express.static("public"));
app.use(helmet());

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password") );

if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("morgan enabled");
}


app.use(logger);

app.use(authenticate);


app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})