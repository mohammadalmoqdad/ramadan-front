import React, {useEffect, useState} from "react";
import SeeMore from "../../../assets/icons/Home/SeeMore.svg";

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
} from "./ContestMembers.styles";
import Loader from "../../Loader";
import {retrieveAdmins} from "../../../services/adminsServices";
import {retrieveStudents} from "../../../services/studentsServices";
import NumberAndAbbreviationOfNames from "../../shared/NumberAndAbbreviationOfNames";

function ContestMembers({contest}) {
  const [admins, setAdmins] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);

    retrieveAdmins(
        (res) => {
          setAdmins([...res.data]);
        }, (err) => {
          console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
        }
    );

    retrieveStudents(
        (res) => {
          setStudents(res.data);
          setLoading(false);
        }, (err) => {
          console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
          setLoading(false);
        });
  },[]);

  if (loading) {
    return (
        <main>
          <Loader />
        </main>
    );
  }

  return (
    <TopRank>
      <TopRanksAndParticipants>
        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Moderators</ParticipantsTitelsAtHome>

            <SeeAll href="/Admins" target="_blank">
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>{admins.length}</TotalOfMembers>

            <NumberAndAbbreviationOfNames users={admins}/>
          </ParticipantsNumbers>
        </ParticipantsMember>

        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Participants</ParticipantsTitelsAtHome>

            <SeeAll href="/Students" target="_blank">
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>{students.length}</TotalOfMembers>
            <NumberAndAbbreviationOfNames users={students}/>
          </ParticipantsNumbers>
        </ParticipantsMember>

        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Groups</ParticipantsTitelsAtHome>

            <SeeAll href="/Groups" target="_blank">
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>{contest.group_count}</TotalOfMembers>
          </ParticipantsNumbers>
        </ParticipantsMember>
      </TopRanksAndParticipants>
    </TopRank>
  );
}
export default ContestMembers;
