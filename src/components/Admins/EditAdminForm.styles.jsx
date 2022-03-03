import styled from "styled-components";

export const DropdownListItem = styled.option`

padding: 1rem ;
text-align:center;
/* :scope{
  background-color: orange;
  color: white;
}
:focus{
  background-color: orange;
  color: white;
} */
/* background-color: orange; */
  &:hover {
    background-color: orange;
    color: white;
  }
`;
export const DropdownDiv = styled.div`
margin: auto;
width: auto;
margin-bottom: 0rem;
margin-top: 0rem;

@media (max-width:500px) {
width: 15rem;
margin-bottom: 3rem;
margin-top: 3rem;
}
`;

export const DropdownList = styled.select`

font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
padding:1rem;

border-radius: 4px;
background-color: white;
box-shadow: 1px 3px 12px 0px #0000007a;
:hover{
  outline: none;
  border: none;
}
:focus{
  outline: none;
  border: none;
}
@media (max-width:500px) {
  font-size: .8rem;
  width: 15rem;
}
`;