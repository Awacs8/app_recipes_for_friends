import React from "react";
import "../../App.css";
import LogOut from "../../private/components/LogOut";
import { isLogIn } from "../../services/auth_service";

export const Header = () => {
  return (
    <div className="header">
      <h1>RECEPTI ZA PRIJATELJE</h1>
      {isLogIn() ? <LogOut /> : null}
    </div>
  );
};
