import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import Loader from "components/Loader";
import MyOngoingContestTab from "components/shared/MyOngoingContestTab";
import { useAdminContext } from "contexts/AdminContext";
import { retrieveAdmins } from "services/adminsServices";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";
import { useTranslation } from "react-i18next";

import ContestModeratorDefault, {
  ContentContainer,
  GoBtn,
  SearchContainer,
  SearchInputContainer,
  SearchContainerForm,
  AddModeratorContainer,
  AddModeratorSpan,
  RowContainer,
  BoldText,
  SearchInput,
  ModeratorSearchContainer,
} from "./ContestModerator.styles";

import ModeratorCard from "./ModeratorCard";
// import {retrieveContestInfo} from "../../services/competitionsServices";
import {DivPass} from "../ResetPassword/ResetPassword.styles";
import AddAdminModal from "./AddAdminModal";

const ContestModerator = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const context = useAdminContext();

  const [loading, setLoading] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [adminSearchText, setAdminSearchText] = useState("");
  // const [currentContest, setCurrentContest] = useState({});
  // const [otherContests, setOtherContests] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalState, setModalState] = useState(false);
  const [newAdminUsername, setNewAdminUsername] = useState("");


  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login");
      return;
    }

    if(Object.keys(context.adminInfo).length === 0){
      context.getAdminInfo();
    }

    setLoading(true);


    // retrieveContestInfo((res)=>{
    //   setCurrentContest(res?.data?.filter(contest => contest.id ===  context.getAdminInfo().contest?.id));
    //   setOtherContests(res?.data?.filter(contest => contest.id !==  context.getAdminInfo().contest?.id));
    // });

    retrieveAdmins(
      (res) => {
        setAdmins(res?.data?.results);
        setLoading(false);
        console.log("this is result>>", res?.data?.results);
      },
      (err) => {
        setLoading(false);
        console.log("Failing", err);
      }
    );

  }, []);

  const handleAdminSearchTextChange = (e) =>{
    setAdminSearchText(e.target.value);
  }

  const handleAdminSearchClick = ()=>{
    setLoading(true);
    retrieveAdmins(
        (res) => {
          setAdmins(res?.data?.results);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log("Failing", err);
        },
        adminSearchText);
    setIsExpanded(false);
  };

  const handleNonAdminTextChange = (e)=>{
    setNewAdminUsername(e.target.value);
  };

  const handleAddAdminManuallyClick = () =>{
    if(newAdminUsername.length === 0){
      return;
    }
    setModalState(true);
  }

  const getAdminsNumber = ()=>{
    return admins.some(admin => admin.person.username === context?.adminInfo?.person?.username)
        ? admins.length - 1 : admins.length;
  }

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  console.log(admins);
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
              {` (${getAdminsNumber()})`}
            </BoldText>
            <ModeratorSearchContainer>
              <SearchInput
                onChange={handleAdminSearchTextChange}
                onClick={() => setIsExpanded(!isExpanded)}
                placeholder={t("search")}
                value={adminSearchText.length === 0 ? "" : adminSearchText}
                isExpanded={isExpanded}
              />
              {/* <LightText onClick={() => setIsExpanded(!isExpanded)}>
                {t("search")}
              </LightText> */}
              <SearchIcons2
                onClick={handleAdminSearchClick}
              />
            </ModeratorSearchContainer>
          </RowContainer>

          {admins.filter(admin => admin.person.username !== context.adminInfo.person.username).map((person, idx) => {
            return <ModeratorCard key={idx} person={person.person} admins={admins} setAdmins={setAdmins}/>;
          })}
        </div>

        <AddModeratorContainer>
          <AddModeratorSpan>{t("add-moderator-manually")}</AddModeratorSpan>
          <SearchInputContainer>
            <SearchContainerForm>
              <SearchContainer placeholder={t("username")} type="text" onChange={handleNonAdminTextChange}/>
            </SearchContainerForm>

            <GoBtn onClick={handleAddAdminManuallyClick}>{t("add-admin")}</GoBtn>
          </SearchInputContainer>
          {showErrorMessage && (
              <DivPass className="red">{errorMessage}</DivPass>
          )}
          {modalState && (
              <AddAdminModal
                  clickOverlay={() => {
                    setModalState(false);
                  }}
                  turnOff={() => {
                    setModalState(false);
                  }}
                  newAdminUsername = {newAdminUsername}
                  setShowErrorMessage={setShowErrorMessage}
                  setErrorMessage={setErrorMessage}
              />
          )}
        </AddModeratorContainer>
      </ContentContainer>
    </ContestModeratorDefault>
  );
};

export default ContestModerator;
