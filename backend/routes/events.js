const router = require('express').Router();
let Event = require('../models/event.model');

//Read
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const eventname = req.body.eventname;
  const username = req.body.username;
  const location = req.body.location;
  const datefrom = req.body.datefrom;
  const dateto = req.body.dateto;
  const eventtype = req.body.eventtype;
  const eventdescription = req.body.eventdescription;
  const eventphoto = req.body.eventphoto;
  const eventrsvp = req.body.eventrsvp;
  const date = req.body.date;

  const newEvent = new Event({
    eventname,
    username, 
    location,
    datefrom,
    dateto,
    eventtype,
    eventdescription,
    eventphoto,
    eventrsvp,
    date
      });

  newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.eventname = req.body.eventname;
      event.username = req.body.username;
      event.location = req.body.location;
      event.datefrom = req.body.datefrom;
      event.dateto = req.body.dateto;
      event.eventtype = req.body.eventtype;
      event.eventdescription = req.body.eventdescription;
      event.eventphoto = req.body.eventphoto;
      event.eventrsvp = req.body.eventrsvp;
      event.date = req.body.date;

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;