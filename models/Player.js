var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {
    type: String
  },
  wins: {
    type: Number
  },
  losses: {
    type: Number
  },
  lastScore: {
    type: Number
  }
});

var Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;