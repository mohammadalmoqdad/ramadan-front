import React from "react";
import SeeMore from "../../assets/icons/Home/SeeMore.svg";

import TopRank, {
  TopRanksAndParticipants,
  ParticipantsMember,
  TopRanksSection,
  ParticipantsTitels,
  ParticipantsNumbers,
  ParticipantsTitelsAtHome,
  SeeAll,
  SeeAllP,
  SeeAllIcon,
  TotalOfMembers,
  MemberImgsAndNumNumbers,
  MembersImgs,
  MemberNumbers,
  MembersImg,
  ShowButton,
} from "./ParticipantsMember.styles";
import { useTranslation } from "react-i18next";

function Participants({ title, showButton, onClick, length }) {
  const { t } = useTranslation();
  return (
    <ParticipantsMember>
      <ParticipantsTitels>
        <ParticipantsTitelsAtHome>{t(title)}</ParticipantsTitelsAtHome>
      </ParticipantsTitels>

      <ParticipantsNumbers>
        <TotalOfMembers>{length ? length : 1}</TotalOfMembers>
        {showButton ? (
          <ShowButton onClick={onClick}>{t("show")}</ShowButton>
        ) : (
          <MemberImgsAndNumNumbers>
            <MembersImgs>
              <MembersImg style={{ background: "#FDD561", right: "0px" }}>
                AB
              </MembersImg>
              <MembersImg style={{ background: "#FF5367", right: "30px" }}>
                MK
              </MembersImg>
              <MembersImg style={{ background: "#503E9D", right: "60px" }}>
                HA
              </MembersImg>
            </MembersImgs>

            {/* <MemberNumbers>251+</MemberNumbers> */}
          </MemberImgsAndNumNumbers>
        )}
      </ParticipantsNumbers>
    </ParticipantsMember>
  );
}
export default Participants;
