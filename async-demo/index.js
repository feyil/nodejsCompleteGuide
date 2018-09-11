
console.log("Before");
setTimeout(() => { // non blocking function
    console.log("Reading a user from a database");
}, 2000);
console.log("After");
setTimeout(() => { // non blocking function
    console.log("Hi");
}, 1000);
