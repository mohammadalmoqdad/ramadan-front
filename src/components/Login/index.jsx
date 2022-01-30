import React, { useState } from 'react';
import LoginFormContainer, { Form, FormInput } from "./login.styles"
import { useform } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function index() {

  // const

  function sendLogin(e) {
    e.preventDefault();

    const Login = {
      "username": this.state.username,
      "password": this.state.password,
    }
    // console.log(Login)

    await axios({
      method: 'post',
      url: "https://ramadan-comp-rest.herokuapp.com/token/",
      data: JSON.stringify(Login),
      headers: {

        "Content-Type": "application/json"
      }
    }).then(res => {
      // console.log(res.data)
      if (res.data.access) {
        localStorage.setItem("admin", JSON.stringify(res.data));
      }
      return (res.data)
    })
  }


  return <LoginFormContainer>
    <Form>
      <FormInput type="text" placeholder='Username' />
      <FormInput type="passowrd" placeholder='Passowrd' />
    </Form>
  </LoginFormContainer>;
}
