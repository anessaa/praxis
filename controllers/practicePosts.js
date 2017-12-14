var PracticePost = require('./../models/practicePost');
var User = require("./../models/user");


// User.
//   findOne({ name: 'Val' }).
//   populate({
//     path: 'friends',
//     // Get friends of friends - populate the 'friends' array for every friend
//     populate: { path: 'friends' }
//   });

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
      console.log('practicePosts =', practicePosts, '\n')
      console.log('practicePosts.comments =', practicePosts.map(post=> post.comments) )
      console.log('asdfasdf', practicePosts[0].comments[0])
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

function deletePost(req, res) {
  PracticePost.findOneAndRemove(req.body, function(err, practicePost) {
    if (err) {
      throw err;
    }
    if (practicePost) {
      console.log('Practice Post found and removed');
    } else {
      console.log('No Practice Post found');
    }
  });
}

function edit(req,res) {
  PracticePost.findOneAndUpdate(req.params.id, req.body, {new:true}, (err, practicePost) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(practicePost);
  })
}


function createComment(req, res) {
  PracticePost.findById(req.params.id, (err, practicePost) => {
    if (err) {
      return res.status(404).json(err);
    }
    const newComment = {
      remark: req.body.remark,
      author: req.user._id
    }
    practicePost.comments.push(newComment)
    practicePost.save((err, savedPracticePost) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json(savedPracticePost)
    })
  });
}
    
module.exports = {
  create,
  index,
  createComment,
  edit,
  deletePost
}