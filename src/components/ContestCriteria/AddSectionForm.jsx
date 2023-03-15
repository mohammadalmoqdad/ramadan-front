import React from "react";
import ReactDom from "react-dom";
import Container, {
  TextInputField,
  AddButton,
  Overlay,
} from "./AddCriteriaForm.styled";
import InputField from "./InputField";
import { useTranslation } from "react-i18next";
export default function PopUpModal({
  position,
  hideModalFunction,
  clickOverlay,
}) {
  const { t } = useTranslation();
  return ReactDom.createPortal(
    <>
      <Overlay onClick={clickOverlay} />
      <Container position={position}>
        <TextInputField type={"text"} placeholder={t("enter-title")} />
        <InputField type={"number"} label={t("section-order")} />
        <AddButton onClick={hideModalFunction}>{t("add-section")}</AddButton>
      </Container>
    </>,
    document.getElementById("portal")
  );
}
