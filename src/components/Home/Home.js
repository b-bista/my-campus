import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import './Post/Post.css';

const Home  = () =>{
  const [data,setData] = useState([])
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
     fetch('http://localhost:6000/allposts',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt")
         }
     }).then(res=>res.json())
     .then(result=>{
         console.log(result)
         setData(result)
     })
  },[])

  const likePost = (id)=>{
        fetch('http://localhost:6000/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
          console.log(result)
          const newData = data.map(item=>{
              if(item._id==result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }
  
  const unlikePost = (id)=>{
        fetch('http://localhost:6000/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
          //   console.log(result)
          const newData = data.map(item=>{
              if(item._id==result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
          console.log(err)
      })
  }

  const makeComment = (text,postId)=>{
        fetch('http://localhost:6000/comment',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.map(item=>{
              if(item._id==result._id){
                  return result
              }else{
                  return item
              }
           })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }

  const deletePost = (postid)=>{
      fetch(`http://localhost:6000/deletepost/${postid}`,{
          method:"delete",
          headers:{
              Authorization:"Bearer "+localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
          console.log(result)
          const newData = data.filter(item=>{
              return item._id !== result._id
          })
          setData(newData)
      })
  }
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <div className="columns is-centered">
          <div className="column is-two-fifths">
              {
                data.map(item=>{
                  return(
                      <div className="Post" key={item._id} style={{marginTop:"30px"}}>
                        <div className="post card">
                          <div className="card-content">
                            
                            <div class="media">
                              <div class="media-left">
                                <figure class="image is-48x48">
                                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
                                </figure>
                              </div>
                  
                              <div class="media-content">
                                <Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link>
                                <p class="date-time-posted is-paddingless"><small>Posted at {item.createdAt}</small></p>
                              </div>
                            </div>
                  
                            <p class="post-content">{item.body}</p>
                  
                            <div className="post-image card-image">
                              <figure className="image is-4by3">
                                <img src={item.photo} alt="Placeholder image"></img>
                              </figure>
                            </div>
                  
                            
                            <p className="post-like-count is-paddingless">{item.likes.length} likes</p>
                            <footer className="card-footer">
                              <a onClick={()=>{likePost(item._id)}} className="card-footer-item">Like<i class="fas fa-heart"></i></a>
                              <a to="" className="card-footer-item">Comment<i class="fas fa-comment-alt"></i></a>
                            </footer>
      
                            {
                              item.comments.map(record=>{
                                  return(
                                    <div className="Comment">
                                    <article class="media">
                                        <figure class="media-left">
                                          <p class="image is-32x32">
                                            <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                                          </p>
                                        </figure>
                                        <div class="media-content">
                                          <div class="content">
                                            <p>
                                              {record.postedBy._id}
                                              <br></br>
                                              {record.body}
                                              <br></br>
                                                <small>
                                                  Time posted
                                                </small>
                                            </p>
                                          </div>
                                        </div>
                                    </article>
                                </div>
                                  )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    
                )
              })
              }
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
