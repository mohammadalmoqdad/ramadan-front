import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginFormContainer, {
  TitleLogin,
  DivCenter,
  DivPass,
} from "./ForgotPassword.styles";
import { DivTxtField } from "../shared/styles";
import {
  SignupNowAccount,
  SignupNow,
  Form,
  InputSubmit,
  FormInput,
  HeadLogIn,
} from "../Login/login.styles";
import WirdLogo from "../../assets/Logo/WirdLogoV2.svg";

function ForgotPassword() {
  let Navigate = useNavigate();

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowErrorMessage(true);
    // setLoading(true);
    Navigate("/reset-password");
  }

  return (
    <LoginFormContainer>
      <DivCenter>
        <HeadLogIn>
          <TitleLogin>Forgot Password</TitleLogin>
        </HeadLogIn>

        {/* <HeadLogIn> */}
        <img src={WirdLogo} alt="" />
        {/* <OrWayToLogIn>Or</OrWayToLogIn> */}
        {/* </HeadLogIn> */}

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <FormInput type="text" placeholder="Email address" required />
          </DivTxtField>

          {/* TODO: style the error message */}
          {showErrorMessage && (
            <DivPass className="red">Check your email.</DivPass>
          )}

          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}

          <InputSubmit type="submit" value="login">
            Reset Password
          </InputSubmit>
        </Form>
        <SignupNowAccount>
          Or<SignupNow href="/Login"> back to Login</SignupNow>
        </SignupNowAccount>
      </DivCenter>
    </LoginFormContainer>
  );
}
export default ForgotPassword;
