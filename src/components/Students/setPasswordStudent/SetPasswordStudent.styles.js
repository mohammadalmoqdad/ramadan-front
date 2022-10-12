import styled from "styled-components";
import {
    FormInput,
    DivPass as DefaultDivPass,
    DropdownDiv as DefaultDropdownDiv
} from '../../shared/styles';

export default styled.div`
background: linear-gradient(120deg, #2980b9, #2980b9);
display: flex;
`;
export const SetPasswordStudent = styled.div`
padding-top: 5rem;
display: flex;
width: 100%;
height: 60rem;
justify-content: center;
align-items: flex-start;
flex-direction: column;
@media (max-width:500px) {
  padding: 2rem;
}
`;

export const DropdownDiv = styled(DefaultDropdownDiv)`
margin: auto;
`;

export const Span = styled.span`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
`;

export const I = styled.i`
margin-right: 1rem;
`;

export const DivPass = styled(DefaultDivPass)`
color: initial;
:focus{
  border:0.2px solid #213C64;
}
`;

export const FileFormInput = styled(FormInput)`
text-align: center;
`;

export const DivFileField = styled.div`
input[type=file]{
 color: black;
 border-bottom: none;
}
padding-top: 5px;
}
`;

export const H5 = styled.h5`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
`;