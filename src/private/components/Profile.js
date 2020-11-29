import React, { useState, useEffect } from "react";
import { getId, getUserById, getAllUsers } from "../../services/auth_service";
// import UserChange from './UserChange'
import chef from "../../utils/img/chef.jpg";

const Profile = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((response) => {
      //   console.log(response.data)
      setUsers(response.data);
    });
    const id = getId();
    getUserById(id).then((response) => {
      const user = response.data;
      setUser(user);
      // console.log(user)
    });
  }, []);

  return (
    <div className="profile">
      <h2>Zdravo {user.username}!</h2>
      <div className="user">
        <img src={chef} alt="user" />
        <div>
          <label>Info o tebi:</label>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>Kontakt: {user.email}</p>
          {/* <button onClick={UserChange}>izmeni podatke</button> */}
        </div>
      </div>
      <div className="user-list">
        <label>Ostatak ekipe:</label>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name} kao {user.username}
              <br />
              Kontakt: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Profile;
