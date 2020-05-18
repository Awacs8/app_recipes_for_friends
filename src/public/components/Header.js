import React from 'react'
import '../../App.css'
import { LogIn } from './LogIn'
import LogOut from '../../private/components/LogOut'
import {isLogIn} from '../../services/auth_service'
// import Navbar from '../../private/components/Navbar'


export const Header=()=>{
    return(
        <div className = "header">
        <h1>RECEPTI ZA PRIJATELJE</h1>
        {isLogIn() ? 
        <LogOut /> :
        <LogIn />}
        </div>
    )
}
    