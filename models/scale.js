var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scaleSchema = new Schema({
  scale: String,
  diagram: String,
  steps: [String]
})

module.exports = mongoose.model('Scale', scaleSchema);