import React from "react";
import { deleteUser } from "../../services/auth_service";
import { useHistory } from "react-router-dom";

const LogOut = () => {
  const history = useHistory();

  const handleClick = () => {
    deleteUser().then(() => {
      history.push("/");
      window.location.reload();
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Izloguj se</button>
    </div>
  );
};
export default LogOut;
