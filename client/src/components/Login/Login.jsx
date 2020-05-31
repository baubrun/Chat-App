import React, { useState } from "react";
import { Title } from "../Title";
import { Form } from "../Form";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <Title id="login-title" text="Login" />
      <Form
        id="login-form"
        input1={username}
        input2={password}
        pHolder1="Username"
        pHolder2="Password"
        setState1={setUsername}
        setState2={setPassword}
        text="Login"
      />
    </div>
  );
};

export default Login;
