var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  remark: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
})

var practicePostSchema = new Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: String,
  duration: Number,
  comments : [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model("practicePost", practicePostSchema);