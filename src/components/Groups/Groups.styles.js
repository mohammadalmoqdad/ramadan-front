import styled from "styled-components";
import {
 DropdownDivSelect as DefaultDropdownDivSelect,
 DivForDropdownList as DefaultDropdownList,
 FormInput
} from "../shared/styles"

export const Span = styled.div`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.2rem;
`;


export const DropdownDivSelect = styled(DefaultDropdownDivSelect)`
margin-top: 1rem;
display: block;
`;

export const DropdownList = styled(DefaultDropdownList)`
@media (max-width:500px) {
  font-size: 1rem;
}
`;

export const I = styled.i`
`;

export const DivMultiselect = styled.div`
margin-top: 1rem;
`;

const Btn =  styled.button`
    position: relative;
    float: right;
    width: 30px;
    height: 30px;
    @media (max-width:400px) {
       width: 22px;
       height: 22px;
       top: 10px;
    }
    margin: 1px;
    border: none;
    font-size: 15px;
    font-weight:bold;
    padding: 1px;
    color: white;
    border-radius: 5px;
    :hover{
        background: orange;
        transition: .3s;
    }
 `;

export const AddBtn = styled(Btn)`
    background-color: cornflowerblue;
`;

export const RemoveBtn = styled(Btn)`
    background-color: #E94f57;
`;

export const AnnouncementsFormInput = styled(FormInput)`
direction: rtl;
 width: 80%;
 float: right;
`;