const router = require('express').Router()
let ForumPost = require('../models/forumPost.model')
let ForumTopic = require('../models/forumTopic.model')
const requireLogin = require('../middleware/requireLogin')

router.get('/allforumposts', requireLogin, async (req, res) => {
  await ForumPost.find()
  .populate("postedBy","_id name photo userType")
  .populate("comments.forumPostedBy","_id name photo")
    .then(forumPosts => res.json(forumPosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create forumPost
router.post('/createforumpost',requireLogin,(req,res)=>{

    const {title,description,photo,topic} = req.body 
    if(!title || !description || !photo || !topic){
    return  res.status(422).json({error:"Plase add all the fields"})
    }
    const forumPost = new ForumPost({
        title,
        description,
        topic,
        photo,
        postedBy:req.user
    })
    forumPost.save().then(result=>{
        res.json({forumPost:result})
    })
    .catch(err=>{
        console.log(err)
    })
    ForumTopic.findByIdAndUpdate(req.body.topic,{
        $push:{posts:result._id}
    })
})

//Create forumTopic
router.post('/createforumtopic',requireLogin,(req,res)=>{

    const {title,description,photo} = req.body 
    if(!title || !description || !photo){
    return  res.status(422).json({error:"Plase add all the fields"})
    }
    const forumTopic = new ForumTopic({
        title,
        description,
        photo
    })
    forumTopic.save().then(result=>{
        res.json({forumTopic:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/myforumPost',requireLogin,(req,res)=>{
  ForumPost.find({forumPostedBy:req.user._id})
  .populate("ForumPostedBy","_id name")
  .then(myforumPost=>{
      res.json({myforumPost})
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/allforumPosts/:userId',requireLogin,(req,res)=>{
    ForumPost.find({forumPostedBy:req.params.userId})
    .populate("forumPostedBy","_id name photo userType")
    .populate("comments.forumPostedBy","_id name photo")
    .then(forumPost=>{
        res.json({forumPost})
    })
    .catch(err=>{
        console.log(err)
    })
  })

router.put('/like',requireLogin,(req,res)=>{
  ForumPost.findByIdAndUpdate(req.body.forumPostId,{
      $push:{likes:req.user._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})
router.put('/unlike',requireLogin,(req,res)=>{
  ForumPost.findByIdAndUpdate(req.body.forumPostId,{
      $pull:{likes:req.user._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})


router.put('/comment',requireLogin,(req,res)=>{
  const comment = {
      body:req.body.body,
      forumPostedBy:req.user._id
  }
  ForumPost.findByIdAndUpdate(req.body.forumPostId,{
      $push:{comments:comment}
  },{
      new:true
  })
  .populate("comments.forumPostedBy","_id name")
  .populate("forumPostedBy","_id name")
  .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

router.delete('/deleteforumPost/:forumPostId',requireLogin,(req,res)=>{
  ForumPost.findOne({_id:req.params.forumPostId})
  .populate("forumPostedBy","_id")
  .exec((err,forumPost)=>{
      if(err || !forumPost){
          return res.status(422).json({error:err})
      }
      if(forumPost.forumPostedBy._id.toString() === req.user._id.toString()){
            forumPost.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
})

module.exports = router;