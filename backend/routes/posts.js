const router = require('express').Router();
let Post = require('../models/post.model');
let Comment = require('../models/comment.model');
let User = require('../models/user.model');

router.get('/', async (req, res) => {
  await Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create post
router.post('/:userId/post', async (req, res) => {
  //Find user
  const user = await User.findOne({ _id: req.params.userId });

  const body = req.body.body;
  const photo = req.body.photo;
  const postedBy = user._id;

  const newPost = new Post({
      body,
      photo,
      postedBy
    });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Like a post
router.post('/:userId/:postId/like', async (req, res) => {
  //Find user
  const user = await User.findOne({ _id: req.params.userId });
  const post = await Post.findOne({ _id: req.params.postId });

  //Like post
  const like = new Like();
  like.likedBy = user._id;
  like.post = post._id;
  like.save()
  .then(() => res.json('Comment added!'))
  .catch(err => res.status(400).json('Error: ' + err));

  // Associate Post with comment
  post.likes.push(like._id);
  post.save()
  .then(() => res.json('Likes updated!'))
  .catch(err => res.status(400).json('Error: ' + err));

  res.send(like);
});


//Read by id
router.get('/:postId', async (req, res) => {
  await Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.delete('/:postId', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.put('/:postId', async (req, res) => {
  await Post.findById(req.params.id)
    .then(post => {
      post.body = req.body.body;
      post.photo = req.body.photo;
      post.postedBy = req.body.postedBy;

      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a Comment
router.post("/:postId/comment", async (req, res) => {
  
  //Find post
  const post = await Post.findOne({ _id: req.params.postId });

  //Create a Comment
  const comment = new Comment();
  comment.body = req.body.body;
  comment.postedBy = post._id;
  comment.save()
  .then(() => res.json('Comment added!'))
  .catch(err => res.status(400).json('Error: ' + err));

  // Associate Post with comment
  post.comments.push(comment._id);
  post.save()
  .then(() => res.json('Post updated!'))
  .catch(err => res.status(400).json('Error: ' + err));

  res.send(comment);
});

//Read a Comment

router.get("/:postId/comment", async (req, res) => {
  const post = Post.findOne({ _id: req.params.postId }).populate(
    "comments"
  );
  res.send(post);
});

//Like a comment
router.post('/:userId/:commentId/like', async (req, res) => {
  //Find user and comment
  const user = await User.findOne({ _id: req.params.userId });
  const comment = await Comment.findOne({ _id: req.params.commentId });

  //Like post
  const like = new Like();
  like.likedBy = user._id;
  like.comment = comment._id;
  like.save()
  .then(() => res.json('Liked!'))
  .catch(err => res.status(400).json('Error: ' + err));

  // Associate like with comment
  comment.likes.push(like._id);
  like.save()
  .then(() => res.json('Likes updated!'))
  .catch(err => res.status(400).json('Error: ' + err));

  res.send(like);
});

module.exports = router;