import React, { useState } from 'react'
import {
  DivTxtField,
} from "../shared/styles.js"
import SignupFormContainer, {
  // TitleSignup,
  CreatorOrParticipant,
  CreatorOrParticipantDiv,
  CreatorOrParticipantSpan,
  TitleCreatorOrParticipant,
  ContentCreatorOrParticipant,
  DivPass,

} from "../Signup/Signup.styles";
import {
  SignupNowAccount,
  SignupNow,
  MediaOneLine,
  MediaLogIn,
  OrWayToLogIn,
  Form,
  InputSubmit,
  FormInput,
  DivCenter,
  HeadLogIn,
  TitleLogin,
  PageLink
} from "../Login/login.styles"

import AppleLogo from '../../assets/icons/Login/apple.svg';
import GoogleLogo from '../../assets/icons/Login/Google.svg';
import FBLogo from '../../assets/icons/Login/FB.svg';
import WirdLogo from '../../assets/Logo/WirdLogoV2.svg';


function Signup() {

  const [activeParticipantButton, setactiveParticipantButton] = useState("#FBF9F7")
  const [activeCreatorButton, setactiveCreatorButton] = useState("#F9EAEA")
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [Retypepassword, setRetypePassword] = useState(" ");

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showErrorMessageMatch, setshowErrorMessageMatch] = useState(false);


  const activeCreator = (e) => {
    setactiveParticipantButton("#F9EAEA")
    setactiveCreatorButton("#FBF9F7")
  }

  const activeParticipant = (e) => {
    setactiveParticipantButton("#FBF9F7")
    setactiveCreatorButton("#F9EAEA")
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
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
      console.log('trueeeeeee ------------------------')
    }
  }

  return (
    <SignupFormContainer>
      <DivCenter>
        <HeadLogIn>
          <TitleLogin>
            Signup
          </TitleLogin>
          <SignupNowAccount>Already have an account? <SignupNow href="/Login">Login now!</SignupNow></SignupNowAccount>
        </HeadLogIn>

        <CreatorOrParticipant>
          <CreatorOrParticipantDiv onClick={activeCreator} style={{ background: `${activeParticipantButton}` }}>
            <CreatorOrParticipantSpan>
              <TitleCreatorOrParticipant>I’m Creator</TitleCreatorOrParticipant>
              <ContentCreatorOrParticipant>For educators and supervisors</ContentCreatorOrParticipant>
            </CreatorOrParticipantSpan>
          </CreatorOrParticipantDiv>

          <CreatorOrParticipantDiv onClick={activeParticipant} style={{ background: `${activeCreatorButton}` }}>
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
            Signup
          </InputSubmit>
        </Form>
      </DivCenter>
    </SignupFormContainer>
  )
}
export default Signup;