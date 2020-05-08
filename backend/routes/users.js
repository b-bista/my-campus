const router = require('express').Router();
let User = require('../models/user.model');

//Read
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create
router.route('/add').post((req, res) => {
  const userID = req.body.userID;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const dateRegistered = Date.parse(req.body.dateRegistered)
  const userType = req.body.userType;
  const accountStatus = req.body.accountStatus;
  const lastAccessed = req.body.lastAccessed;

  const newUser = new User({
      userID,  
      username,
      email,
      password,
      dateRegistered,
      userType,
      accountStatus,
      lastAccessed
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Read by id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update by id
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      userID = req.body.userID;
      username = req.body.username;
      email = req.body.email;
      password = req.body.password;
      dateRegistered = Date.parse(req.body.dateRegistered)
      userType = req.body.userType;
      accountStatus = req.body.accountStatus;
      lastAccessed = req.body.lastAccessed;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;