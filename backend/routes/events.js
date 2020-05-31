const router = require('express').Router();
let Event = require('../models/event.model');
let EventCategory = require('../models/eventCategory.model');
const requireLogin = require('../middleware/requireLogin')

//Get all events
router.get('/allevents', requireLogin, async (req, res) => {
  await Event.find()
    .populate("hostedBy","_id name photo")
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create event
router.post('/createevent',requireLogin,(req,res)=>{

    const {name,description,location,from,to,photo} = req.body
    console.log(req.user);
    
    if(!name || !description || !location || !from || !to ){
    return  res.status(422).json({error:"Plase add all the fields"})
    }
    const event = new Event({
        name,
        description,
        location,
        from,
        to,
        photo,
        hostedBy: req.user._id
    })
    event.save().then(result=>{
        res.json({event:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myevent',requireLogin,(req,res)=>{
  Event.find({hostedBy:req.user._id})
  .populate("hostedBy","_id name")
  .then(myevents=>{
      res.json({myevents})
  })
  .catch(err=>{
      console.log(err)
  })
})

router.get('/events/:eventId',requireLogin,(req,res)=>{
    Event.findOne({_id:req.params.eventId})
    .populate("hostedBy","_id name photo")
    .then(events=>{
        res.json({events})
    })
    .catch(err=>{
        console.log(err)
    })
  })

router.get('/events/by/:userId',requireLogin,(req,res)=>{
    Event.find({hostedBy:req.params.userId})
    .populate("hostedBy","_id name")
    .then(events=>{
        res.json({events})
    })
    .catch(err=>{
        console.log(err)
    })
  })


router.delete('/deleteevent/:eventId',requireLogin,(req,res)=>{
  Event.findOne({_id:req.params.eventId})
  .populate("hostedBy","_id")
  .exec((err,event)=>{
      if(err || !event){
          return res.status(422).json({error:err})
      }
      if(event.hostedBy._id.toString() === req.user._id.toString()){
            event.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
})

//Read
router.get('/eventCategories',requireLogin,(req, res) => {
    EventCategory.find()
      .then(categories => res.json(categories))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
//Create
router.post('/addEventCategory',requireLogin,(req, res) => {
const {name} = req.body 

const newEventCategory = new EventCategory({
    name
    });

newEventCategory.save()
    .then(() => res.json('EventCategory added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;