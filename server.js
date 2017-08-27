// Include Server Dependencies
var express = require("express");
var path = require ("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

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

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile("public/index.html");
});

app.get('/', function(req, res) {

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

app.post('/', function(req, res){
     if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });


// -------------------------------------------------
// Turn on PORT Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});