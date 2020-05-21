import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {logIn, setToken, setId} from '../../services/auth_service'

export const LogIn=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError]=useState ('')

    const history = useHistory()

    const handleClick = () => {
        if(username.trim()==='' || 
        password.trim()===''){
            setError("Popuni sva polja")
            return
        } else {
            logIn(username,password).then(res => {
                // console.log(res)
                setToken(res.data.token)
                setId(res.data.user.id)
                history.push('/main')
                setError('')
                // window.location.reload()   
            })
        } 
    }

    return(
        <div id="login">
            <label>Username:</label><br/>
            <input type="text" onInput={(e)=>{e.preventDefault();
                               setUsername(e.target.value)}}/><br/>
            <label>Password:</label><br/>
            <input type="password" onInput={(e)=>{e.preventDefault();
                               setPassword(e.target.value)}}/><br/>
                               <span>{`${error}`}</span>
            <button onClick={handleClick}>LogIn</button><br/>
        </div>

    )
}