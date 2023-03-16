import { ReactComponent as MyOngoingContestsImg } from "../../../assets/icons/Shared/MyOngoingContest.svg";
import { ReactComponent as CopyIcon } from "../../../assets/icons/Shared/CopyIcon.svg";

import {
  MyOngoingContestIn,
  MyOngoingContests,
  MyOngoingContestsDescribtion,
  MyOngoingContestsTitel,
  MyOngoingContestsCodes,
  MyOngoingContestsLabel,
  ContestsCode,
  MyOngoingContestsLabels,
  ActionBtn,
  ContestIconDescriptionContainer,
} from "./MyOngoingContestTab.styles";

const MyOngoingContestItem = ({ contest, onClickSelect }) => {
  //
  // send request to select another contest depending on (contest.id)
  const selectContestHandler = () => {
    // send request to server here
    //
    // then reExcute Contests in Parents
    onClickSelect();
  };
  //
  if (contest === "emptyContest") {
    // If No Have any Contests yet
    return (
      <MyOngoingContestIn>
        <ContestIconDescriptionContainer>
          <MyOngoingContests style={{ background: "#ff53671e" }}>
            <MyOngoingContestsImg />
          </MyOngoingContests>
          <MyOngoingContestsDescribtion>
            <MyOngoingContestsTitel>No Have Contest Yet</MyOngoingContestsTitel>
          </MyOngoingContestsDescribtion>
        </ContestIconDescriptionContainer>
      </MyOngoingContestIn>
    );
  }
  return (
    <MyOngoingContestIn>
      <ContestIconDescriptionContainer>
        <MyOngoingContests
          style={{ background: contest.isActive ? "#FB6D3B" : "" }}
        >
          <MyOngoingContestsImg />
        </MyOngoingContests>

        <MyOngoingContestsDescribtion>
          <MyOngoingContestsTitel>{contest.name}</MyOngoingContestsTitel>

          <MyOngoingContestsCodes>
            <MyOngoingContestsLabels>
              <MyOngoingContestsLabel>Enrollment key:</MyOngoingContestsLabel>
              <ContestsCode>
                &nbsp; {contest.enrollmentkey} &nbsp;{" "}
              </ContestsCode>
              <CopyIcon />
            </MyOngoingContestsLabels>
          </MyOngoingContestsCodes>
        </MyOngoingContestsDescribtion>
      </ContestIconDescriptionContainer>

      {!contest.isActive && (
        <ActionBtn onClick={selectContestHandler}>Select</ActionBtn>
      )}
    </MyOngoingContestIn>
  );
};

export default MyOngoingContestItem;
