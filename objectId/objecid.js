
// _id : 5b99856d829bb47b74b56f4b

// 12 bytes
 // 4 bytes: timestamp
 // 3 bytes: machine identifier
 // 2 bytes: process identifier
 // 3 bytes: counter

 // Driver -> MongoDB

 const mongoose = require("mongoose");

 const id = new mongoose.Types.ObjectId();
 console.log(id);
 console.log(id.getTimestamp());

 const isValid = mongoose.Types.ObjectId.isValid("1234");
 console.log(isValid);