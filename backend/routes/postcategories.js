const router = require('express').Router();
let PostCategory = require('../models/postcategory.model');

//Read
router.route('/').get((req, res) => {
  PostCategory.find()
    .then(postcategories => res.json(postcategories))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const post = req.body.post;
  const category = req.body.category;

  const newPostCategory = new PostCategory({
    post,
    category
      });

  newPostCategory.save()
    .then(() => res.json('PostCategory added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  PostCategory.findById(req.params.id)
    .then(postcategory => res.json(postcategory))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  PostCategory.findByIdAndDelete(req.params.id)
    .then(() => res.json('PostCategory deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  PostCategory.findById(req.params.id)
    .then(postcategory => {
        postcategory.post = req.body.post;
        postcategory.category = req.body.category;
      
      postcategory.save()
        .then(() => res.json('PostCategory updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;