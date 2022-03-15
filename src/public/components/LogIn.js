import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logIn, setToken, setId } from "../../services/auth_service";
import { Loader } from "./Loader";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Popuni sva polja!");
      return;
    } else {
      setLoading(true);
      logIn(username, password)
        .then((res) => {
          setToken(res.data.token);
          setId(res.data.user._id);
          history.push("/");
          setError("");
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          setError("Pogrešan username ili  password!");
          console.log(error);
        });
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form>
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
          <br />
          <button onClick={handleClick}>prijavi se</button>
          <br />
          <Link to="/register">
            <p>...ili kreiraj nalog</p>
          </Link>
        </form>
      )}
    </>
  );
};
