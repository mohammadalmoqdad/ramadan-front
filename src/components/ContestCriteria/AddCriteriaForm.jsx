import React from "react";
import ReactDom from "react-dom";
import Container, {
  TextInputField,
  DropDown,
  Option,
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
        <InputField type={"number"} label={t("criteria-order")} />
        <DropDown>
          <Option disabled selected hidden>
            {t("choose-type")}
          </Option>
          <Option value={"digital"}>{t("digital")}</Option>
          <Option value={"true-false"}>{t("true-false")}</Option>
          <Option value={"text-needs-revision"}>
            {t("text-needs-revision")}
          </Option>
        </DropDown>
        <TextInputField type={"text"} placeholder={t("points-description")} />
        <InputField type={"number"} label={t("minimum-repeat")} />
        <InputField type={"number"} label={t("maximum-repeat")} />
        <InputField
          type={"number"}
          label={t("enter-the-number-of-points-for-each-repetition")}
        />
        <InputField type={"checkbox"} label={t("limited")} />
        <InputField type={"checkbox"} label={t("show-criteria")} />
        <InputField type={"checkbox"} label={t("activate-criteria")} />
        <AddButton onClick={hideModalFunction}>{t("add-criteria")}</AddButton>
      </Container>
    </>,
    document.getElementById("portal")
  );
}
