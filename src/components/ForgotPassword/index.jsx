import React from "react";
import LoginFormContainer, {
  DivCenter,
  SignupNowAccount,
  InputSubmit,
  Form,
  TitleLogin,
  SignupNow,
  HeadLogIn,
} from "./ForgotPassword.styles";

import {
  DivPass,
  FormInput,
  DivTxtField
} from "../shared/styles";

import WirdLogo from '../../assets/Logo/WirdLogoV2.svg';

function ForgotPassword() {

  return (
    <LoginFormContainer>
      <DivCenter>
        <HeadLogIn>
          <TitleLogin>
            Forgot Password
          </TitleLogin>
          {/* <SignupNowAccount>Don’t have an account? <SignupNow href="/Signup" >Signup now!</SignupNow></SignupNowAccount> */}
        </HeadLogIn>


        {/* <HeadLogIn> */}
        <img src={WirdLogo} alt='' />
        {/* <OrWayToLogIn>Or</OrWayToLogIn> */}
        {/* </HeadLogIn> */}

        <Form >
          <DivTxtField>
            <FormInput
              type="text"
              placeholder="Email address"
              required
            />
          </DivTxtField>

     

          {/* TODO: style the error message */}
          
          {/* {showErrorMessage && ( */}
          {/* <DivPass className="red">Check your email and password or create an account.</DivPass> */}
          {/* )} */}

          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}

          <InputSubmit type="submit" value="login">
            Reset Password
          </InputSubmit>
        </Form>
        <SignupNowAccount>Or<SignupNow href="/Login"> back to Login</SignupNow></SignupNowAccount>

      </DivCenter>
    </LoginFormContainer>
  );
}
export default ForgotPassword;
