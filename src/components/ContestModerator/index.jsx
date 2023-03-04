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
import { useTranslation } from "react-i18next";

import ContestModeratorDefault, {
  ContentContainer,
  GoBtn,
  SearchContainer,
  SearchInputContainer,
  SearchIconButton,
  SearchContainerForm,
  AddModeratorContainer,
  AddModeratorSpan,
  RowContainer,
  BoldText,
  LightText,
  SearchInput,
  ModeratorSearchContainer,
} from "./ContestModerator.styles";

import ModeratorCard from "./ModeratorCard";
import { doRequest } from "services/doRequest";

const ContestModerator = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const moderatorMember = [
    {
      name: "Ammar Jalal",
      date: "Jun 16th, 2022 ",
      button: t("delete"),
    },
    {
      name: "Mohammad Ayed",
      date: "Nov 5th, 2022 ",
      button: t("delete"),
    },
  ];

  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([]);

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login");
      return;
    }

    setLoading(true);
    retrieveAdmins(
      (res) => {
        setUser(res?.data?.results);
        setLoading(false);
        console.log("this is result>>", res?.data?.results);
      },
      (err) => {
        console.log("Failing", err);
      }
    );
  }, []);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  console.log(users);
  return (
    <ContestModeratorDefault>
      <MyOngoingContestTab />

      <ContentContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
          }}
        >
          <RowContainer>
            <BoldText>
              {t("moderators")}
              {`(${moderatorMember.length})`}
            </BoldText>
            <ModeratorSearchContainer>
              <SearchInput
                onClick={() => setIsExpanded(!isExpanded)}
                placeholder={t("search")}
                isExpanded={isExpanded}
              />
              {/* <LightText onClick={() => setIsExpanded(!isExpanded)}>
                {t("search")}
              </LightText> */}
              <SearchIcons2
                onClick={() => {
                  setIsExpanded(false);
                }}
              />
            </ModeratorSearchContainer>
          </RowContainer>

          {users.map((person, idx) => {
            return <ModeratorCard key={idx} person={person.person} />;
          })}
        </div>

        <AddModeratorContainer>
          <AddModeratorSpan>{t("add-moderator-manually")}</AddModeratorSpan>
          <SearchInputContainer>
            <SearchContainerForm>
              <SearchIconButton type="submit">
                <SearchIcons />
              </SearchIconButton>
              <SearchContainer placeholder={t("username")} type="text" />
            </SearchContainerForm>

            <GoBtn>{t("go")}</GoBtn>
          </SearchInputContainer>
        </AddModeratorContainer>
      </ContentContainer>
    </ContestModeratorDefault>
  );
};

export default ContestModerator;
