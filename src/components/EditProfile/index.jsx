import React, { useEffect, useState } from "react";
import { DivTxtField } from "../shared/styles.js";
import SignupFormContainer, {
  DivCenter,
  DivPass,
  DivFileField,
  FileFormInput,
} from "../Signup/Signup.styles";
import { Form, InputSubmit, FormInput } from "../Login/login.styles";
import { updateProfileData } from "../../services/updateProfileData";
import { UserAccountImg } from "./EditProfile.styled";
import { useTranslation } from "react-i18next";

function EditProfile() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [classColor, setClassColor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messages, setMessages] = useState([]);
  const [showErrorMessageMatch, setShowErrorMessageMatch] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setClassColor("");
    setMessages([]);
  }, [
    password,
    retypePassword,
    email,
    firstName,
    lastName,
    phoneNumber,
    photo,
  ]);

  useEffect(() => {
    setShowErrorMessageMatch(false);
  }, [password, retypePassword]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
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

    let formData = new FormData();
    formData.append("password", password);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);

    if (photo && photo.name && photo.name.length > 0) {
      formData.append("profile_photo", photo);
    }

    updateProfileData(
      formData,
      (res) => {
        if (res && res.status === 201) {
          setClassColor("green");
          setMessages(["Successfully Saved"]);

          setTimeout(() => {
            setClassColor("");
            setMessages([]);
            form.target.reset();
          }, 2000);
        }
      },
      (err) => {
        let errMessages = [];
        errMessages.push(["Some thing went wrong"]);
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
        <UserAccountImg
          src={
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
        />

        <Form onSubmit={handleSubmit}>
          <DivTxtField>
            <FormInput
              onChange={handleChangePassword}
              placeholder={t("new-password")}
              type="password"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleRetypePassword}
              placeholder={t("re-type-new-password")}
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
              placeholder={t("first-name")}
              type="text"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleChangeLastName}
              placeholder={t("last-name")}
              type="text"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handleChangeEmail}
              type="text"
              placeholder={t("new-email-address")}
            />
          </DivTxtField>

          <DivTxtField>
            <FormInput
              onChange={handlePhoneNumberChange}
              type="text"
              placeholder={t("phone-number")}
            />
          </DivTxtField>

          <DivFileField>
            {t("profile-photo")}
            <FileFormInput type="file" onChange={handlePhotoChange} />
          </DivFileField>
          <br />

          {messages.length > 0 &&
            messages.map((message, index) => {
              return (
                <DivPass className={classColor} key={index}>
                  {message}
                </DivPass>
              );
            })}
          <InputSubmit type="submit" value="login">
            {t("save")}
          </InputSubmit>
        </Form>
      </DivCenter>
    </SignupFormContainer>
  );
}

export default EditProfile;
