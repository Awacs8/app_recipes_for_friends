import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {logIn,setToken,setId} from '../../services/auth_service';

export const LogIn=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError]=useState ('');
//     const history = useHistory();
//     const handleClick = () => {
//         if(username.trim()==='' || 
//         password.trim()===''){
//             setError("Fill out all fields");
//       return;
//         }
//         else{
//             logIn(username,password).then(res => {
//                 setToken(res.data.token);
//                 setId(res.data.user.user_id);
//                 history.push('/main');
//                 setError('')
//                 }) 
//             } 
//   }

    return(
        <div className="form">
            <label>Username:</label><br/>
            <input type="text" onInput={(e)=>{e.preventDefault();
                               setUsername(e.target.value)}}/><br/>
            <label>Password:</label><br/>
            <input type="password" onInput={(e)=>{e.preventDefault();
                               setPassword(e.target.value)}}/><br/>
                               <p>{`${error}`}</p>
            <button>LogIn</button><br/>
            <p>Nemaš nalog? Registruj ga ovde</p>
            {/* <Link to="register" className="button">SignUp</Link> */}
        </div>

    )
}