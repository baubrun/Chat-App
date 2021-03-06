import React from "react";
import "./UserInput.css"
import PropTypes from "prop-types";


const UserInput = ({ message, sendMessage, setMessage }) => {
  return (
    <form className="form">
      <input
        className="input"
        placeholder="Type here"
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : ""
        }
        type="text"
        value={message}
      />
      <button className="send-btn" onClick={(event) => sendMessage(event)}>
      <i className="far fa-share-square fa-3x"></i>
      </button>
    </form>
  );
};

UserInput.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func
}

export default UserInput;
