import React from "react";
import "../../App.css";
import LogOut from "../../private/components/LogOut";
import { isLogIn } from "../../services/auth_service";

export const Header = () => {
  return (
    <header>
      <h1>RECEPTI ZA PRIJATELJE</h1>
      {isLogIn() ? <LogOut /> : null}
    </header>
  );
};
