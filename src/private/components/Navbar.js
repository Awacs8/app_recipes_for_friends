import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

const Navbar = () =>{
    return(
        <>
        <ul className = 'nav_bar'>
            <li className = 'nav_item'>
                <Link to="/main"> svi recepti</Link>
            </li>
            {/* <ul>
                <li>Namazi</li>
                <li>Testa/pite</li>
                <li>Glavna jela</li>
                <li>Dezerti</li>
            </ul> */}
            <li className = 'nav_item'>
                <Link to='/addrecipe'>dodaj recept</Link>
            </li>
            <li className = 'nav_item'>
                <Link to='/profile'>tvoj profil</Link></li>
            <li className = 'nav_item'>saveti</li>
        </ul>
</>
    )
}
export default Navbar;