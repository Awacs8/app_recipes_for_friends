import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getId, getUserById, getAllUsers } from "../../services/auth_service";
// import UserChange from './UserChange'
import chef from "../../utils&assets/img/chef.jpg";

const Profile = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data);
    });

    const id = getId();

    getUserById(id).then((response) => {
      const user = response.data;
      setUser(user);
    });
  }, []);

  return (
    <>
      <h2>Zdravo {user.username}!</h2>
      <div className="profile">
        <div className="user">
          <img src={chef} alt="user" />
          <div>
            <label>Info o tebi:</label>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>Kontakt: {user.email}</p>
            <Link to="/saved">
              <p>Sačuvani recepti</p>
            </Link>
            {/* <button onClick={UserChange}>izmeni podatke</button> */}
          </div>
        </div>
        <div className="user-list">
          <label>Ostatak ekipe:</label>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.first_name} {user.last_name} kao {user.username}
                <br />
                Kontakt: {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
