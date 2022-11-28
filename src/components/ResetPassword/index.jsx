import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginFormContainer, {
  TitleLogin,
  DivCenter,
  DivPass,
} from "./ResetPassword.styles";
import {
  DivTxtField
} from "../shared/styles";
import {
  SignupNowAccount,
  SignupNow,
  Form,
  InputSubmit,
  FormInput,
  HeadLogIn,
} from "../Login/login.styles"
import WirdLogo from '../../assets/Logo/WirdLogoV2.svg';

function ForgotPassword() {
  let Navigate = useNavigate();
  const [password, setPassword] = useState(" ");
  const [Retypepassword, setRetypePassword] = useState(" ");

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showErrorMessageMatch, setshowErrorMessageMatch] = useState(false);

  const handleChangePassowrd = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypepassword = (e) => {
    setRetypePassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // setLoading(true);
    if (password !== Retypepassword) {
      console.log('not = ------------------------');
      setshowErrorMessageMatch(true)
      setShowErrorMessage(false)
      return;
    } if (password.length < 8) {
      setShowErrorMessage(true)
      setshowErrorMessageMatch(false)
      return;
    }
    else {
      Navigate('/')
      console.log('trueeeeeee ------------------------')
    }
  }

  return (
    <LoginFormContainer>
      <DivCenter>
        <HeadLogIn>
          <TitleLogin>
            Reset Password
          </TitleLogin>
        </HeadLogIn>

        {/* <HeadLogIn> */}
        <img src={WirdLogo} alt='' />
        {/* <OrWayToLogIn>Or</OrWayToLogIn> */}
        {/* </HeadLogIn> */}

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <FormInput
              onChange={handleChangePassowrd}
              placeholder="Password"
              type="password"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleRetypepassword}
              placeholder="Re-type password"
              type="password"
              required
            />
          </DivTxtField>

          {/* TODO: style the error message */}
          {showErrorMessage && (
            <DivPass className="red">Use 8 or more characters.</DivPass>
          )}

          {showErrorMessageMatch && (
            <DivPass className="red">Those passwords didn’t match. Try again.</DivPass>
          )}

          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}

          <InputSubmit type="submit" value="login">
            Reset Password Now
          </InputSubmit>
        </Form>
        <SignupNowAccount>
          <SignupNow href="https://www.facebook.com/Wird.Competition/"> Wird Support </SignupNow>
          Or 
          <SignupNow href="/Login"> back to Login</SignupNow>
        </SignupNowAccount>

      </DivCenter>
    </LoginFormContainer>
  );
}
export default ForgotPassword;
