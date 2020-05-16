import React, { useState } from 'react';
// // import {useHistory} from 'react-router-dom';
import {registerUser} from './../../services/auth_service';

export const Register=()=>{
    const [first_name,setName]=useState('');
    const [last_name,setSurname]=useState('');
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setConfirmPass]=useState('');

    // const history=useHistory();

    let user={
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password,
        email: email
    }
    

    const handleClick = () => {
        if(first_name.trim()==='' || last_name.trim()==='' || username.trim()==='' || 
        password.trim()==='' || confirmPass.trim==='' || email.trim()===''){
            window.confirm("Fill out all fields");
            return;}
        if(password !== confirmPass){
            window.alert('Porvtdi lozinku!')
            return;
        }
        else{
            registerUser(user).then(() => {
                    console.log('uspesno!')
             })
        }
    }
    return(
        <div className="form">
            <label>FirstName:</label><br/>
            <input  type="text" onInput={(e)=>setName(e.target.value)}></input><br/>
            <label>LastName:</label><br/>
            <input  type="text" onInput={(e)=>setSurname(e.target.value)}></input><br/>
            <label>Email:</label><br/>
            <input  type="email" onInput={(e)=>setEmail(e.target.value)}></input><br/>
            <label>Username:</label><br/>
            <input type="text" onInput={(e)=>setUsername(e.target.value)}></input><br/>
            <label>Password:</label><br/>
            <input type="password" onInput={(e)=>setPassword(e.target.value)}></input><br/>
            <label>Confirm password:</label><br/>
            <input type="password" onInput={(e)=>setConfirmPass(e.target.value)}></input><br/>
            <button onClick={handleClick}>SignUp</button>
        </div>
    )
}