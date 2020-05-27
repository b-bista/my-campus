const router = require('express').Router()
let ForumPost = require('../models/forumPost.model')
let ForumTopic = require('../models/forumTopic.model')
const requireLogin = require('../middleware/requireLogin')

router.get('/allforumposts', requireLogin, async (req, res) => {
  await ForumPost.find()
  .populate("postedBy","_id name photo userType")
  .populate("comments.postedBy","_id name photo")
    .then(forumPosts => res.json(forumPosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/allforumtopics', requireLogin, async (req, res) => {
    await ForumTopic.find()
      .then(forumTopics => res.json(forumTopics))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.get('/forumposts/:forumpostId',requireLogin,(req,res)=>{
    ForumPost.findOne({_id:req.params.forumpostId})
    .populate("topic","_id name")
    .populate("postedBy","_id name photo")
    .populate("comments.postedBy","_id name photo")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

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
        $push:{posts:forumPost._id}},{new:true}).then(result=>{
            res.json(result)
        }).catch(err=>{
            return res.status(422).json({error:err})
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
  ForumPost.find({postedBy:req.user._id})
  .populate("ForumPostedBy","_id name")
  .then(myforumPost=>{
      res.json({myforumPost})
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/allforumposts/:topic',requireLogin, async (req,res)=>{
    await ForumPost.find({topic:req.params.topic})
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


router.put('/commentForum',requireLogin,(req,res)=>{
  const comment = {
      body:req.body.body,
      postedBy:req.user._id
  }
  ForumPost.findByIdAndUpdate(req.body.postId,{
      $push:{comments:comment}
  },{
      new:true
  })
  .populate("comments.postedBy","_id name")
  .populate("postedBy","_id name")
  .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

router.delete('/deleteforumpost/:forumtopicid/:forumpostid',requireLogin,(req,res)=>{
    ForumTopic.findByIdAndUpdate(req.params.forumtopicid,{
        $pull:{posts:req.params.forumpostid}},{new:true}).then(result=>{
            res.json(result)
        }).catch(err=>{
            return res.status(422).json({error:err})
        })
    ForumPost.findOne({_id:req.params.forumpostid})
        .populate("postedBy","_id")
        .exec((err,forumPost)=>{
            if(err || !forumPost){
                return res.status(422).json({error:err})
            }
            if(forumPost.postedBy._id.toString() === req.user._id.toString()){
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