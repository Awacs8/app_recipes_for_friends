import React from "react";

const UserChange = () => {
  return (
    <div>
      <label>izmeni email: </label>
      <input type="text" />
      <label>izmeni sifru: </label>
      <input type="password" />
      <label>potvrdi sifru: </label>
      <input type="password" />
    </div>
  );
};

export default UserChange;
