var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  content: String
}, {
  timestamps: true
});

module.exports = postSchema;