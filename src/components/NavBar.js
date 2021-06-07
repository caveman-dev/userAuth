import React from 'react'
import {Link,Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NoteContainer from './notes-components/NoteContainer'

const NavBar=(props)=>{
    const {userLoggedIn,handleAuth}=props
    return(
        <div>
         <ul>
      <li><Link to='/'>Home</Link></li>
      {
          userLoggedIn?(
              <>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/note">My Notes</Link></li>
              <li><Link onClick={()=>{
                  localStorage.removeItem('token')
                  alert ('successfully logged out')
                  handleAuth( )
                  props.history.push('/')
              }}>Logout </Link></li>
              </>
          ):(
            <>
            <li><Link to='/Register'>Register</Link></li>
            <li><Link to='/Login'>Login</Link></li>
            </>
          )
      }
     
    </ul>
    <Route path='/' component={Home} exact={true}></Route>
    <Route path='/Register' component={Register} ></Route>
    <Route path='/Login' render={(props)=>{
        return<Login
        {...props} //react dom sends additional props like history with this
        handleAuth={handleAuth}
        />
    }} ></Route>
    <Route path='/account' component={Account}></Route>
    <Route path='/note' component={NoteContainer}></Route>
        </div>
    )
}
export default withRouter(NavBar) 