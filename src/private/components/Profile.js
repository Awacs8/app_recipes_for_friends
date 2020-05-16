import React, { useState,useEffect } from 'react'
import {getAllUsers} from '../../services/auth_service'

const Profile = () =>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getAllUsers().then(response =>{
          console.log(response.data)
          setUsers(response.data)
        })
      },[])
    return(
        <div>
            <h2>Zdravo </h2>
            <ul>
                {users.map(user=><li key={user.id}>{user.username}</li>)}
            </ul>

        </div>
    )
}
export default Profile