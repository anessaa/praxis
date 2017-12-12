var express = require('express');
var router = express.Router();
var Lesson = require('../../models/lesson');
var practicePostCtrl = require('../../controllers/practicePosts');

router.post('/new', practicePostCtrl.create);


module.exports = router;