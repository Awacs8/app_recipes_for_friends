import React from 'react'
import '../../App.css'
import {LogIn} from './LogIn'
import Navbar from '../../private/components/Navbar'


export const Header=()=>{
    return(
        <div className = "header">
        <h1>RECEPTI ZA PRIJATELJE</h1>
        <LogIn />
        <Navbar />
        
        </div>
    )
}
    