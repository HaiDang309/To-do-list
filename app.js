const express = require("express");

const app = express();

const todo = require("./controllers/controllers.js");



app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

todo(app);

app.listen(3000);

console.log("Running port 3000...");
