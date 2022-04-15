import styled from "styled-components";
import {DropdownList, Span} from '../Admins/Admins.styles'

export const TopStudentsDropdownList = styled(DropdownList)`
    width: 35rem;
    @media (max-width:500px) {
    margin: 10px 0;
    width: 100%;
    .dropdown-scroll-container{
        max-height:350px;
    }
}
`;

export const TopStudentsSpan = styled(Span)`
    &.place , &.points{
        width: 20%;
        font-size: 15px;
        color: #000;
        direction : rtl;
        
    }
    &.points b{
        font-size: 15px;
        color: #E94f57;
        text-shadow: 0.5px 1px #000;

    }
    &.place b{
        color: #fda400;
        text-shadow: 0.5px 1px #000;

    }
    &.name{
        width: 60%;
    }
    &.place.num1 b{
        font-size: 20px;
    }
    &.place.num2 b{
        font-size: 18px;
    }
    &.place.num3 b{
        font-size: 16px;
    }
    @media (max-width:500px) {
        b{
            display: block;
        }
    }
`;