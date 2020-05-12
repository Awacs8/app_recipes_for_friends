import React from 'react'
import '../../App.css'

const Navbar = () =>{
    return(
        <>
        <ul className = 'nav_bar'>
            <li className = 'nav_item'>svi recepti</li>
            {/* <ul>
                <li>Namazi</li>
                <li>Testa/pite</li>
                <li>Glavna jela</li>
                <li>Dezerti</li>
            </ul> */}
            <li className = 'nav_item'>dodaj recept</li>
            <li className = 'nav_item'>tvoj profil</li>
            <li className = 'nav_item'>saveti</li>
        </ul>
</>
    )
}
export default Navbar;