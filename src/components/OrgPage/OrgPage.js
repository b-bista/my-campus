import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
const OrgPage  = ()=>{
    const [userProfile,setProfile] = useState(null)
    
    const {state,dispatch} = useContext(UserContext)
    const {orgid} = useParams()
    //const [showfollow,setShowFollow] = useState(state?!state.following.includes(orgid):true)
    useEffect(()=>{
       fetch(`http://localhost:6000/users/${orgid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           //console.log(result)
         
            setProfile(result)
       })
    },[])


    /*const followUser = ()=>{
        fetch('http://localhost:6000/follow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                followId:orgid
            })
        }).then(res=>res.json())
        .then(data=>{
        
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))
             setProfile((prevState)=>{
                 return {
                     ...prevState,
                     user:{
                         ...prevState.user,
                         followers:[...prevState.user.followers,data._id]
                        }
                 }
             })
             setShowFollow(false)
        })
    }
    const unfollowUser = ()=>{
        fetch('http://localhost:6000/unfollow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                unfollowId:orgid
            })
        }).then(res=>res.json())
        .then(data=>{
            
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))
            
             setProfile((prevState)=>{
                const newFollower = prevState.user.followers.filter(item=>item != data._id )
                 return {
                     ...prevState,
                     user:{
                         ...prevState.user,
                         followers:newFollower
                        }
                 }
             })
             setShowFollow(true)
             
        })
    }*/
   return (
     <>{userProfile ?

      <div className="OrgPage">
        <div className="container">
          <section className="section">

            <div className="columns is-centered is-multiline">
              <div className="column is-one-quarter">
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <a><p className="has-text-centered">{userProfile.user.name}</p></a>
                      <div className="card-image">
                        <figure className="image is-128x128" style={{margin: "auto"}}>
                          <img className="is-rounded" src={userProfile.user.photo}></img>
                        </figure>
                      </div>
                      <br/>
                      {/*showfollow?
                        <button className="button is-rounded is-small is-fullwidth is-link"
                          onClick={()=>followUser()}>
                          Follow
                        </button>
                          : 
                        <button
                          className="button is-rounded is-small is-fullwidth is-link"
                          onClick={()=>unfollowUser()}>
                          Unfollow
                        </button> */
                      }
                      <br/>
                      <div class="has-text-weight-bold is-uppercase">
                        <p>About</p>
                      </div>
                      <br/>
                      <div class="has-text is-size-7">
                      {userProfile.user.about}
                      </div>
                      <hr></hr>
                      <div class="has-text-weight-bold is-uppercase">
                        <p>Contact Information</p>
                      </div>
                      <div class="has-text is-size-7">
                        <p>Email:</p>
                        <p>Club Suite Location:</p>
                        <p>Meeting Location:</p>
                        <p>Meeting Time:</p>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <div className="column is-paddingless">
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <div class="has-text-weight-bold is-uppercase">
                        <p>Upcoming Events</p>
                      </div>
                      <br></br>
                      The Organization's events go here
                    </div>
                  </div>
                </div>
                </div>

              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                      <figure className="image is-3by1">
                        <img src={userProfile.user.banner}></img>
                      </figure>
                  </div>
                  </div>
                <br/>
                <div className="column is-paddingless">
                  {
                    userProfile.posts.map(item=>{
                        return(
                          <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                        )
                    })
                  }
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

  : <h2>Loading!</h2>}
    
    
  </>
   )
}


export default OrgPage