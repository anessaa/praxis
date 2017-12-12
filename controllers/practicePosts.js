var PracticePost = require('./../models/practicePost');
var User = require("./../models/user");


function create(req, res) {
  var practicePost = new PracticePost(req.body)  

  practicePost.save((err, createdPracticePost) => {
    if(err) {
      res.status(500).send(err);
    } 
    res.status(200).send(createdPracticePost);
  })
}
    
module.exports = {
  create
}