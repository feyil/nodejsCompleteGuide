
console.log("Before");

getUser(1, displayUser);

// Callbacks
// Promises
// Async / await

console.log("After");

function displayCommits(commits) {
    console.log(commits);
}

function displayRepos(repos) {
    console.log(repos);
 //   getCommits(repo, displayCommits);
}

function displayUser(user) {
    console.log("User", user);
    getRepositories(user.getRepositories, displayRepos);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        callback({ id: id, gitHubUsername: "furkan"});
    }, 2000);
}


function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API...");
        callback(["repo1", "repo2", "repo3"]);
    }, 2000);
}