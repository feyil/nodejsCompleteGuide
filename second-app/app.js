// ../ parent folder
// >jshint app.js
// Making const we can get compile time error not run time for any changes
const log = require("./logger")

//logger = 1

console.log(log);

log('message');