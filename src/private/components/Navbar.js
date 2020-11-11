import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <ul className="nav_bar">
        <Link to="/main" className="nav_item">
          <li>početna</li>
        </Link>
        <Link to="/tips" className="nav_item">
          <li>saveti</li>
        </Link>
        <Link to="/addrecipe" className="nav_item">
          <li>dodaj recept</li>
        </Link>
        <Link to="/profile" className="nav_item">
          <li>tvoj profil</li>
        </Link>
      </ul>
    </>
  );
};
export default Navbar;
