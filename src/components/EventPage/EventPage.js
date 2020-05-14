import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
const EventPage  = ()=>{
    const [eventProfile,setProfile] = useState(null)
    
    const {state,dispatch} = useContext(UserContext)
    const {eventid} = useParams()
    useEffect(()=>{
       fetch(`http://localhost:6000/events/${eventid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           //console.log(result)
         
            setProfile(result)
       })
    },[])
    
    
   return (
     <>{eventProfile ?

      <div style={{paddingTop: "20px"}}className="EventPage">
      <div className="container">
        <section className="section">
          <div className="columns is-centered">
            
            <div className="column is-three-fifths">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="">{eventProfile.events.name}</p>
                      <p className=""><small>From: {eventProfile.events.from} To: {eventProfile.events.to} </small></p>
                      <p className=""><small>Address: {eventProfile.events.location}</small></p>
                    </div>

                    <div className="media-right">
                      <button className="button is-rounded is-small">Going ({eventProfile.events.going.length})</button><button className="button is-rounded is-small">Interested ({eventProfile.events.going.length})</button>
                    </div>
                  </div>

                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={eventProfile.events.photo} alt="Placeholder image"></img>
                    </figure>
                  </div>

                  <div style={{padding: "10px 0 20px 0"}}>
                    <p className="post-content">{eventProfile.events.description}</p>
                  </div>
                  

                  <p>Event Categories:</p>
                  {
                    eventProfile.events.categories.map(item=>{
                      {
                        if(item.name){
                          return (
                            <span className="button is-static is-rounded is-small">{item.name}</span>
                          )
                        }
                        else
                          return (<p>No tags</p>)

                      }
                      
                    })
                  }


                </div>
              </div>
            </div>

            <div className="column is-one-fifth">
              <div className="card is-paddingless">
                <div className="card-content">
                  <p className="has-text-centered is-medium">Hosted by:</p>

                  <div style={{padding: "20px 0 20px 0"}}>
                    <p style={{paddingBottom: "10px"}} className="has-text-centered">{eventProfile.events.hostedBy.name}</p>
                    <div className="card-image">
                      <figure className="image is-128x128" style={{margin: "auto"}}>
                        <img className="is-rounded" src={eventProfile.events.hostedBy.photo}></img>
                      </figure>
                    </div>
                  </div>
                    

                  <div class="has-text-centered">
                    <Link to={"/orgs/"+eventProfile.events.hostedBy._id}>
                      <button className="button is-rounded has-text-centered" style={{margin: "auto"}}>View full profile</button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>

  : <h2>Loading!</h2>}
    
    
  </>
   );
}


export default EventPage