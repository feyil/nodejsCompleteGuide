const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");


module.exports = function() {
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
      
}