import React from 'react'
import '../../App.css'

const Navbar = () =>{
    return(
        <>
        <ul className = 'nav_bar'>
            <li className = 'nav_item'>svi recepti</li>
            <ul>
                <li>Supe/corbe</li>
                <li>Namazi</li>
                <li>Testa/pite</li>
                <li>Glavna jela</li>
                <li>Dezerti</li>
            </ul>
            <li className = 'nav_item'>dodaj recept</li>
            <li className = 'nav_item'>tvoj profil</li>
            <li className = 'nav_item'>saveti</li>
        </ul>

<div className = 'recipe'>
<p>Naziv recepta:</p>
<p>Tezina:Lako/Sredenje/Tesko</p>
<p>Vreme pripreme:</p>
<ul>Sastojci:
    <li>Sastojak: Kolicina: Jedinica mere:</li>
    <li>Sastojak: Kolicina: Jedinica mere:</li>
    <li>Sastojak: Kolicina: Jedinica mere:</li>
    <li>Sastojak: Kolicina: Jedinica mere:</li>
</ul>
<ul>Nacin pripreme:
    <li>Korak 1</li>
    <li>Korak 2</li>
    <li>Korak 3</li>
</ul>

</div>
</>
    )
}
export default Navbar;