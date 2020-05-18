import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import Header from "./Header";
import UserInput from "./UserInput";
import Messages from "./Messages";
import Users from "./Users";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = "localhost:4000";
  const location = useLocation();

  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();

  useEffect(() => {
    const name = query.get("name");
    const chatRoom = query.get("chatRoom");
    socket = io(ENDPOINT);

    setName(name);
    setChatRoom(chatRoom);

    socket.emit("joinChat", { name, chatRoom }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.close();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("chatRoomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="chat-container">
      <div className="app-title">ON PARLE</div>
      <div className="container">
        <Header chatRoom={chatRoom} />
        <div className="main">
          <Users users={users} />
          <Messages messages={messages} name={name} />
        </div>
        <UserInput
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
