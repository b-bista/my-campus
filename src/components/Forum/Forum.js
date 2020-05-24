import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Card from './Card/Card.js';
import './Forum.css';

const Forum = () => {
  const [topics,setTopics] = useState([])
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
      fetch('http://localhost:3001/allforumtopics',{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .catch(err=>{
      console.log(err)})
      .then(result=>{
          console.log(result)
        
          setTopics(result)
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
                    topics.map(item=>{
                      return (
                        <div className="postcard">
                          <Link to ={"/forums/"+item._id}>
                          <div className="card">
                            
                        <p className="card-header-title">{item.title}</p>
                            
                            <div className="card-content">
                              <div className="content">
                                <br></br>
                                {item.description}
                                <hr></hr>
                              <p>Posts: {item.posts.length}</p>
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


export default Forum;





