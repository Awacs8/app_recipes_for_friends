import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <ul className="nav_bar">
        <Link to="/main">
          <li className="nav_item">početna</li>
        </Link>
        {/* <ul>
                    <li>Supe/čorbe</li>
                    <li>Namazi</li>
                    <li>Testa/pite</li>
                    <li>Glavna jela</li>
                    <li>Dezerti</li>
                </ul>   */}
        <Link to="/tips">
          <li className="nav_item">saveti</li>
        </Link>
        <Link to="/addrecipe">
          <li className="nav_item">dodaj recept</li>
        </Link>
        <Link to="/profile">
          <li className="nav_item">tvoj profil</li>
        </Link>
      </ul>
    </>
  );
};
export default Navbar;
