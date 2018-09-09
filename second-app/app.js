// ../ parent folder
// >jshint app.js
// Making const we can get compile time error not run time for any changes
const logger = require("./logger")

//logger = 1

console.log(logger);

logger.log('message');