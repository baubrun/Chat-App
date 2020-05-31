import React, { useState } from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import "./JoinChat.css";
import { FormInput } from "../FormInput";
import { useHistory } from "react-router-dom";

const JoinChat = () => {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    if (!chatRoom || !name) {
      return event.preventDefault();
    } else {
      history.push(`/chat?name=${name}&chatRoom=${chatRoom}`);
    }
  };

  return (
    <div className="join-chat-container">
      <Title id="join-chat-title" text="ON PARLE" />
      <form className="join-chat-form" onSubmit={handleSubmit}>
        <FormInput
          id="form-input"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Username"
          type="text"
          value={name}
        />
        <FormInput
          id="form-input"
          name="chatRoom"
          onChange={(event) => setChatRoom(event.target.value)}
          placeholder="Chat Room"
          type="text"
          value={chatRoom}
        />
        <Button type="submit" value="Join Chat" />
      </form>
    </div>
  );
};

export default JoinChat;
