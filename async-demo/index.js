
console.log("Before");

const user = getUser(1); // user is undefined

// Callbacks
// Promises
// Async / await

console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        return { id: id, gitHubUsername: "furkan"};
    }, 2000);
}

