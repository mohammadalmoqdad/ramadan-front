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
  ParticipantsNumbersRanks,
  Top3RankDiv,
  Top1Img,
  Top1Name,
  Top2Name,
  Top2Img,
} from "./TopRanks.styles";
import NumberAndAbbreviationOfNames from "../../shared/NumberAndAbbreviationOfNames";

function TopRanks(props) {
  const styles = [
    { background: '#FDD561' },
    { background: '#FF5367' },
    { background: '#503E9D' }
  ];

  return (
    <TopRank>
      <TopRanksAndParticipants>
        <ParticipantsMember>
          <ParticipantsTitels>

            <ParticipantsTitelsAtHome>Participants</ParticipantsTitelsAtHome>

            <SeeAll href="/Students" target="_blank">
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>

          </ParticipantsTitels>


          <ParticipantsNumbers>
            <TotalOfMembers>{props.students.length}</TotalOfMembers>

          <NumberAndAbbreviationOfNames users={props.students}/>
          </ParticipantsNumbers>
        </ParticipantsMember>


        <TopRanksSection>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Top 3 rank</ParticipantsTitelsAtHome>

            <SeeAll href="/TopStudents" target="_blank">
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <ParticipantsNumbersRanks>
              {
                props.topMembers.slice(0, 3).map((topMember, i)=>{
                  if(i===0){
                    return (
                        <Top3RankDiv>
                          <Top1Img style={styles[i]}>{topMember.name.slice(0, 2)}</Top1Img>
                          <Top1Name>{topMember.name}</Top1Name>
                        </Top3RankDiv>
                    )
                  }
                    return (
                        <Top3RankDiv>
                          <Top2Img style={styles[i]}>{topMember.name.slice(0, 2)}</Top2Img>
                          <Top2Name>{topMember.name}</Top2Name>
                        </Top3RankDiv>
                    )
                 })
              }

            </ParticipantsNumbersRanks>

          </ParticipantsNumbers>
        </TopRanksSection>

      </TopRanksAndParticipants>
    </TopRank>
  )
}
export default TopRanks;
