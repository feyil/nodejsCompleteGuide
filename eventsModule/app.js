
const EventEmitter = require("events");

//console.log(EventEmitter);

const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", function(arg) { // e, eventArg can be used
    console.log("Listener called;" , arg);
});


// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://"}); //Event Arguments

const logingEmitter = new EventEmitter();

// Register a listener

logingEmitter.on("logging", (message) => {
    console.log("Loging Listener called:", message);
});

// Raise an event

logingEmitter.emit("logging", "Furkan Emre");