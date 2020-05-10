import React from 'react';
import '../../App.css'

const Recipe=()=>{
    return(
        <div className = "recipe">
            <p>Naziv recepta:</p>
            <p>Tezina:Lako/Srednje/Tesko</p>
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
    )
}
export default Recipe;







