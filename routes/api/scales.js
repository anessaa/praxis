var express = require('express');
var router = express.Router();
var Scale = require('../../models/scale');
var scalesCtrl = require('../../controllers/scales');

router.get('/', scalesCtrl.index);

module.exports = router;