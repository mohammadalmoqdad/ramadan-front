import styled from "styled-components";
import { colors } from "styles";

import {
  DropdownDiv as DefaultDropdownDiv,
  DropdownList as DefaultDropdownList,
} from "../../shared/styles";

export const DropdownDiv = styled(DefaultDropdownDiv)`
  margin: auto;
  width: auto;
`;

export const DropdownList = styled(DefaultDropdownList)`
  padding: 7px;
  border: none;
  font-size: medium;
  color: ${colors.darkGrey};
  cursor: pointer;
`;
