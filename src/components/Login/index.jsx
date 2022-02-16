import React, { useState, useContext, useEffect } from "react";
import LoginFormContainer, {
  Wird,
  DivPass,
  DivCenter,
  H3Login,
  InputSubmit,
  Form,
  FormInput,
  H1Login,
  DivTxtField,
  Span,
} from "./login.styles";
import { AdminContext } from "contexts/AdminContext";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

function Login(props) {
  let Navigate = useNavigate();
  const context = useContext(AdminContext);
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  useEffect(() => {
    console.log("inside the login useeffect");
    if (cookie.load("token")) {
      console.log("is logged in ");
      Navigate("/");
    }
  }, []);

  useEffect(() => {
    console.log("inside the listener of the cookie");
    if (cookie.load("token")) {
      Navigate("/");
    }
  }, [cookie.load("token")]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(context, username, password);
    context.login(username, password);
    e.target.reset();
    setTimeout(() => {
      Navigate("/");
    }, 1000);
  }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   if (name === "username") {
  //     setUsername(value);
  //   } else if (name === "password") {
  //     setPassword(value);
  //   }
  // }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassowrd = (e) => {
    setPassword(e.target.value);
  };
  return (
    <LoginFormContainer>
      <DivCenter>
        <H1Login>
          أهلا بك في موقع<Wird>وِرد</Wird>{" "}
        </H1Login>
        <H3Login>تسجيل الدخول</H3Login>

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <Span />
            <FormInput
              onChange={handleChangeUsername}
              type="text"
              placeholder="اسم المستخدم"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput
              onChange={handleChangePassowrd}
              placeholder="كلمة المرور"
              type="passowrd"
              required
            />
          </DivTxtField>

          <DivPass>
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </DivPass>
          <InputSubmit type="submit" value="login">
            تسجيل الدخول
          </InputSubmit>
        </Form>
      </DivCenter>
    </LoginFormContainer>
  );
}
export default Login;
