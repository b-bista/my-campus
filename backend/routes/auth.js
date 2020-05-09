const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
let User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')



router.post('/signup',(req,res)=>{
  const {username,email,password,userType} = req.body 
  if(!email || !password || !username || !userType){
     return res.status(422).json({error:"please add all the fields"})
  }
  User.findOne({username:username})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                username,
                userType
            })
    
            user.save()
            .then(user=>{
                // transporter.sendMail({
                //     to:user.email,
                //     from:"no-reply@insta.com",
                //     subject:"signup success",
                //     html:"<h1>welcome to instagram</h1>"
                // })
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})


router.post('/signin',(req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({username:username})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                 res.json({message:"successfully signed in"})
               //const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
               //const {_id,username,email,followers,following,userType} = savedUser
               //res.json({token,user:{_id,username,email,followers,following,userType}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router