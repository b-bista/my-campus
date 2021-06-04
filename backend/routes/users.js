const router = require("express").Router();
let User = require("../models/user.model");
let Post = require("../models/user.model");
let OrgCategory = require("../models/orgCategory.model");
let UserProfile = require("../models/userProfile.model");
let OrgProfile = require("../models/orgProfile.model");
const requireLogin = require("../middleware/requireLogin");

//Create user profile
router.post("/createuserprofile", requireLogin, (req, res) => {
  const { gender, pic } = req.body;
  if (!gender || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const userProfile = new UserProfile({
    userId: req.user._id,
    name: req.user.name,
    gender,
  });
  userProfile
    .save()
    .then((result) => {
      res.json({ userProfile: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Create org profile
router.post("/createorgprofile", requireLogin, (req, res) => {
  const { about, banner } = req.body;
  if (!about) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const orgProfile = new OrgProfile({
    userId: req.user._id,
    name: req.user.name,
    about,
    banner,
  });
  orgProfile
    .save()
    .then((result) => {
      res.json({ orgProfile: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/users/:id", requireLogin, (req, res) => {
  OrgProfile.findOne({ userId: req.params.id })
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

router.get("/allorgs", requireLogin, (req, res) => {
  OrgProfile.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json(err));
});

router.put("/follow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

router.put("/unfollow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unfollowId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

//Read
router.get("/orgCategories", requireLogin, (req, res) => {
  OrgCategory.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Create
router.post("/addOrgCategory", requireLogin, (req, res) => {
  const { name } = req.body;

  const newOrgCategory = new OrgCategory({
    name,
  });

  newOrgCategory
    .save()
    .then(() => res.json("OrgCategory added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
