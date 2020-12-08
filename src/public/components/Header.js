import React from "react";
import "../../App.css";
import { LogIn } from "./LogIn";
import LogOut from "../../private/components/LogOut";
import { isLogIn } from "../../services/auth_service";

export const Header = () => {
  return (
    <div className="header">
      <h1 style={{ width: isLogIn() ? "80%" : "30%" }}>
        RECEPTI ZA PRIJATELJE
      </h1>
      {isLogIn() ? <LogOut /> : <LogIn />}
    </div>
  );
};
