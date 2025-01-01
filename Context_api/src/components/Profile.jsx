import React , {useContext}from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const{User} =useContext(UserContext)
    if (!User){
        return (<div>Please Login</div>)
    }
    else {
        return( <div>Welcome {User.username}</div>)
  }
}

export default Profile