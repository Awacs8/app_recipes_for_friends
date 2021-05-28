import React from "react";
import { Link } from "react-router-dom";
import { isLogIn } from "../../services/auth_service";
import LogOut from "../components/LogOut";

const Navbar = () => {
  return (
    // <div style={{ display: isLogIn() ? "block" : "none" }}>
    <>
      <ul className="nav_bar">
        <Link to="/main" className="nav_item">
          <li>svi recepti</li>
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
        {isLogIn() ? (
          <Link className="nav_item" to="/welcome">
            <LogOut />
          </Link>
        ) : null}
      </ul>
    </>
  );
};
export default Navbar;
