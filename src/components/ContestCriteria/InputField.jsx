import React from "react";
import { Container, InputField, TextLabel } from "./InputField.styled";

const NumberInputField = ({ type, label, onChange, checked, value, disabled, onClick}) => {
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
        disabled={disabled}
        onClick={onClick}
      />
    </Container>
  );
};

export default NumberInputField;
