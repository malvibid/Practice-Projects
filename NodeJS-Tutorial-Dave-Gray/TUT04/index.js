//Custom modules
const logEvents = require("./logEvents");

//Common core modules
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize object

const myEmitter = new MyEmitter();

//add listener for the log event (order matters, listener has to be placed before the event is emitted otherwise the event won't be caught or logged.)
myEmitter.on("log", (msg) => logEvents(msg));

//Emit event
myEmitter.emit("log", "Log event emitted!");
