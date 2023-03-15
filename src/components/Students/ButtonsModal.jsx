import React, { useRef } from "react";
import ReactDom from "react-dom";
import Container, {
  TextInputField,
  AddButton,
  Overlay,
} from "./ButtonsModal.styled";
import { useTranslation } from "react-i18next";
export default function ButtonsModal({ clickOverlay, turnOff }) {
  const passwordRef = useRef();
  const { t } = useTranslation();
  const handleChangePassword = (e) => {
    if (passwordRef.current.value.trim() === "") {
      passwordRef.current.focus();
    } else {
      // your code
      turnOff();
    }
  };
  const handleSetAdmin = (e) => {
    // your code
    turnOff();
  };
  const handleDeactivate = (e) => {
    // your code
    turnOff();
  };
  return ReactDom.createPortal(
    <>
      <Overlay onClick={clickOverlay} />
      <Container>
        <AddButton onClick={handleSetAdmin}>{t("set-admin")}</AddButton>
        <AddButton onClick={handleDeactivate}>{t("deactivate")}</AddButton>
        <AddButton onClick={handleChangePassword}>
          {t("change-password")}
        </AddButton>
        <TextInputField
          ref={passwordRef}
          type={"text"}
          placeholder={t("enter-new-password")}
        />
      </Container>
    </>,
    document.getElementById("portal")
  );
}
