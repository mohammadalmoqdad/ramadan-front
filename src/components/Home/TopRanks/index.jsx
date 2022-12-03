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

  Top3Rank,
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
                <MembersImg style={{ background: '#FDD561', right: '0rem' }} >AB</MembersImg>
                <MembersImg style={{ background: '#FF5367', right: '2rem' }}>AB</MembersImg>
                <MembersImg style={{ background: '#503E9D', right: '4rem' }}>AB</MembersImg>

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


          </ParticipantsNumbers>
        </TopRanksSection>

      </TopRanksAndParticipants>
    </TopRank>
  )
}
export default TopRanks;