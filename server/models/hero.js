var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  alias: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  city: { type: String },
  power_name: { type: String },
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
