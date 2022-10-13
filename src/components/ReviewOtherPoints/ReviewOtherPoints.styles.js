import styled from "styled-components";
import {DropdownDiv} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import {DropdownList as List} from "../shared/styles";

export const TxtArea = styled.textarea`
width: 100%;
direction: rtl;
min-height: 75px;
outline-color: #fda400;
`;

export const DropDownDiv = styled(DropdownDiv)`
margin-top: 1rem;
`;
export const DropdownList = styled(List)`
padding:10px;
`;