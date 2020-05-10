import React, { useState } from 'react';
// // import {useHistory} from 'react-router-dom';
// import {registerUser, logIn, setToken, setId} from '../../../services/auth_service';

export const Register=()=>{
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setConfirmPass]=useState('');

    // const history=useHistory();

    let user={
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email
    }
    

    // const handleClick = () => {
    //     if(name.trim()==='' || surname.trim()==='' || username.trim()==='' || 
    //     password.trim()==='' || confirmPass.trim()==='' || email.trim()===''){
    //         window.confirm("Fill out all fields");
    //         return;}
    //     if(password !== confirmPass){
    //         window.alert('Confirm password')
    //         return;
    //     }
    //     else{
    //         registerUser(user).then(() => {
    //             logIn(username,password).then(res => {
    //                 setToken(res.data.token);
    //                 setId(res.data.user.user_id);
    //                 history.push('/main');
    //             }) 
    //          })
    //     }
    // }
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
            {/* <button onClick={handleClick}>SignUp</button> */}
        </div>
    )
}