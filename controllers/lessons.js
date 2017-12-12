var Lesson = require('../models/lesson');

function index(req, res) {
  Lesson.find({}).then((lessons) => {
    console.log("lessons", lessons);
    res.json(lessons)
  })
}


module.exports = {
  index
}