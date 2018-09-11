
const p = Promise.resolve({id:1});
const p1 = Promise.reject(new Error("reason for rejection")); // include call stack
p.then(result => console.log(result));
p1.catch(error => console.log(error));