import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logIn, setToken, setId } from "../../services/auth_service";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleClick = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Popuni sva polja");
      return;
    } else {
      logIn(username, password)
        .then((res) => {
          setToken(res.data.token);
          setId(res.data.user.id);
          history.push("/");
          setError("");
          window.location.reload();
        })
        .catch(() => {
          setError("pogresan username ili password");
        });
    }
  };

  return (
    <div id="login">
      <label>Username:</label>
      <br />
      <input
        type="text"
        onInput={(e) => {
          e.preventDefault();
          setUsername(e.target.value);
        }}
      />
      <br />
      <label>Password:</label>
      <br />
      <input
        type="password"
        onInput={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
      <br />
      <span>{`${error}`}</span>
      <button onClick={handleClick}>LogIn</button>
      <br />
    </div>
  );
};
