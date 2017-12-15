var PracticePost = require('./../models/practicePost');
var User = require("./../models/user");

function index(req, res) {
  PracticePost
    .find({})
    .populate({
      path: 'author',
    })
    .populate({
      path: 'comments.author',
      populate: {
        path: 'author'
      }
    }).then((practicePosts) => {
      res.json(practicePosts);
    });
}

function create(req, res) {
  var practicePost = new PracticePost(req.body)  
  practicePost.author = req.user._id;
  practicePost.save((err, createdPracticePost) => {
    if(err) {
      res.status(500).send(err);
    } 
    res.status(200).send(createdPracticePost);
  })
}

// function deletePost(req, res) {
//   PracticePost.findOneAndRemove(req.body, function(err, practicePost) {
//     if (err) {
//       throw err;
//     }
//     if (practicePost) {
//       console.log('Practice Post found and removed');
//     } else {
//       console.log('No Practice Post found');
//     }
//   });
// }

// function edit(req,res) {
//   console.log('editing in db')
//   PracticePost.findOneAndUpdate(req.params.id, req.body, {new:true}, (err, practicePost) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).send(practicePost);
//   })
// }

function createComment(req, res) {
  PracticePost.findById(req.params.id)
    .then((practicePost) => {

      const newComment = {
        remark: req.body.remark,
        author: req.user._id
      }

    practicePost.comments.push(newComment)
    practicePost.save((err, savedPracticePost) => {
      if (err) {
        return res.status(500).json(err);
      }
    })
  })
  .then(() => {
    PracticePost
      .findById(req.params.id)
      .populate({
        path: 'author',
      })
      .populate({
        path: 'comments.author',
        populate: {
          path: 'author'
        }
      }).then((practicePosts) => {
        res.json(practicePosts);
      });
  })
  .catch(err => {
    if (err) {
      return res.status(404).json(err);
    }
  });
}
    
module.exports = {
  create,
  index,
  createComment
}