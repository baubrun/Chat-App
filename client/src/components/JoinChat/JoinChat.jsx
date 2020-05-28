import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinChat.css"
import {Title} from "../Title"


const JoinChat = () => {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");

  return (
    <div className="join-chat-container">
      <Title title="ON PARLE"/>
      <form className="join-chat">
        <div>
          <input
            className="join-chat"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <input
            className="join-chat mt-20"
            onChange={(event) => setChatRoom(event.target.value)}
            placeholder="Chat Room"
            type="text"
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
