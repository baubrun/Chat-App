import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinChat = () => {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");

  return (
    <div className="join-chat-container">
      <h1 className="app-title">ON PARLE</h1>
      <form className="join-chat">
        <div>
          <input
            className="join-chat"
            id="name-input"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
        </div>
        <div>
          <input
            className="join-chat mt-20"
            id="chatRoom-input"
            onChange={(event) => setChatRoom(event.target.value)}
            placeholder="Chat Room"
            type="text"
            value={chatRoom}
          />
        </div>
        <Link
          onClick={(event) =>
            !chatRoom || !name ? event.preventDefault() : ""
          }
          to={`/chat?name=${name}&chatRoom=${chatRoom}`}
        >
          <button className="join-chat button mt-20" type="submit">
            Join Chat
          </button>
        </Link>
      </form>
    </div>
  );
};

export default JoinChat;
