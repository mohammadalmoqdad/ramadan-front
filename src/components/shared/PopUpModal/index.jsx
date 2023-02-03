import React from "react";
import Container, {
  ButtonsContainer,
  FixedTextContainer,
} from "./popUpModal.styled";
export default function PopUpModal({ buttons, fixedTextFields, position }) {
  return (
    // A VERY IMPORTANT NOTE:  ******** if I have more than one render for the pop up in the same component, it will read the content in the last call of it ********
    // EX: in the first call for the pop up we have: fixedTextFields as [<p>  Testing </p>] and in the second render  as [<p>  second render test </p>] then the final result will be rendered in the same component is [<p> second render test </p>]
    //    This should not be an issue in the
    <Container position={position}>
      {console.log("fixedTextFields >>>", fixedTextFields)}
      {console.log("buttons >>>", buttons)}
      {/* <p>this is a modal</p> */}
      <FixedTextContainer>{fixedTextFields}</FixedTextContainer>
      <ButtonsContainer>{buttons}</ButtonsContainer>
    </Container>
  );
}
