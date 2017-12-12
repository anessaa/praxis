var User = require('./../models/user');

module.exports = {
  destroy,
  create
}

function destroy(req, res) {
  User.findById(req.params.id, (err, doc) => {
    doc.posts.id(req.params.post_id).remove()
    doc.save()
    res.redirect('/users');
  });
}

function create(req, res) {
  User.findById(req.body.id, (err, doc) => {
    doc.posts.push({
      content: req.body.content
    })
    doc.save((err,doc) => {
      if(err) {
        res.render('./users/show');
      } else {
        res.redirect('/users');
      }
    })
  })
}