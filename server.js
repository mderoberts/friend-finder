var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

create.connection(function(err) {
    if(err) throw err;
    console.log("Connected with " + connection.threadId);
});

// Express data parsing to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Friends (DATA)
// =============================================================
var friends = [{
  "name": " "",
  "photo": " "",
  "scores": " []
}, {
  "name": " "",
  "photo": " "",
  "scores": " []
}, {
  "name": " "",
  "photo": " "",
  "scores": " []
}];

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
