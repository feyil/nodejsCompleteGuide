
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 1...");
        resolve(1);
      // reject(new Error("because something failed"));
    },2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 2...");
        resolve(2);
    },2000);
})

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log(error)); // If one of them rejected all consider as rejected

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log(error)); // If one of them rejected all consider as rejected
 