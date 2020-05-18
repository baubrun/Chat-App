import React, { useState } from "react";

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
      <i class="far fa-share-square fa-3x"></i>
      </button>
    </form>
  );
};

export default UserInput;
