import React, { useRef } from "react";
import ReactDom from "react-dom";
import Container, {
  TextInputField,
  AddButton,
  Overlay,
  TextArea,
} from "./InfoModal.styled";
import { useTranslation } from "react-i18next";
import NumberInputField from "components/ContestCriteria/InputField";
export default function InfoModal({ clickOverlay, turnOff, note }) {
  const passwordRef = useRef();
  const { t } = useTranslation();
  const handleAddNote = (e) => {
    // your code
    turnOff();
  };
  return ReactDom.createPortal(
    <>
      <Overlay onClick={clickOverlay} />
      <Container>
        <label>{t("note-from-the-student")}</label>
        <TextArea value={note} />
        <TextInputField
          ref={passwordRef}
          type={"text"}
          placeholder={t("enter-note")}
        />

        <NumberInputField type={"number"} label={t("maximum-repeat")} />
        <NumberInputField type={"number"} label={t("enter-result")} />
        <AddButton onClick={handleAddNote}>{t("add-result")}</AddButton>
      </Container>
    </>,
    document.getElementById("portal")
  );
}
