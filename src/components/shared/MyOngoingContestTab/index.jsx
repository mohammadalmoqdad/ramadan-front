import React, { useEffect, useState } from "react";
import OpenDropDown from "../../../assets/icons/Shared/OpenDropDown.svg";
import MyOngoingContestsImg from "../../../assets/icons/Shared/MyOngoingContest.svg";
import CopyIcon from "../../../assets/icons/Shared/CopyIcon.svg";

import MyOngoingContest, {
  MyOngoingContestIn,
  DropdownIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  MyOngoingContests,
  MyOngoingContestsIcon,
  MyOngoingContestsDescribtion,
  MyOngoingContestsTitel,
  MyOngoingContestsCodes,
  MyOngoingContestsLabel,
  ContestsCode,
  ContestsCopyIcon,
  MyOngoingContestsLabels,
} from "./MyOngoingContestTab.styles";

function MyOngoingContestTab() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const options = ["Mangoes", "Apples", "Oranges"];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <MyOngoingContest>
      <MyOngoingContestIn>
        <MyOngoingContests>
          <MyOngoingContestsIcon src={MyOngoingContestsImg} Alt="" />
        </MyOngoingContests>

        <MyOngoingContestsDescribtion>
          <MyOngoingContestsTitel>My Ongoing Contest</MyOngoingContestsTitel>

          <MyOngoingContestsCodes>
            <MyOngoingContestsLabels>
              <MyOngoingContestsLabel>Enrollment key:</MyOngoingContestsLabel>
              <ContestsCode>&nbsp; 6D7S87 &nbsp; </ContestsCode>
              <ContestsCopyIcon src={CopyIcon} Alt="" />
            </MyOngoingContestsLabels>

            <MyOngoingContestsLabels>
              <MyOngoingContestsLabel>Share link:</MyOngoingContestsLabel>
              <ContestsCode>
                &nbsp; wird.app/contest/6D7S87 &nbsp;
              </ContestsCode>
              <ContestsCopyIcon src={CopyIcon} Alt="" />
            </MyOngoingContestsLabels>
          </MyOngoingContestsCodes>
        </MyOngoingContestsDescribtion>
      </MyOngoingContestIn>

      {/* <DropdownIcon src={OpenDropDown} Alt=""> */}
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {<DropdownIcon src={OpenDropDown} Alt="" />}
          {/* {selectedOption || "Mangoes"} */}
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      {/* </DropdownIcon> */}
    </MyOngoingContest>
  );
}
export default MyOngoingContestTab;
