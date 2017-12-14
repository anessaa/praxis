var Lesson = require('../models/lesson');

function index(req, res) {
  Lesson.find({}).then((lessons) => {
    res.json(lessons)
  })
}


module.exports = {
  index
}