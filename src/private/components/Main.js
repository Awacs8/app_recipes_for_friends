import React, { useState, useEffect } from 'react';
// import {getUserById,getId} from '../../services/auth_service';

import { getAllUsers } from "../../services/auth_service";

const Main=()=>{
    // const [user,setUser]=useState([]);
    const [users, setUsers] = useState([]);
    
    
  
    useEffect(() => {
      getAllUsers().then(res => {
          console.log(users)
        setUsers(res.data.users);
      });
    }, [users]);

// useEffect(()=>{
//     let id=getId();
//     getUserById(id).then(res =>{
//         setUser(res.data.user);
//     });
// },[])
// console.log(user)

    return(
    
        <div>
            <div className="profile">
            <h2>{users.username} profile</h2>
            <div>
                <img src="icon.png" className="image" alt="logo"/>
            </div>
            <div>
                <label><b>First Name:</b> {users.first_name}</label><br/>
                <label><b>Last Name:</b> {users.last_name}</label><br/>
                <label><b>Email:</b> {users.email}</label><br/>
            </div>
            </div>
            <div>
            <h2>Other beerlovers:</h2>
          
            </div>
            </div>
    )
}

export default Main;