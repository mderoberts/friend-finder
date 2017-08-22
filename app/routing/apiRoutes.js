// Load Data

var friendData = require("../data/friends");
var path = require('path');


// Routes

module.exports = function(app) {

  // API GET Request
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Request
    app.post("/api/friends", function(req, res) {
    friendData.push(req.body);

    var bestMatch = {
        name: "",
        photo: "",
        score: 40
    };
    for (var i = 0; i < friendData.length - 1; i ++) {
        var scoreCounter = 0;
        for (var j = 0; j < friendData[i].scores.length; j++) {
            scoreCounter += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(req.body.scores[j]));
        }
        if (scoreCounter < bestMatch.score) {
            bestMatch = {
                name: friendData[i].name,
                photo: friendData[i].photo,
                score: scoreCounter
            };
        }
    }
    res.json(bestMatch);
  });
}