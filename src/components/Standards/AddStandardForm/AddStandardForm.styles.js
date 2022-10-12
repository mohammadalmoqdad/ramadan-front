import styled from "styled-components";
import {DropdownListStanderd as DefaultDropdownListStanderd} from '../../shared/styles'
export const Span = styled.span`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.2rem;
@media (max-width:500px) {
  font-size: .8rem;
}
`;

export const DropdownListStanderd = styled(DefaultDropdownListStanderd)`
text-align: center;
`;

export const I = styled.i`
margin-right: 0.5rem;
text-align:left;
`;


export const DivMultiselect = styled.div`
.multiSelectContainer{
    text-align: right
}
`