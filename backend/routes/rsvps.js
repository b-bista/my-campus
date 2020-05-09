const router = require('express').Router();
let rsvp = require('../models/rsvp.model');

//Read
router.route('/').get((req, res) => {
  rsvp.find()
    .then(rsvps => res.json(rsvps))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const eventname = req.body.eventname;
  const username = req.body.username;
  const date = req.body.date;
  const rsvpType = req.body.rsvpType;

  const newrsvp = new rsvp({
      eventname,
      username,
      date,
      rsvpType
    });

  newrsvp.save()
    .then(() => res.json('RSVP added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  rsvp.findById(req.params.id)
    .then(rsvp => res.json(rsvp))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  rsvp.findByIdAndDelete(req.params.id)
    .then(() => res.json('RSVP deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  rsvp.findById(req.params.id)
    .then(rsvp => {
      rsvp.eventname = req.body.eventname;
      rsvp.username = req.body.username;
      rsvp.date = req.body.date;
      rsvp.rsvpType = req.body.rsvpType;

      rsvp.save()
        .then(() => res.json('RSVP updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;