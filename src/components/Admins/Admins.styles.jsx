import styled from "styled-components";
import Default, {
    DivForDropdownList as DefaultDropdownList,
    DivForDropdownListItem as DefaultDropdownListItem,
    H3Pass as DefaultDivPass,
    DropdownDiv as DefaultDropdownDiv
} from "../shared/styles"


export default styled(Default)`
width: 100%;
padding: 0; 
@media (max-width:500px) {
    padding: 1rem;
}
`;

export const Span = styled.span`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 20px;
width: 80%;
`;

export const DropdownDiv = styled(DefaultDropdownDiv)`
width: 25rem;
margin: 25px auto;
`;

export const DropdownList = styled(DefaultDropdownList)`
position: relative;
.dropdown-scroll-container{
    overflow: auto;
    max-height:700px;
}
width: 25rem;
@media (max-width:500px) {
    margin: 10px 0;
    width: 100%;
    .dropdown-scroll-container{
        max-height:350px;
    }
}
margin: 100px auto;
.title{
    background-color: #e9e9e9;
    border-bottom: 2px solid #fda400;
}
.title span{
    width:100%;   
    color: #000; 
}
`;

export const DropdownListItem = styled(DefaultDropdownListItem)`
padding: 12px ;
display: flex;
#deleteBtn {
    background-color: crimson;
}
`;

export const I = styled.i`
margin-right: 2rem;
text-align:left;
`;


export const DivPass = styled(DefaultDivPass)`
word-break: break-word;
direction: rtl;
`;

export const Button = styled.button`
    width: 45px;
    height: 30px;
    max-width: 150px;
    border: none;
    font-size: 15px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
`;