
const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...
    // resolve(1);
    // reject(new Error("message"));

    resolve(1);
});

p.then(result => console.log("Result", result));