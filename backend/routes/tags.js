const router = require('express').Router();
let Tag = require('../models/tag.model');

//Read
router.route('/').get((req, res) => {
  Tag.find()
    .then(tags => res.json(tags))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const tagname = req.body.tagname;
  const eventtype = req.body.eventtype;
  const postcategory = req.body.postcategory;

  const newTag = new Tag({
      tagname,
      eventtype,
      postcategory
    });

  newTag.save()
    .then(() => res.json('Tag added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  tag.findById(req.params.id)
    .then(tag => res.json(tag))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  tag.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tag deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  tag.findById(req.params.id)
    .then(tag => {
      tag.tagname = req.body.tagname;
      tag.eventtype = req.body.eventtype;
      tag.postcategory = req.body.postcategory;

      tag.save()
        .then(() => res.json('Tag updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;