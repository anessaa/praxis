var express = require('express');
var router = express.Router();
var Lesson = require('../../models/lesson');
var practicePostCtrl = require('../../controllers/practicePosts');

router.post('/new', practicePostCtrl.create);
router.get('/', practicePostCtrl.index);
router.post('/:id/comments', practicePostCtrl.createComment);
router.put('/:id', practicePostCtrl.deletePost);
router.put('/:id', practicePostCtrl.edit);

module.exports = router;