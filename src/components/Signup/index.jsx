import React from 'react'
import {
  DivTxtField,
  FormInput,
  DivPass,
} from "../shared/styles.js"
import SignupFormContainer, {
  DivCenter,
  HeadSignup,
  TitleSignup,
  CreatorOrParticipant,
  CreatorOrParticipantDiv,
  CreatorOrParticipantSpan,
  TitleCreatorOrParticipant,
  ContentCreatorOrParticipant,

} from "../Signup/Signup.styles";
import {
  SignupNowAccount,
  SignupNow,
  MediaOneLine,
  MediaLogIn,
  OrWayToLogIn,
  Form,
  InputSubmit,

  // DivTxtField,
  // FormInput,
  // DivPass,
} from "../Login/login.styles"

import AppleLogo from '../../assets/icons/Login/apple.svg';
import GoogleLogo from '../../assets/icons/Login/Google.svg';
import FBLogo from '../../assets/icons/Login/FB.svg';
import WirdLogo from '../../assets/Logo/WirdLogoV2.svg';

function Signup() {
  return (
    <SignupFormContainer>
      <DivCenter>
        <HeadSignup>
          <TitleSignup>
            Signup
          </TitleSignup>
          <SignupNowAccount>Already have an account? <SignupNow href="/Login">Login now!</SignupNow></SignupNowAccount>
        </HeadSignup>

        <CreatorOrParticipant>
          <CreatorOrParticipantDiv>
            <CreatorOrParticipantSpan>
              <TitleCreatorOrParticipant>I’m Creator</TitleCreatorOrParticipant>
              <ContentCreatorOrParticipant>For educators and supervisors</ContentCreatorOrParticipant>
            </CreatorOrParticipantSpan>
          </CreatorOrParticipantDiv>

          <CreatorOrParticipantDiv>
            <CreatorOrParticipantSpan>
              <TitleCreatorOrParticipant>I’m Participant</TitleCreatorOrParticipant>
              <ContentCreatorOrParticipant>For kids and students</ContentCreatorOrParticipant>
            </CreatorOrParticipantSpan>
          </CreatorOrParticipantDiv>
        </CreatorOrParticipant>

        <MediaOneLine>
          <MediaLogIn> <img src={AppleLogo} alt='' /></MediaLogIn>
          <MediaLogIn> <img src={GoogleLogo} alt='' /></MediaLogIn>
          <MediaLogIn><img src={FBLogo} alt='' /></MediaLogIn>
        </MediaOneLine>

        {/* <HeadLogIn> */}
        {/* <img src={WirdLogo} alt='' /> */}
        <OrWayToLogIn>Or</OrWayToLogIn>
        {/* </HeadLogIn> */}

        <Form >
          <DivTxtField>
            <FormInput

              type="text"
              placeholder="Email address"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput

              placeholder="Password"
              type="password"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput

              placeholder="Password"
              type="password"
              required
            />
          </DivTxtField>

          {/* TODO: style the error message */}
          {/* {showErrorMessage && ( */}
          <DivPass className="red">Check your email and password.</DivPass>
          {/* )} */}
          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}
          <InputSubmit type="submit" value="login">
            Signup
          </InputSubmit>
        </Form>
      </DivCenter>
    </SignupFormContainer>
  )
}
export default Signup;