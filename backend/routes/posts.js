const router = require("express").Router();
let Post = require("../models/post.model");
const requireLogin = require("../middleware/requireLogin");

router.get("/allposts", requireLogin, async (req, res) => {
  await Post.find()
    .sort({ createdAt: -1 })
    .populate("postedBy", "_id name photo userType")
    .populate("comments.postedBy", "_id name photo")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Create post
router.post("/createpost", requireLogin, (req, res) => {
  const { body, pic } = req.body;
  if (!body || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const post = new Post({
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allposts/:userId", requireLogin, (req, res) => {
  Post.find({ postedBy: req.params.userId })
    .populate("postedBy", "_id name photo userType")
    .populate("comments.postedBy", "_id name photo")
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name photo userType")
    .populate("comments.postedBy", "_id name photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});
router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name photo userType")
    .populate("comments.postedBy", "_id name photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    body: req.body.body,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name photo usertype")
    .populate("postedBy", "_id name photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
