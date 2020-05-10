const router = require('express').Router();
let UserProfile = require('../models/userProfile.model');
const requireLogin = require('../middleware/requireLogin')

//Create user profile
router.post('/createuserprofile',requireLogin,(req,res)=>{
  const {firstName, lastName, gender, pic} = req.body 
  if(!firstName || !lastName){
    return  res.status(422).json({error:"Plase add all the fields"})
  }
  const userProfile = new UserProfile({
    userId: req.user._id,
    firstName,
    lastName,
    gender,
    photo:pic
  })
  userProfile.save().then(result=>{
      res.json({userProfile:result})
  })
  .catch(err=>{
      console.log(err)
  })
})

module.exports = router;