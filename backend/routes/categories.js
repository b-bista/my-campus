const router = require('express').Router();
let Category = require('../models/category.model');

//Read
router.route('/').get((req, res) => {
  Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const category = req.body.category;

  const newCategory = new Category({
      category
    });

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json('Category deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      category.category = req.body.category;

      category.save()
        .then(() => res.json('Category updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;