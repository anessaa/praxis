var Scale = require('../models/scale');

function index(req, res) {
  Scale.find({}).then((scales) => {
    res.json(scales)
  })
}

module.exports = {
  index
}