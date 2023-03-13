import React from "react";
import { Container, InputField, TextLabel } from "./InputField.styled";

const NumberInputField = ({ type, label }) => {
  return (
    <Container>
      <InputField type={type} placeholder={type === "number" ? 0 : undefined} />
      <TextLabel>{label}</TextLabel>
    </Container>
  );
};

export default NumberInputField;
