import React, { useState } from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import "./JoinChat.css";
import { FormInput } from "../FormInput";
import {useHistory} from "react-router-dom"

const JoinChat = () => {
  // const [name, setName] = useState("");
  // const [chatRoom, setChatRoom] = useState("");
  let history = useHistory()
  const [form, setForm] = useState({
    name: "",
    chatRoom: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setForm({ ...form, ["name"]: "", ["chatRoom"]: "" });
    history.push(`/chat?name=${form.name}&chatRoom=${form.chatRoom}`);
  };

  return (
    <div className="join-chat-container">
      <Title id="join-chat-title" text="ON PARLE" />
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          // onChange={(event) => handleChange(event)}
          onChange={handleChange}
          placeholder="Username"
          type="text"
          value={form.name}
        />
        <FormInput
          name="chatRoom"
          onChange={handleChange}
          placeholder="Password"
          type="text"
          value={form.chatRoom}
        />
        <Button type="submit" value="Join Chat" />
      </form>
    </div>
  );
};

export default JoinChat;
