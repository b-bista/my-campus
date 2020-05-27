import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './ForumList.css';

const ForumList = () => {
  const [posts,setPosts] = useState([])
  const {state,dispatch} = useContext(UserContext)
  const {topicid} = useParams()


  useEffect(()=>{
      fetch(`http://localhost:3001/allforumposts/${topicid}`,{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
      }).then(res=>res.json())
      .catch(err=>{
      console.log(err)})
      .then(result=>{
          console.log(result)
        
          setPosts(result)
      })
  },[])

  return (
    <div className="forum">
  
    <section className="section">
          <div className="card is-paddingless">
            <div className="card-content">
              <h1 className="subtitle is-4"> MyCampus Forums</h1>
              <div className="container">
                  {
                    posts.forumPost &&
                    posts.forumPost.map(item=>{
                      return (
                        <div className="postcard">
                          <Link to ={"/forumpost/"+item._id}>
                          <div className="card">
                            
                        <p className="card-header-title">{item.title}</p>
                            
                            <div className="card-content">
                              <div className="content">
                                <br></br>
                                {item.description}
                                <hr></hr>
                              <p>Comments: {item.comments.length}</p>
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
    </section>
    </div>
  )
  
  
}


export default ForumList;





