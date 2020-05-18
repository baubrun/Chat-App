import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((msg, idx) => (
        <div key={idx}>
          <Message message={msg} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
