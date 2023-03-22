import React, {useEffect, useRef, useState} from "react";
import ReactDom from "react-dom";
import Container, {
    AddButton,
    Overlay, TextInputField,
} from "./ButtonsModal.styled";
import { useTranslation } from "react-i18next";
import {resetMemberPassword, updateContestPeopleRole} from "../../services/adminsServices";
import {Role} from "../../util/ContestPeople_Role";
import {DivPass} from "../shared/styles";

export default function ButtonsModal({ clickOverlay, turnOff, username, setStudents, students, setDeactivatedStudents, deactivatedStudents}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [unmatchedPasswords, setUnmatchedPasswords] = useState(false);
  const [messages, setMessages] = useState([]);

  const passwordRef = useRef();
  const { t } = useTranslation();

  useEffect(()=>{
      setUnmatchedPasswords(false);
      setMessages([]);
  },[password, confirmPassword]);

  const handleChangePassword = () => {
    if(password.length === 0 || password.trim().length === 0){
      return;
    }

    if(password !== confirmPassword){
      setUnmatchedPasswords(true);
      return;
    }

      resetMemberPassword({
              username: username,
              password: password
          }, (res) => {
              turnOff();
          }, (err) => {
          let errMessages = [];
          errMessages.push([t("reset-password-failed")]);
          if(err.response.data){
              let obj = err.response.data;
              Object.keys(obj).forEach(e => {
                      errMessages.push(`${obj[e]} : ${e}`);
                  }
              )
          }
          setMessages(errMessages);
          }
      );
  };

    const handleSetAdmin = () => {
    updateContestPeopleRole(username,
        {
          "contest_role":  Role.ADMIN
        }, (res) =>{
            if(res && res.status === 200){
              setStudents(students.filter(student => student.person.username !== username));
            }
        }, (err) =>{
            console.log(`Failed to set ${username} as admin ${err}`);
        }
    );
    turnOff();
  };
  const handleSetSuperAdmin = () => {
    updateContestPeopleRole(username,
        {
          "contest_role":  Role.SUPER_ADMIN
        }, (res) =>{
          if(res && res.status === 200){
            setStudents(students.filter(student => student.person.username !== username));
          }
        }, (err) =>{
          console.log(`Failed to set ${username} as super admin ${err}`);
        }
    );
    turnOff();
  };

  const handleDeactivate = () => {
    updateContestPeopleRole(username,
        {
          "contest_role":  Role.DEACTIVATED
        }, (res) =>{
          if(res && res.status === 200){
            let deactivatedStudent = students.filter(student => student.person.username === username)[0];
            setStudents(students.filter(student => student.person.username !== username));
            setDeactivatedStudents([...deactivatedStudents, deactivatedStudent]);
          }
        }, (err) =>{
          console.log(`Failed to deactivate  ${username}: ${err}`);
        }
    );
    turnOff();
  };

  const handleConfirmPasswordTextChange = (e)=>{
    setConfirmPassword(e.target.value);
  };

  const handlePasswordTextChange = (e)=>{
    setPassword(e.target.value);
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={clickOverlay} />
      <Container>
        <AddButton onClick={handleSetAdmin}>{t("set-admin")}</AddButton>
        <AddButton onClick={handleSetSuperAdmin}>{t("set-super-admin")}</AddButton>
        <AddButton onClick={handleDeactivate}>{t("deactivate")}</AddButton>

        <hr/>
        <TextInputField
          ref={passwordRef}
          type={"password"}
          placeholder={t("enter-new-password")}
          onChange={handlePasswordTextChange}
        />
        <TextInputField
            ref={passwordRef}
            type={"password"}
            placeholder={t("confirm-new-password")}
            onChange={handleConfirmPasswordTextChange}
        />
        <AddButton onClick={handleChangePassword}>
          {t("change-password")}
        </AddButton>
        { unmatchedPasswords.length > 0 &&
            <DivPass className="red"> {t("unmatched-passwords")}</DivPass>
        }
        { messages.length > 0 &&
              messages.map((message, index) => {
                  return <DivPass className="red" key={index}>{message}</DivPass>
              })
        }
      </Container>
    </>,
    document.getElementById("portal")
  );
}
