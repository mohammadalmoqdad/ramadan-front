import React from "react";
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

function ContestMembers() {
  return (
    <TopRank>
      <TopRanksAndParticipants>
        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Moderators</ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>5</TotalOfMembers>

            <MemberImgsAndNumNumbers>
              <MembersImgs>
                <MembersImg style={{ background: "#FDD561", right: "0px" }}>
                  AB
                </MembersImg>
                <MembersImg style={{ background: "#FF5367", right: "20px" }}>
                  MK
                </MembersImg>
                <MembersImg style={{ background: "#503E9D", right: "40px" }}>
                  HA
                </MembersImg>
              </MembersImgs>

              {/* <MemberNumbers>251+</MemberNumbers> */}
            </MemberImgsAndNumNumbers>
          </ParticipantsNumbers>
        </ParticipantsMember>

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
                <MembersImg style={{ background: "#FDD561", right: "0px" }}>
                  AB
                </MembersImg>
                <MembersImg style={{ background: "#FF5367", right: "20px" }}>
                  MK
                </MembersImg>
                <MembersImg style={{ background: "#503E9D", right: "40px" }}>
                  HA
                </MembersImg>
              </MembersImgs>

              {/* <MemberNumbers>251+</MemberNumbers> */}
            </MemberImgsAndNumNumbers>
          </ParticipantsNumbers>
        </ParticipantsMember>

        <ParticipantsMember>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>Groups</ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>See all</SeeAllP>
              <SeeAllIcon src={SeeMore} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <TotalOfMembers>3</TotalOfMembers>

            {/* <MemberImgsAndNumNumbers>

              <MembersImgs>
                <MembersImg style={{ background: '#FDD561', right: '0px' }} >AB</MembersImg>
                <MembersImg style={{ background: '#FF5367', right: '20px' }}>MK</MembersImg>
                <MembersImg style={{ background: '#503E9D', right: '40px' }}>HA</MembersImg>

              </MembersImgs>

            </MemberImgsAndNumNumbers> */}
          </ParticipantsNumbers>
        </ParticipantsMember>
      </TopRanksAndParticipants>
    </TopRank>
  );
}
export default ContestMembers;
