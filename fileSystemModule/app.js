
const fs = require("fs");

console.log(fs);

const files = fs.readdirSync("./");

console.log(files);

fs.readdir("./", function(err, files) {
    //Async methods always take last argument a calback function
    //when operation completed calback function run 
    if (err) console.log("Error", err);
    else console.log("Result", files);
});
