import React, { useState } from "react";
import { Title } from "../Title";
import { FormInput } from "../FormInput";
import "./Login.css";
import axios from "axios";
import { Button } from "../Button";
import {useHistory} from "react-router-dom"

const Login = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  let history = useHistory()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("username", form.username);
    data.append("password", form.password);
    // setUsername("");
    // setPassword("");
    // setForm({ ...form, ["username"]: "", ["password"]: "" });

    try {
      await axios.post({
        method: "post",
        url: "/",
        data,
      });
    } catch (error) {
      console.error(error);
    }
    history.push("/joinchat");

  };

    return (
      <div className="login-container">
        <Title id="login-title" text="Login" />
        {/* <form className="login-form" onSubmit={(event) => handleSubmit(event)}> */}
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            name="username"
            onChange={(event) => handleChange(event)}
            placeholder="Username"
            type="text"
            value={form.username}
          />
          <FormInput
            name="password"
            onChange={(event) => handleChange(event)}
            placeholder="Password"
            type="text"
            value={form.password}
          />
        <Button type="submit" value="Join Chat" />
        </form>
      </div>
    );
  };


export default Login;
