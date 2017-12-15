var express = require('express');
var router = express.Router();
var practicePostCtrl = require('../../controllers/practicePosts');

router.post('/new', practicePostCtrl.create);
router.get('/', practicePostCtrl.index);
router.post('/:id/comments', practicePostCtrl.createComment);

module.exports = router;


