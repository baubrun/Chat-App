import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let currentUserMsg = false;
  const givenName = name.trim().toLowerCase();

  if (user === givenName) {
    currentUserMsg = true;
  }

  return currentUserMsg ? (
    <div className="msg-container msg-right">
      <p className="msg-sent pr-10">{givenName}</p>
      <div className="msg-bubble current-user">
        <p className="msg-text msg-current-color">{text}</p>
      </div>
    </div>
  ) : (
    <div className="msg-container msg-left">
      <div className="msg-bubble other-user">
        <p className="msg-text msg-other-color">{text}</p>
      </div>
      <p className="msg-sent pl-10">{user}</p>
    </div>
  );
};

export default Message;
