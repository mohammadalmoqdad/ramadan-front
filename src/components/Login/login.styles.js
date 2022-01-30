import styled from "styled-components";

// LoginFormContainer 
export default styled.div`
display:flex;
`;

export const Form = styled.form`
width:20rem;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;
`;

export const FormInput = styled.input`
padding: 0.5rem;
border-radius:0.6rem;
margin-bottom: 0.2rem;
border: 0.1px solid gray;
  :focus{
    border:0.2px solid #213C64;
  }
`;