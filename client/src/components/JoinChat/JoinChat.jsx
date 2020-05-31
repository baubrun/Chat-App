import React, { useState } from "react";
import {Title} from "../Title"
import "./JoinChat.css"
import {Form} from "../Form"

const JoinChat = () => {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  console.log(name, chatRoom);

  return (
    <div className="join-chat-container">
      <Title id="join-chat-title" text="ON PARLE"/>
      <Form 
      input1={name}
      input2={chatRoom}
      pHolder1="Name"
      pHolder2="Chat Room"
      setState1={setName}
      setState2={setChatRoom}
      text="Join Chat"
      />


      {/* <form className="join-chat">
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
      </form> */}
      
    </div>
  );
};

export default JoinChat;
