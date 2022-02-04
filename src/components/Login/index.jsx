import React, { useState, useContext } from "react";
import LoginFormContainer, { Wird, DivPass, DivCenter, H3Login, InputSubmit, Form, FormInput, H1Login, DivTxtField, FormLabel, Span } from "./login.styles"
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

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   if (name === "username") {
  //     setUsername(value);
  //   } else if (name === "password") {
  //     setPassword(value);
  //   }
  // }

  const handleChangeUsername =(e)=>{
    setUsername(e.target.value)
    // console.log(e.target.value);
  }
  const handleChangePassowrd =(e)=>{
    setPassword(e.target.value)
  }
  return (
    <LoginFormContainer>
      <DivCenter>

        <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login>
        <H3Login>تسجيل الدخول</H3Login>

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <Span />
            <FormInput onChange={handleChangeUsername} type="text" placeholder='أسم المستخدم' required />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput onChange={handleChangePassowrd} placeholder='كلمة المرور' type="passowrd" required />
          </DivTxtField>

          <DivPass>هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني</DivPass>
          <InputSubmit type="submit" value='login' >تسجيل الدخول</InputSubmit>

        </Form>
      </DivCenter>
     </LoginFormContainer>
  );
}
