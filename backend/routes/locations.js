const router = require('express').Router();
let Location = require('../models/location.model');

//Read
router.route('/').get((req, res) => {
  Location.find()
    .then(locations => res.json(locations))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const location = req.body.location;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;
  const country = req.body.country;
  const building = req.body.building;
  const room = req.body.room;

  const newLocation = new Location({
    location,
    city, 
    state,
    zipcode,
    country,
    building,
    room
      });

  newLocation.save()
    .then(() => res.json('Location added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  Location.findById(req.params.id)
    .then(location => res.json(location))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  Location.findByIdAndDelete(req.params.id)
    .then(() => res.json('Location deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  Location.findById(req.params.id)
    .then(location => {
        location.location = req.body.location;
        location.city = req.body.city;
        location.state = req.body.state;
        location.zipcode = req.body.zipcode;
        location.country = req.body.country;
        location.building = req.body.building;
        location.room = req.body.room;
      
      location.save()
        .then(() => res.json('Location updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;