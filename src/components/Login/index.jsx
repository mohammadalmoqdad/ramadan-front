import React, { useState, useContext } from "react";
import LoginFormContainer, { Form, FormInput } from "./login.styles";
import { useform } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "contexts/AdminContext";

export default function Login() {
  const context = useContext(AdminContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(context, username, password);
    context.login(username, password);
    e.target.reset();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <LoginFormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
        />
        <FormInput
          onChange={handleChange}
          type="passowrd"
          name="password"
          placeholder="Passowrd"
        />
        <button type="submit"> login </button>
      </Form>
    </LoginFormContainer>
  );
}
