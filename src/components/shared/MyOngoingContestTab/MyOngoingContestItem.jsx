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
import {switchContest} from "../../../services/competitionsServices";
import {useTranslation} from "react-i18next";

const MyOngoingContestItem = ({ contest, index }) => {
  const {t} = useTranslation();

  const handleSwitchContest = (contestId) => {
      switchContest({
        "contest_id": contestId
      }, (res)=>{
        if(res && res.status ===200){
          window.location.reload(true);
        }
      }, (err)=>{
        console.log("Failed to switch contest: " + err);
      }
    );
  };

  const copyText = (code) =>{
    navigator.clipboard.writeText(contest.access_code).then(() => {
      console.log(`text: "${code}" has been Copied`);
    },() => {
      console.error('Failed to copy');
    });

  };

  if (contest === "emptyContest") {
    // If No Have any Contests yet
    return (
      <MyOngoingContestIn>
        <ContestIconDescriptionContainer>
          <MyOngoingContests style={{ background: "#ff53671e" }}>
            <MyOngoingContestsImg />
          </MyOngoingContests>
          <MyOngoingContestsDescribtion>
            <MyOngoingContestsTitel>{t("no-contest-yet-msg")}</MyOngoingContestsTitel>
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
              <MyOngoingContestsLabel>Access Code:  </MyOngoingContestsLabel>
              <ContestsCode>
                &nbsp; {contest.access_code} &nbsp;
              </ContestsCode>
              <CopyIcon onClick={()=>{copyText(contest.access_code)}}/>
            </MyOngoingContestsLabels>
          </MyOngoingContestsCodes>
        </MyOngoingContestsDescribtion>
      </ContestIconDescriptionContainer>

      {index !== 0 &&
        <ActionBtn onClick={()=>{handleSwitchContest(contest.id)}}>Select</ActionBtn>
      }
    </MyOngoingContestIn>
  );
};

export default MyOngoingContestItem;
