var express = require('express');
var router = express.Router();
var practicePostCtrl = require('../../controllers/practicePosts');

router.post('/new', practicePostCtrl.create);
router.get('/', practicePostCtrl.index);
router.post('/:id/comments', practicePostCtrl.createComment);
router.delete('/:id', practicePostCtrl.deletePost);
router.put('/:id/edit', practicePostCtrl.edit);

module.exports = router;