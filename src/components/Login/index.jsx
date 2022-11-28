import React, { useState, useEffect } from "react";
import LoginFormContainer, {
  DivCenter,
  SignupNowAccount,
  InputSubmit,
  Form,
  TitleLogin,
  SignupNow,
  MediaLogIn,
  MediaOneLine,
  OrWayToLogIn,
  HeadLogIn,
  FormInput,

} from "./login.styles";

import {
  DivPass,
  DivTxtField
} from "../shared/styles";
import { useAdminContext } from "contexts/AdminContext";
import { useNavigate, useLocation } from "react-router-dom";
import cookie from "react-cookies";
import Loader from "../Loader";

import AppleLogo from '../../assets/icons/Login/apple.svg';
import GoogleLogo from '../../assets/icons/Login/Google.svg';
import FBLogo from '../../assets/icons/Login/FB.svg';
// import WirdLogo from '../../assets/Logo/WirdLogoV2.svg';



function Login() {
  let Navigate = useNavigate();
  const context = useAdminContext();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // setloading(true); // noooooooooooooooot nessesry but because of Amin's mostach lol
    // console.log("inside the login useeffect");
    if (cookie.load("token")) {
      Navigate("/");
    }
  }, []);

  // useEffect(() => {
  //   console.log("inside the listener of the IsLogdedIn");
  //   if (context.IsLogdedIn) Navigate("/");
  //   // else Navigate("/login");
  // }, [context.IsLogdedIn]);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    context.useLogin(username, password).then(
      (isUsersLoggedIn) => {
        if (isUsersLoggedIn === true) {
          Navigate(location?.state?.redirectTo?.length > 0 ? location.state.redirectTo : "/");
          context.getAdminInfo();
        } else {
          setShowErrorMessage(true);
          e.target.reset();
        }
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        console.log("Failed to login : ", err?.response?.data);
      }
    );

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
        <HeadLogIn>
        <TitleLogin>
          Login
          {/* <Wird>وِرد</Wird>{" "} */}
        </TitleLogin>
        <SignupNowAccount>Don’t have an account? <SignupNow href="/Signup" >Signup now!</SignupNow></SignupNowAccount>
        </HeadLogIn>

        <MediaOneLine>
          <MediaLogIn> <img src={AppleLogo} alt='' /></MediaLogIn>
          <MediaLogIn> <img src={GoogleLogo} alt='' /></MediaLogIn>
          <MediaLogIn><img src={FBLogo} alt='' /></MediaLogIn>
        </MediaOneLine>

        {/* <HeadLogIn> */}
        {/* <img src={WirdLogo} alt='' /> */}
        <OrWayToLogIn>Or</OrWayToLogIn>
        {/* </HeadLogIn> */}

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <FormInput
              onChange={handleChangeUsername}
              type="text"
              placeholder="Email address"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleChangePassowrd}
              placeholder="Password"
              type="password"
              required
            />
          </DivTxtField>

          {/* TODO: style the error message */}
          {showErrorMessage && (
            <DivPass className="red">Check your email and password or create an account.</DivPass>
          )}
          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}
          <InputSubmit type="submit" value="login">
            Login
          </InputSubmit>
        </Form>
        <SignupNowAccount>Or<SignupNow href="/ForgotPassword"> Forgot Password</SignupNow></SignupNowAccount>

      </DivCenter>
    </LoginFormContainer>
  );
}
export default Login;
