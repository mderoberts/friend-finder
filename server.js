// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Parsing data to JSON with Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/data/friends")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
