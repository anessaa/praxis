var express = require('express');
var router = express.Router();
var practicePostCtrl = require('../../controllers/practicePosts');

router.post('/new', checkAuth, practicePostCtrl.create);
router.get('/', checkAuth, practicePostCtrl.index);
router.post('/:id/comments', checkAuth, practicePostCtrl.createComment);

module.exports = router;


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}