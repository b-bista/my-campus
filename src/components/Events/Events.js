import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Events  = ()=>{
    const [events,setEvents] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{
       fetch('http://localhost:3001/allevents',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .catch(err=>{
        console.log(err)})
       .then(result=>{
           console.log(result)
         
            setEvents(result)
       })
    },[])


   return (
    <div className="Events">
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-one-fifth">
            <div className="card">
              <div className="card-content">
                <label className="label" style={{fontSize: "14px"}}>Filter by</label>
                <hr></hr>
                <label className="label" style={{fontSize: "12px"}}>Date</label>
                <div className="container">
                  <label className="label">From <input type="text" placeholder="mm/dd/yy" name="search"></input></label>
                  <label className="label is-left">To <input type="text" className ="is-right" placeholder="mm/dd/yy" name="search"></input></label>
                </div>
                <hr></hr>
                
                <label className="label" style={{fontSize: "12px"}}>Event Categories (Select all that apply).</label>
                <div className="columns">
                  <div className="column">
                    <label className="checkbox"><input type="checkbox"></input>Arts & Music</label>
                    <label className="checkbox"><input type="checkbox"></input>Service</label>
                    <label className="checkbox"><input type="checkbox"></input>Cultural</label>
                    <label className="checkbox"><input type="checkbox"></input>Business</label>
                    <label className="checkbox"><input type="checkbox"></input>Civic Engagement</label>
                    <label className="checkbox"><input type="checkbox"></input>Professional</label>
                    <label className="checkbox"><input type="checkbox"></input>Interpersonal</label>
                  </div>
                  <div className="column">
                    <label className="checkbox"><input type="checkbox"></input>Social</label>
                    <label className="checkbox"><input type="checkbox"></input>Spirituality</label>
                    <label className="checkbox"><input type="checkbox"></input>Learning</label>
                    <label className="checkbox"><input type="checkbox"></input>Interest Meeting</label>
                    <label className="checkbox"><input type="checkbox"></input>Professional</label>
                    <label className="checkbox"><input type="checkbox"></input>Intercultural</label>
                  </div>
                </div>

                <hr></hr>

                <label className="label" style={{fontSize: "12px"}}>Club Name</label>
                <input type="text" placeholder="Search..." name="search"></input>

              </div>
            </div>
          </div>
          <div className="column is-three-fifths">
            <div className="card is-paddingless">
              <div className="card-content">
                <h1 className="has-text-centered" style={{fontSize: "2vw"}}>Search Current On-Campus Events</h1>
                <div className="container">
                  {
                    events.map(item=>{
                      return (
                        <div className="EventTile">
                          <Link to={"/events/"+item._id}>
                          <div className="card">
                            <div className="media" style={{padding: "20px"}}>
                              <div className="media-content">
                                <p style={{fontSize: "1vw"}}>{item.name}</p>
                                <p style={{fontSize: ".6vw"}}>From {item.from} To {item.to}</p>
                                <p style={{fontSize: ".6vw"}}>{item.location}</p>
                                <p style={{fontSize: ".7vw"}}>{item.description}</p>
                                <div className="container" style={{position: "relative"}}>
                                  <figure class="image is-24x24" style={{float: "left"}} >
                                  <img src={item.hostedBy.photo}></img>
                                  </figure>
                                  <p style={{fontSize: ".7vw", left: "40px"}}>Hosted by: <Link to={"/orgs/"+item.hostedBy._id}>{item.hostedBy.name}</Link></p>
                                </div>
                              </div>
                              <div className="media-right">
                                <div>
                                  <figure class="image is-square is-128x128">
                                    <img src={item.photo}></img>
                                  </figure>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          </Link>
                        </div>
                      )
                    }) 
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="column"></div>

        </div>
      </section>
    </div>
  </div>
);
}

export default Events