const express = require("express");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json({ extended: false }));

// After allllll that above middleware, we finally handle our own routes!
app.get("/", (req, res) => res.send("API Running"));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

// done! we export it so we can start the site in start.js
module.exports = app;
