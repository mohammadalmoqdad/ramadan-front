import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import Loader from "components/Loader";
import MyOngoingContestTab from "components/shared/MyOngoingContestTab";
import { useAdminContext } from "contexts/AdminContext";
import { isSuperAdmin } from "util/ContestPeople_Role";
import { retrieveAdmins } from "services/adminsServices";
import { ReactComponent as SearchIcons } from "assets/icons/search.svg";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";
import ContestModeratorDefault, {
  ContentContainer,
  GoContainer,
  SearchContainer,
  SearchInputContainer,
  SearchIconButton,
  SearchContainerForm,
  AddModeratorContainer,
  RowContainer,
  BoldText,
  LightText,
  ModeratorSearchContainer,
} from "./ContestModerator.styles";

import ModeratorCard from "./ModeratorCard";

const moderatorMember = [
  {
    name: "Ammar Jalal",
    data: " Jun 16th, 2022 ",
    button: "Delete",
  },
  {
    name: "Mohammad Ayed",
    data: " Nov 5th, 2022 ",
    button: "Delete",
  },
];

const ContestModerator = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <ContestModeratorDefault>
      <MyOngoingContestTab />

      <ContentContainer>
        {/* <ModeratorContainer>
          <LeftContainer>
            <span style={{ fontWeight: 700 }}>moderator (3)</span>
            <div
              style={{
                display: "flex",
                // marginRight: "42px",
                alignItems: "center",
                gap: "10px",
                color: "#FF5367",
              }}
            >
              <span>Search</span>
              <SearchIcons2 />
            </div>
          </LeftContainer>

          <ParticipantsNumbers>
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  backgroundColor: "#FF5367",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  fontWeight: 700,
                }}
              >
                AB
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontWeight: 700 }}>Amin Bukhari</span>
                <span>Added on Jun 16th, 2022</span>
              </div>
            </div>

            <button
              style={{
                backgroundColor: "rgba(255, 83, 103, 0.12)",
                color: "#FF5367",
                borderRadius: "18px",
                padding: "14px 18px",
              }}
            >
              Delete
            </button>
          </ParticipantsNumbers>
        </ModeratorContainer> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
          }}
        >
          <RowContainer>
            <BoldText>{`moderator (${moderatorMember.length})`}</BoldText>
            <ModeratorSearchContainer>
              <LightText>Search</LightText>
              <SearchIcons2 />
            </ModeratorSearchContainer>
          </RowContainer>

          {moderatorMember.map((item, idx) => {
            console.log(",mkmkm", item);
            return (
              <ModeratorCard
                key={idx}
                name={item.name}
                button={item.button}
                data={item.data}
              />
            );
          })}
        </div>

        <AddModeratorContainer>
          <span style={{ fontWeight: 700 }}>Add Moderator Manually</span>
          <SearchInputContainer>
            <SearchContainerForm>
              <SearchIconButton type="submit">
                <SearchIcons />
              </SearchIconButton>
              <SearchContainer placeholder="username" type="text" />
            </SearchContainerForm>

            <GoContainer>Go</GoContainer>
          </SearchInputContainer>
        </AddModeratorContainer>
      </ContentContainer>
    </ContestModeratorDefault>
  );
};

export default ContestModerator;
