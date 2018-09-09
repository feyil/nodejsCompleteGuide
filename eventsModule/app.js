
const EventEmitter = require("events");

//console.log(EventEmitter);

const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", function() {
    console.log("Listener called");
});


// Raise an event
emitter.emit("messageLogged");