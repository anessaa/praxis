var Lesson = require('./../models/lessons');

function index(req, res) {
  Lesson.find({}).then((lessons) => 
    res.json(lessons));
}


module.exports = {
  index
}