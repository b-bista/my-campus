const router = require('express').Router();
let UserProfile = require('../models/userProfile.model')
let OrgProfile = require('../models/orgProfile.model')
const requireLogin = require('../middleware/requireLogin')

//Create user profile
router.post('/createuserprofile',requireLogin,(req,res)=>{
  const {gender, pic} = req.body 
  if(gender || !pic){
    return  res.status(422).json({error:"Please add all the fields"})
  }
  const userProfile = new UserProfile({
    userId: req.user._id,
    name: req.user.name,
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

//Create org profile
router.post('/createorgprofile',requireLogin,(req,res)=>{
  const {about, pic} = req.body 
  if(!about || !pic ){
    return  res.status(422).json({error:"Please add all the fields"})
  }
  const orgProfile = new OrgProfile({
    userId: req.user._id,
    name: req.user.name,
    about,
    photo:pic
  })
  orgProfile.save().then(result=>{
      res.json({orgProfile:result})
  })
  .catch(err=>{
      console.log(err)
  })
})

module.exports = router;