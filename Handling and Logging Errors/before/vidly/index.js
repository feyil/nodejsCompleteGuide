require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");

const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const express = require('express');
const app = express();
require("./startup/routes")(app);
require("./startup/db")();

process.on("uncaughtException", (ex) => {
  console.log("We got an uncaught exception.");
  winston.error(ex.message, ex);
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  console.log("We got an unhandled rejection exception.");
  winston.error(ex.message, ex);
  process.exit(1);

  // throw ex;
});

// winston.handleExceptions(new winston.transpots.File({filename: "uncaughtExceptions.log" }))


winston.add(new winston.transports.File({ filename: "logfile.log" })); 
winston.add(new winston.transports.Console());
winston.add(new winston.transports.MongoDB({db: "mongodb://localhost/vidly"}));

// const p = Promise.reject(new Error("Something failed miserably!"));
// p.then(() => console.log("Done"));


if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));