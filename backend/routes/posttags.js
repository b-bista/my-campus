const router = require('express').Router();
let PostTag = require('../models/posttag.model');

//Read
router.route('/').get((req, res) => {
  PostTag.find()
    .then(posttags => res.json(posttags))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const post = req.body.post;
  const tag = req.body.tag;

  const newPostTag = new PostTag({
    post,
    tag
      });

  newPostTag.save()
    .then(() => res.json('PostTag added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  PostTag.findById(req.params.id)
    .then(posttag => res.json(posttag))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  PostTag.findByIdAndDelete(req.params.id)
    .then(() => res.json('PostTag deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  PostTag.findById(req.params.id)
    .then(posttag => {
        posttag.post = req.body.post;
        posttag.tag = req.body.tag;
      
      posttag.save()
        .then(() => res.json('PostTag updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;