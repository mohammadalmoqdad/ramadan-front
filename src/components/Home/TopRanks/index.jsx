import React from 'react'
import SeeMore from '../../../assets/icons/Home/SeeMore.svg'

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

  ParticipantsNumbersRanks,
  Top3RankDiv,
  Top1Img,
  Top1Name,
  Top2Name,
  Top2Img,

} from "./TopRanks.styles";

function TopRanks() {
  return (
    <TopRank>
      <TopRanksAndParticipants>
        <ParticipantsMember>
          <ParticipantsTitels>

            <ParticipantsTitelsAtHome>Participants</ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>

          </ParticipantsTitels>


          <ParticipantsNumbers>
            <TotalOfMembers>251</TotalOfMembers>

            <MemberImgsAndNumNumbers>

              <MembersImgs>
                <MembersImg style={{ background: '#FDD561', right: '10px' }} >AB</MembersImg>
                <MembersImg style={{ background: '#FF5367', right: '30px' }}>MK</MembersImg>
                <MembersImg style={{ background: '#503E9D', right: '50px' }}>HA</MembersImg>

              </MembersImgs>

              <MemberNumbers>251+</MemberNumbers>

            </MemberImgsAndNumNumbers>
          </ParticipantsNumbers>
        </ParticipantsMember>


        <TopRanksSection>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Top 3 rank</ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <ParticipantsNumbersRanks>

              <Top3RankDiv>
                <Top1Img style={{ background: '#FDD561' }}>Am</Top1Img>
                <Top1Name>Ameen Betawi</Top1Name>
              </Top3RankDiv>

              <Top3RankDiv>
                <Top2Img style={{ background: '#FF5367' }}>MK</Top2Img>
                <Top2Name>Mohammad Mokdad</Top2Name>
              </Top3RankDiv>

              <Top3RankDiv>
                <Top2Img style={{ background: '#503E9D' }}>AQ</Top2Img>
                <Top2Name>Anas ALQdy</Top2Name>
              </Top3RankDiv>

            </ParticipantsNumbersRanks>

          </ParticipantsNumbers>
        </TopRanksSection>

      </TopRanksAndParticipants>
    </TopRank>
  )
}
export default TopRanks;
