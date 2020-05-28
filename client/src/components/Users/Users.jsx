import React from "react";
import "./Users.css"
import PropTypes from "prop-types";



const Users = ({ users }) => {
  return (
    <div className="sidebar">
      {users ? (
        <div>
          <div className="sidebar-content">
            <i className="fas fa-user-friends fa-3x users-icon"></i>
            <div>
              <h2>
                {users.map(({ name }) => (
                  <div key={name}>{name}</div>
                ))}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Users.propTypes = {
  name: PropTypes.array
}

export default Users;
