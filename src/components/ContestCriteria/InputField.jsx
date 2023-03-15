import React from "react";
import { Container, InputField, TextLabel } from "./InputField.styled";

const NumberInputField = ({ type, label }) => {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputField
        type={type}
        placeholder={type === "number" ? 0 : undefined}
        min={type === "number" ? 0 : undefined}
      />
    </Container>
  );
};

export default NumberInputField;
