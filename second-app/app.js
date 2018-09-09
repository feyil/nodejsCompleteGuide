// ../ parent folder
// >jshint app.js
// Making const we can get compile time error not run time for any changes
const log = require("./logger")

//logger = 1

console.log(log);

log('message');

console.log(__filename);
console.log(__dirname);

/*
    Module wrapper function
    (function(exports, require, module, __filename, __dirname){
        //code
    })
*/