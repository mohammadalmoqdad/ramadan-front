import React from "react";
import SeeMore from "../../../assets/icons/Home/SeeMore.svg";
import { useTranslation } from "react-i18next";

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
  ParticipantsNumbersRanks,
  Top3RankDiv,
  Top1Img,
  Top1Name,
  Top2Name,
  Top2Img,
} from "./TopRanks.styles";
import NumberAndAbbreviationOfNames from "../../shared/NumberAndAbbreviationOfNames";

function TopRanks(props) {
  const { t } = useTranslation();
  const styles = [
    { background: "#FDD561" },
    { background: "#FF5367" },
    { background: "#503E9D" },
  ];

  return (
    <TopRank>
      <TopRanksAndParticipants>
        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>
              {t("participants")}
            </ParticipantsTitelsAtHome>

            <SeeAll href="/students" target="_blank">
              <SeeAllP>{t("see-all")}</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>{props.students.length}</TotalOfMembers>

            <NumberAndAbbreviationOfNames users={props.students} />
          </ParticipantsNumbers>
        </ParticipantsMember>

        <TopRanksSection>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>
              {t("top-3-rank")}
            </ParticipantsTitelsAtHome>

            <SeeAll href="/top-students" target="_blank">
              <SeeAllP>{t("see-all")}</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <ParticipantsNumbersRanks>
              {props.topMembers.slice(0, 3).map((topMember, i) => {
                if (i === 0) {
                  return (
                    <Top3RankDiv key={i}>
                      <Top1Img style={styles[i]}>
                        {topMember.name.slice(0, 2).toUpperCase()}
                      </Top1Img>
                      <Top1Name>{topMember.name}</Top1Name>
                    </Top3RankDiv>
                  );
                }
                return (
                  <Top3RankDiv key={i}>
                    <Top2Img style={styles[i]}>
                      {topMember.name.slice(0, 2).toUpperCase()}
                    </Top2Img>
                    <Top2Name>{topMember.name}</Top2Name>
                  </Top3RankDiv>
                );
              })}
            </ParticipantsNumbersRanks>
          </ParticipantsNumbers>
        </TopRanksSection>
      </TopRanksAndParticipants>
    </TopRank>
  );
}
export default TopRanks;
