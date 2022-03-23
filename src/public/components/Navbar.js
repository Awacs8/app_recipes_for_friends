import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLogIn } from "../../services/auth_service";
import LogOut from "../../private/components/LogOut";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChange = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return (
    <>
      <button
        className={expanded ? "menu-btn btn-close" : "menu-btn"}
        type="button"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="menu-btn-line"></div>
        <div className="menu-btn-line"></div>
        <div className="menu-btn-line"></div>
      </button>
      {(expanded || screenWidth > 768) && (
        <ul className="nav_bar" onClick={() => setExpanded(false)}>
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
          {isLogIn() && (
            <Link className="nav_item" to="/welcome">
              <LogOut />
            </Link>
          )}
        </ul>
      )}
    </>
  );
};
export default Navbar;
