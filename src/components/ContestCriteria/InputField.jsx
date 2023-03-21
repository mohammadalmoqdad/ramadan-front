import React from "react";
import { Container, InputField, TextLabel } from "./InputField.styled";

const NumberInputField = ({ type, label, onChange, checked, value}) => {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputField
        type={type}
        placeholder={type === "number" ? 0 : undefined}
        min={type === "number" ? 0 : undefined}
        onChange={onChange}
        checked={checked}
        value={value}
      />
    </Container>
  );
};

export default NumberInputField;
