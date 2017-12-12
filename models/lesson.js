var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  name: String,
  scale: String,
  diagram: String,
  steps: [String]
})

module.exports = mongoose.model('Lesson', lessonSchema);