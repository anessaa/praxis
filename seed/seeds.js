require('dotenv').config();
require('./../config/database');
const lessons = require('./lessons');

const Lesson = require('./../models/lesson');

const seed = Lesson.remove({});

seed.then(() => {
  console.log(lesson);
  require('mongoose').connection.close();
  process.exit();
});