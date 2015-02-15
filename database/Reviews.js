var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  name:  String,
  placeType: String,
  stars:   Number
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;