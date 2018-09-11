
const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...
    // resolve(1); // pending => resolved, fulfilled
    // reject(new Error("message")); // pending => rejected

    setTimeout(() => {
        //resolve(1);
        reject(new Error("message"));
    }, 2000);
});

console.log("Before");

p
    .then(result => console.log("Result", result))
    .catch(err => console.log("Error", err.message));

console.log("After");