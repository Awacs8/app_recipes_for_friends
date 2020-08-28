import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser, logIn, setToken, setId } from './../../services/auth_service'

export const Register = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')

    const history = useHistory();

    let user = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password
    }


    const handleClick = () => {
        if (first_name.trim() === '' || last_name.trim() === '' || email.trim() === ''
            || username.trim() === '' || password.trim() === '' || confirmPass.trim === '') {
            setError('Popuni sva polja')
            return;
        }
        if (password !== confirmPass) {
            setError('potvrdi lozinku')
            return
        }
        else {
            registerUser(user).then(() => {

                logIn(username, password).then(res => {
                    setToken(res.data.token)
                    setId(res.data.user.id)
                    history.push('/')
                    window.location.reload()
                })
            })
        }
    }
    return (
        <div className="form">
            <label>Ime:</label><br />
            <input type="text" onInput={(e) => setFirst_name(e.target.value)}></input><br />
            <label>Prezime:</label><br />
            <input type="text" onInput={(e) => setLast_name(e.target.value)}></input><br />
            <label>Email:</label><br />
            <input type="email" onInput={(e) => setEmail(e.target.value)}></input><br />
            <label>Username:</label><br />
            <input type="text" onInput={(e) => setUsername(e.target.value)}></input><br />
            <label>Password:</label><br />
            <input type="password" onInput={(e) => setPassword(e.target.value)}></input><br />
            <label>Potvrdi password:</label><br />
            <input type="password" onInput={(e) => setConfirmPass(e.target.value)}></input><br />
            <span>{`${error}`}</span>
            <button onClick={handleClick}>SignUp</button>
        </div>
    )
}