import React, { useEffect, useState } from "react";
import { DivTxtField } from "../shared/styles.js";
import SignupFormContainer, {
  CreatorOrParticipant,
  CreatorOrParticipantDiv,
  CreatorOrParticipantSpan,
  TitleCreatorOrParticipant,
  ContentCreatorOrParticipant,
  DivCenter,
  DivPass,
  DivFileField,
  FileFormInput,
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
  HeadLogIn,
  TitleLogin,
} from "../Login/login.styles";
import { signup } from "../../services/signup";
import AppleLogo from "../../assets/icons/Login/apple.svg";
import GoogleLogo from "../../assets/icons/Login/Google.svg";
import FBLogo from "../../assets/icons/Login/FB.svg";

function Signup() {
  const [activeParticipantButton, setActiveParticipantButton] =
    useState("#FBF9F7");
  const [activeCreatorButton, setActiveCreatorButton] = useState("#F9EAEA");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [contestName, setContestName] = useState("");
  const [classColor, setClassColor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messages, setMessages] = useState([]);
  const [showErrorMessageMatch, setShowErrorMessageMatch] = useState(false);
  const [isCreator, setCreator] = useState(false);
  const [isValidUserName, setValidUserName] = useState(true);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setClassColor("");
    setMessages([]);
  }, [username, password, retypePassword, email, accessCode, contestName]);

  useEffect(() => {
    setShowErrorMessageMatch(false);
  }, [password, retypePassword]);

  const activeCreator = () => {
    setCreator(true);
    setActiveParticipantButton("#F9EAEA");
    setActiveCreatorButton("#FBF9F7");
  };

  const activeParticipant = () => {
    setCreator(false);
    setActiveParticipantButton("#FBF9F7");
    setActiveCreatorButton("#F9EAEA");
  };

  const handleChangeUsername = (e) => {
    let regex = new RegExp("^[\u0621-\u064Aa-zA-Z0-9+-.@_]*$");
    if (!regex.test(e.target.value)) {
      setValidUserName(false);
    } else {
      setValidUserName(true);
    }
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeContestName = (e) => {
    setContestName(e.target.value);
  };

  const handleChangeAccessCode = (e) => {
    setAccessCode(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRetypePassword = (e) => {
    setRetypePassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  function handleSubmit(form) {
    form.preventDefault();

    if (password !== retypePassword) {
      setShowErrorMessageMatch(true);
      setClassColor("red");
      return;
    }

    if (!isValidUserName) {
      setClassColor("red");
      return;
    }

    let formData = new FormData();
    formData.append("password", password);
    formData.append("username", username);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    if (isCreator) {
      formData.append("contest_name", contestName);
    } else {
      formData.append("access_code", accessCode);
    }
    if (photo && photo.name && photo.name.length > 0) {
      formData.append("profile_photo", photo);
    }

    signup(
      formData,
      isCreator,
      (res) => {
        if (res && res.status === 201) {
          setClassColor("green");
          setMessages(["Successfully signed up"]);

          setTimeout(() => {
            setClassColor("");
            setMessages([]);
            form.target.reset();
          }, 2000);
        }
      },
      (err) => {
        let errMessages = [];
        errMessages.push(["Sign up was not completed successfully"]);
        if (err.response.data) {
          let obj = err.response.data;
          Object.keys(obj).forEach((e) => {
            errMessages.push(`${obj[e]} : ${e}`);
          });
        }
        setClassColor("red");
        setMessages(errMessages);
      }
    );
  }

  return (
    <SignupFormContainer>
      <DivCenter>
        <HeadLogIn>
          <TitleLogin>Signup</TitleLogin>
          <SignupNowAccount>
            Already have an account?{" "}
            <SignupNow href="/Login">Login now!</SignupNow>
          </SignupNowAccount>
        </HeadLogIn>

        <CreatorOrParticipant>
          <CreatorOrParticipantDiv
            onClick={activeCreator}
            style={{ background: `${activeParticipantButton}` }}
          >
            <CreatorOrParticipantSpan>
              <TitleCreatorOrParticipant>I’m Creator</TitleCreatorOrParticipant>
              <ContentCreatorOrParticipant>
                For educators and supervisors
              </ContentCreatorOrParticipant>
            </CreatorOrParticipantSpan>
          </CreatorOrParticipantDiv>

          <CreatorOrParticipantDiv
            onClick={activeParticipant}
            style={{ background: `${activeCreatorButton}` }}
          >
            <CreatorOrParticipantSpan>
              <TitleCreatorOrParticipant>
                I’m Participant
              </TitleCreatorOrParticipant>
              <ContentCreatorOrParticipant>
                For kids and students
              </ContentCreatorOrParticipant>
            </CreatorOrParticipantSpan>
          </CreatorOrParticipantDiv>
        </CreatorOrParticipant>

        <MediaOneLine>
          <MediaLogIn>
            {" "}
            <img src={AppleLogo} alt="AppleLogo" />
          </MediaLogIn>
          <MediaLogIn>
            {" "}
            <img src={GoogleLogo} alt="GoogleLogo" />
          </MediaLogIn>
          <MediaLogIn>
            <img src={FBLogo} alt="FBLogo" />
          </MediaLogIn>
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
              placeholder="Username"
              required
            />
          </DivTxtField>
          {!isValidUserName && (
            <DivPass className={classColor}>
              Username can contain Letters, digits and @/./+/-/_ only.
            </DivPass>
          )}

          {isCreator ? (
            <DivTxtField>
              <FormInput
                onChange={handleChangeContestName}
                type="text"
                placeholder="Contest name"
                required
              />
            </DivTxtField>
          ) : (
            <DivTxtField>
              <FormInput
                onChange={handleChangeAccessCode}
                type="text"
                placeholder="Access code"
              />
            </DivTxtField>
          )}

          <DivTxtField>
            <FormInput
              onChange={handleChangePassword}
              placeholder="Password"
              type="password"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleRetypePassword}
              placeholder="Re-type password"
              type="password"
              required
            />
          </DivTxtField>
          {showErrorMessageMatch && (
            <DivPass className="red">
              These passwords didn't match. Try again.
            </DivPass>
          )}

          <DivTxtField>
            <FormInput
              onChange={handleChangeFirstName}
              placeholder="First Name"
              type="text"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleChangeLastName}
              placeholder="Last Name"
              type="text"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleChangeEmail}
              type="text"
              placeholder="Email address"
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handlePhoneNumberChange}
              type="text"
              placeholder="Phone Number"
            />
          </DivTxtField>

          <DivFileField>
            Profile photo
            <FileFormInput type="file" onChange={handlePhotoChange} />
            <div type="file"></div>
          </DivFileField>
          <br />

          {/* <PageLink href="https://www.facebook.com/Wird.Competition/" target="_blank">
            هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني
          </PageLink> */}
          {messages.length > 0 &&
            messages.map((message, index) => {
              return (
                <DivPass className={classColor} key={index}>
                  {message}
                </DivPass>
              );
            })}
          <InputSubmit type="submit" value="login">
            Signup
          </InputSubmit>
        </Form>
      </DivCenter>
    </SignupFormContainer>
  );
}

export default Signup;
