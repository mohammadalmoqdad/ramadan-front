import React, { useState, useEffect } from "react";
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
import { useAdminContext } from "contexts/AdminContext";
import {useNavigate, useLocation} from "react-router-dom";
import cookie from "react-cookies";
import Loader from "../Loader";

function Login(props) {
  let Navigate = useNavigate();
  const context = useAdminContext();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loading, setloading] = useState(true); // note: to open loading comp when the function start
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // setloading(true); // noooooooooooooooot nessesry but because of Amin's mostach lol
    // console.log("inside the login useeffect");
    if (cookie.load("token")) {
      Navigate("/");
    }
    setloading(false);
  }, []);

  // useEffect(() => {
  //   console.log("inside the listener of the IsLogdedIn");
  //   if (context.IsLogdedIn) Navigate("/");
  //   // else Navigate("/login");
  // }, [context.IsLogdedIn]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(context, username, password);
    context.useLogin(username, password).then((isUsersLoggedIn) => {
      if (isUsersLoggedIn === true) {
        Navigate(location?.state?.redirectTo?.length > 0 ? location.state.redirectTo : "/");
        context.getAdminInfo();
      } else {
        setShowErrorMessage(true);
        e.target.reset();
      }
    });

    // setTimeout(() => {
    // }, 1000);
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
  if (loading) {
    // to render loading if the 'loading' true and to be unreadable if it false
    return (
      <main>
        <Loader />
      </main>
    );
  }
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
              type="password"
              required
            />
          </DivTxtField>

          {/* TODO: style the error message */}
          {showErrorMessage && (
            <DivPass className="red">اسم المستخدم أو كلمة المرور خاطآن</DivPass>
          )}
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
