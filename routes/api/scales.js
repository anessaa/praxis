var express = require('express');
var router = express.Router();
var Scale = require('../../models/scale');
var scalesCtrl = require('../../controllers/scales');

router.get('/', checkAuth, scalesCtrl.index);

module.exports = router;

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}