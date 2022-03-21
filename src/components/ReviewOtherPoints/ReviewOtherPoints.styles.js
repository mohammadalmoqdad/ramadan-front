import styled from "styled-components";
import GroupsContainer from "../Groups/Groups.styles";
import {LoginForm} from "../studentsPoints/StudentsPoints.styles";
import {DropdownDiv, DropdownList as List, DropdownListItem} from "../Students/setPasswordStudent/SetPasswordStudent.styles";

export const Background = styled(GroupsContainer)`
margin-top : 80px;
padding-top: 25px;
`;

export const FormLayer = styled(LoginForm)`
padding: 5px;
max-height: 750px;
overflow: auto;
`;

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