var express = require('express');
var router = express.Router();
var Lesson = require('../../models/lesson');
var lessonsCtrl = require('../../controllers/lessons');

router.get('/', lessonsCtrl.index);

module.exports = router;