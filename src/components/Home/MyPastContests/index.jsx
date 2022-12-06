import React from "react";
import SeeMore from "../../../assets/icons/Home/SeeMore.svg";

import LeftArrowIcon from "../../../assets/icons/Home/LeftArrow.svg";
import RightArrowIcon from "../../../assets/icons/Home/RightArrow.svg";

import {
  ParticipantsTitels,
  ParticipantsTitelsAtHome,
  SeeAll,
  SeeAllP,
  SeeAllIcon,
  TotalOfMembers,
  MemberImgsAndNumNumbers,
  MembersImgs,
  MemberNumbers,
  MembersImg,
  Top2Img,
} from "../TopRanks/TopRanks.styles";

import {
  MyOngoingContest,
  VictorLeft,
  VictorRight,
} from "../DaysSlider/DaysSlider.styles";

import DefaultMyPastContests, {
  TopRank,
  MyOngoingContestDiv,
  VictorArrows,
  RightLeftArrow,
  TopRanksAndParticipants,
  ParticipantsNumbersRanks,
  Top1Img,
  Top1Name,
  Top2Name,
  Top3RankDiv,
  RightLeftPastContests,
  LeftPastContests,
  TitelPastContests,
  ParticipantsMember,
  TopRanksSection,
  SeeContestResult,
  ParticipantsNumbers,


} from "./MyPastContests.styles";

function MyPastContests() {
  return (
    <DefaultMyPastContests>
      <MyOngoingContestDiv>
        <MyOngoingContest>My Past Contests</MyOngoingContest>

        <VictorArrows>
          <RightLeftArrow>
            <VictorLeft src={LeftArrowIcon} Alt="" />
          </RightLeftArrow>

          <RightLeftArrow>
            <VictorRight src={RightArrowIcon} Alt="" />
          </RightLeftArrow>
        </VictorArrows>
      </MyOngoingContestDiv>

      <RightLeftPastContests>
        <LeftPastContests>
          <TitelPastContests>12 months ago</TitelPastContests>

          <TopRank>
            <TopRanksAndParticipants>
              <ParticipantsMember>
                <ParticipantsTitels>
                  <ParticipantsTitelsAtHome>
                    Participants
                  </ParticipantsTitelsAtHome>

                  <SeeAll>
                    <SeeAllP>See all</SeeAllP>
                    <SeeAllIcon src={SeeMore} Alt="" />
                  </SeeAll>
                </ParticipantsTitels>

                <ParticipantsNumbers>
                  <TotalOfMembers>251</TotalOfMembers>

                  <MemberImgsAndNumNumbers>
                    <MembersImgs>
                      <MembersImg
                        style={{ background: "#FDD561", right: "10px" }}
                      >
                        AB
                      </MembersImg>
                      <MembersImg
                        style={{ background: "#FF5367", right: "30px" }}
                      >
                        MK
                      </MembersImg>
                      <MembersImg
                        style={{ background: "#503E9D", right: "50px" }}
                      >
                        HA
                      </MembersImg>
                    </MembersImgs>

                    <MemberNumbers>251+</MemberNumbers>
                  </MemberImgsAndNumNumbers>
                </ParticipantsNumbers>
              </ParticipantsMember>

              <TopRanksSection>
                <ParticipantsTitels>
                  <ParticipantsTitelsAtHome>
                    Top 3 rank
                  </ParticipantsTitelsAtHome>

                  <SeeAll>
                    <SeeAllP>See all</SeeAllP>
                    <SeeAllIcon src={SeeMore} Alt="" />
                  </SeeAll>
                </ParticipantsTitels>

                <ParticipantsNumbers>
                  <ParticipantsNumbersRanks>
                    <Top3RankDiv>
                      <Top1Img style={{ background: "#FDD561" }}>Am</Top1Img>
                      <Top1Name>Ameen Betawi</Top1Name>
                    </Top3RankDiv>

                    <Top3RankDiv>
                      <Top2Img style={{ background: "#FF5367" }}>MK</Top2Img>
                      <Top2Name>Mohammad Mokdad</Top2Name>
                    </Top3RankDiv>

                    <Top3RankDiv>
                      <Top2Img style={{ background: "#503E9D" }}>AQ</Top2Img>
                      <Top2Name>Anas ALQdy</Top2Name>
                    </Top3RankDiv>
                  </ParticipantsNumbersRanks>
                </ParticipantsNumbers>
                
              </TopRanksSection>
              <SeeContestResult>See Contest Result</SeeContestResult>

            </TopRanksAndParticipants>
          </TopRank>
        </LeftPastContests>

        <LeftPastContests>
          <TitelPastContests>24 months ago</TitelPastContests>
          <TopRank>
            <TopRanksAndParticipants>
              <ParticipantsMember>
                <ParticipantsTitels>
                  <ParticipantsTitelsAtHome>
                    Participants
                  </ParticipantsTitelsAtHome>

                  <SeeAll>
                    <SeeAllP>See all</SeeAllP>
                    <SeeAllIcon src={SeeMore} Alt="" />
                  </SeeAll>
                </ParticipantsTitels>

                <ParticipantsNumbers>
                  <TotalOfMembers>251</TotalOfMembers>

                  <MemberImgsAndNumNumbers>
                    <MembersImgs>
                      <MembersImg
                        style={{ background: "#FDD561", right: "10px" }}
                      >
                        AB
                      </MembersImg>
                      <MembersImg
                        style={{ background: "#FF5367", right: "30px" }}
                      >
                        MK
                      </MembersImg>
                      <MembersImg
                        style={{ background: "#503E9D", right: "50px" }}
                      >
                        HA
                      </MembersImg>
                    </MembersImgs>

                    <MemberNumbers>251+</MemberNumbers>
                  </MemberImgsAndNumNumbers>
                </ParticipantsNumbers>
              </ParticipantsMember>

              <TopRanksSection>
                <ParticipantsTitels>
                  <ParticipantsTitelsAtHome>
                    Top 3 rank
                  </ParticipantsTitelsAtHome>

                  <SeeAll>
                    <SeeAllP>See all</SeeAllP>
                    <SeeAllIcon src={SeeMore} Alt="" />
                  </SeeAll>
                </ParticipantsTitels>

                <ParticipantsNumbers>
                  <ParticipantsNumbersRanks>
                    <Top3RankDiv>
                      <Top1Img style={{ background: "#FDD561" }}>Am</Top1Img>
                      <Top1Name>Ameen Betawi</Top1Name>
                    </Top3RankDiv>

                    <Top3RankDiv>
                      <Top2Img style={{ background: "#FF5367" }}>MK</Top2Img>
                      <Top2Name>Mohammad Mokdad</Top2Name>
                    </Top3RankDiv>

                    <Top3RankDiv>
                      <Top2Img style={{ background: "#503E9D" }}>AQ</Top2Img>
                      <Top2Name>Anas ALQdy</Top2Name>
                    </Top3RankDiv>
                  </ParticipantsNumbersRanks>
                </ParticipantsNumbers>
             
              </TopRanksSection>

              <SeeContestResult>See Contest Result</SeeContestResult>

            </TopRanksAndParticipants>
          </TopRank>
        </LeftPastContests>
      </RightLeftPastContests>
    </DefaultMyPastContests>
  );
}
export default MyPastContests;
