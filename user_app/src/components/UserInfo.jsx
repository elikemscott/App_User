import React from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ name, email, gen, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id);
  };
  return (
    <div className="userInfo">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Gen: {gen}</p>
      <button className="buttons btn btn-danger btn-sm" id="removeUser" onClick={handleClick}>
        Remove User
      </button>
      <button className="buttons btn btn-primary btn-sm" id="editUser">
        <Link id="link" to={`/edit/${id}`}>
          <span className='edit-user'>Edit User</span> 
        </Link>
      </button> <hr/>
    </div>
  );
};

export default UserInfo;
