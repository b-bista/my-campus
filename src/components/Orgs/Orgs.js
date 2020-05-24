import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Orgs  = ()=>{
    const [orgs,setOrgs] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{
       fetch('http://localhost:3001/allorgs',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .catch(err=>{
        console.log(err)})
       .then(result=>{
           console.log(result)
         
            setOrgs(result)
       })
    },[])


   return (
   <div className="container">
   <div className="container">
     <section className="section">
       <div className="columns is-centered">
         <div className="column is-one-fifth">
           <div className="card">
             <div className="card-content">
               <label className="label" style={{fontSize: "14px"}}>Filter by</label>
               <hr></hr>
               <label className="label" style={{fontSize: "12px"}}>Club Name</label>
               <input type="text" placeholder="Search..." name="search"></input>
               <hr></hr>
               
               <label className="label" style={{fontSize: "12px"}}>Org Categories (Select all that apply).</label>
               <div className="columns">
                 <div className="column">
                   <label className="checkbox"><input type="checkbox"></input>Academic</label>
                   <label className="checkbox"><input type="checkbox"></input>Cultural/Identity</label>
                   <label className="checkbox"><input type="checkbox"></input>Department</label>
                   <label className="checkbox"><input type="checkbox"></input>Graduate</label>
                   <label className="checkbox"><input type="checkbox"></input>Greek</label>
                   <label className="checkbox"><input type="checkbox"></input>Honor</label>
                   <label className="checkbox"><input type="checkbox"></input>Media</label>
                   <label className="checkbox"><input type="checkbox"></input>Multi-Faith</label>
                 </div>
                 <div className="column">
                   <label className="checkbox"><input type="checkbox"></input>Performance</label>
                   <label className="checkbox"><input type="checkbox"></input>Pre-Professional</label>
                   <label className="checkbox"><input type="checkbox"></input>Recreational</label>
                   <label className="checkbox"><input type="checkbox"></input>Residence Hall</label>
                   <label className="checkbox"><input type="checkbox"></input>Service</label>
                   <label className="checkbox"><input type="checkbox"></input>Special Interest</label>
                   <label className="checkbox"><input type="checkbox"></input>Student</label>
                   <label className="checkbox"><input type="checkbox"></input>Governance</label>
                 </div>
               </div>

             </div>
           </div>
         </div>
         <div className="column is-three-fifths">
           <div className="card is-paddingless">
             <div className="card-content">
               {
                 console.log(orgs)
               }
               <h1 style={{fontSize: "2vw"}} className="has-text-centered">Search Current On-Campus Orgs</h1>
               <div className="container">
                {
                  orgs.map(item=>{
                    return (
                      <div style={{padding: "10px 0 20px 0"}} className="OrgTile">
                      {<Link to={"/orgs/"+item.userId}>
                      <div className="card">
                        <div className="media" style={{padding: "20px"}}>
                              <div className="media-left">
                                  <figure class="image is-96x96">
                                  <img src={item.photo}></img>
                                  </figure>
                              </div>
                              <div className="media-content">
                    <p style={{fontSize: "1vw"}}>{item.name}</p>
                                  <p style={{fontSize: ".7vw"}}>{item.about}</p>
                              </div> 
                        </div>
                      </div>
                      </Link>}
                      </div>
                    )
                  })
                }
              
               


               </div>
             </div>
           </div>
         </div>

       </div>
     </section>
   </div>
 </div>
 )
}


export default Orgs