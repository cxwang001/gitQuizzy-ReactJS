// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// jwt is for decoding the auth0 key of user password
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
// adding for posterity of tutorial
var cors = require('cors');
// Auth0, not sure how this is used here, but leaving in for WILLIAM
var auth0 = require("auth0-js")
// Require the Player model so we can store Player name, wins, and losses
var Player = require('./models/Player.js');
//Require History Schema
var History = require("./models/History");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// This is how we serve/route our static pages 
app.use(express.static("public"));

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://cxwang001.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: 'cxwang001.auth0.com',
    algorithms: ['RS256']
});

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/gitquizzly");
var db = mongoose.connection;
console.log(db);

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/api/Player', function(req, res) {

  User.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/Player', function(req, res){
  var newPlayer = new Player(req.body);

  var name = req.body.name;
  var win = req.body.win;
  var loss = req.body.loss;

  newPlayer.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});

app.delete('/api/Player/', function(req, res){

  var url = req.param('url');

  User.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// -------------------------------------------------
// Turn on PORT Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

auth0;