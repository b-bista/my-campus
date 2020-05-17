import React,{useEffect,createContext,useReducer,useContext} from 'react'
import './App.css'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import {reducer,initialState} from './reducers/userReducer'
import SignIn from './components/SignIn/SignIn'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Forum from './components/Forum/Forum'
import ForumList from './components/ForumList/ForumList'
import Events from './components/Events/Events'
import EventPage from './components/EventPage/EventPage'
import OrgPage from './components/OrgPage/OrgPage'
import Orgs from './components/Orgs/Orgs'
export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/events/">
        <Events />
      </Route>
      <Route path="/events/:eventid">
        <EventPage />
      </Route>
      <Route path="/eventpage">
        <EventPage />
      </Route>
      <Route exact path="/orgs">
        <Orgs/>
      </Route>
      <Route path="/orgs/:orgid">
        <OrgPage/>
      </Route>
      <Route exact path="/forums">
        <Forum/>
      </Route>
      <Route path="/forums/:topicid">
        <ForumList/>
      </Route>
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Header />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
