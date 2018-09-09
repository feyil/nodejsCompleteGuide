
var url = "http://mylogger.io/log";

function log(message) {
    // Send an HTTP request
    console.log(message)
}

//module.exports.log= log; // exporting an object
module.exports = log // exporting a function
//module.exports.endPoint = url;