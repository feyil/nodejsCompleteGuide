
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const morgan = require("morgan");
const express = require("express");
const app = express();

// export DEBUG=app:startup
// export DEBUG=
// export DEBUG=app:startup, app:db
// export DEBUG=app:*
// DEBUG=app:db nodemon index.js

if (app.get("env") === "development") { // export NODE_ENV=development
    app.use(morgan("tiny"));
    startupDebugger("Morgan enabled...");
}

// Db work
dbDebugger("Connected to the database...");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
