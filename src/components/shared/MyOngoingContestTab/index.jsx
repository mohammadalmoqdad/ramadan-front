import React, { useState, useEffect } from "react";

import MyOngoingContestItem from "./MyOngoingContestItem";
import {
  MainContainer,
  NormalDiv,
  OpenIconContainer,
  FormsContainer,
  JoinAndCreateInputContainer,
  DefaultForm,
  SearchContainer,
  ActionBtn,
} from "./MyOngoingContestTab.styles";
import { ReactComponent as OpenDropDown } from "../../../assets/icons/Shared/OpenDropDown.svg";
import {
  createContent,
  joinContest,
  retrieveContestsInfo,
  retrieveCurrentContestInfo
} from "../../../services/competitionsServices";
import {DivPass} from "../../ResetPassword/ResetPassword.styles";

function MyOngoingContestTab({ competition }) {
  const [openContests, setOpenContests] = useState(false);
  const [containerHeight, setContainerHeight] = useState("");
  const [inputsHeight, setInputsHeight] = useState("");
  const [currentContest, setCurrentContest] = useState({});
  const [otherContests, setOtherContests] = useState([]);
  const [newContestName, setNewContestName] = useState("");
  const [contestCode, setContestCode] = useState("");
  const [createErrorMessage, setCreateErrorMessage] = useState("");
  const [joinErrorMessage, setJoinErrorMessage] = useState("");

  // const [selectChange, setSelectChange] = useState(false);

  // const changeSelectHandler = () => {
  //   setSelectChange((prevState) => !prevState);
  // };

  useEffect(() => {
    retrieveCurrentContestInfo((res)=>{
      if(res && res.status === 200){
        setCurrentContest(res.data);
      }
    }, (err)=>{
        console.log(`Failed to get current contest: ${err}`);
    });
  }, []);

  useEffect(()=>{
    retrieveContestsInfo((res)=>{
      if(res && res.status === 200){
        setOtherContests(res.data.filter(contest => contest.id !== currentContest.id));
      }
    }, (err)=>{
      console.log(`Failed to contests: ${err}`);

    });
  },[currentContest]);

  useEffect(()=>{
    if([currentContest, ...otherContests].length > 0){
      let inputsHeight = [currentContest, ...otherContests].length * 120;
      setInputsHeight( inputsHeight + "px");
      setContainerHeight((inputsHeight + 250) + "px");
    }else{
      let inputsHeight = 120;
      setInputsHeight( inputsHeight + "px");
      setContainerHeight((inputsHeight + 250) + "px");
    }
  },[otherContests]);

  const handleNewContestNameChange = (e) =>{
    setNewContestName(e.target.value);
  };

  const handleContestCodeChange = (e) =>{
    setContestCode(e.target.value);
  };

  const togglingContestHandler = () => {
    setOpenContests((prevState) => !prevState);
  };

  const createContestHandler = () => {
    if(newContestName.length === 0 || newContestName.trim().length ===0){
      return;
    }
    createContent({
          "contest-name": newContestName
        }, (res) => {
          if(res && res.status === 200){
            window.location.reload(true);
          }
        }, (err)=>{
           handleCreateOrJoinError(err, setCreateErrorMessage, "crate");
        }
    );
  };
  const joinContestHandler = () => {
    if(contestCode.length === 0 || contestCode.trim().length ===0){
      return;
    }
    joinContest({
          "access-code": contestCode
        }, (res) => {
          if (res && res.status === 200) {
            window.location.reload(true);
          }
        }, (err) => {
          handleCreateOrJoinError(err, setJoinErrorMessage, "join");
        }
    );
  };

  const handleCreateOrJoinError = (err, setter, action)=>{
    console.log(`Failed to ${action} contest: ${err}`);
    if(err?.response?.data){
      setter(err.response.data);
      setTimeout(()=>{
        setter("");
      },3000);
    }
  };

  return (
    <MainContainer
      openContests={openContests}
      containerHeight={containerHeight}
    >
      <OpenIconContainer
        position="absolute"
        top="40px"
        right="40px"
        openContests={openContests} // to rotate icon
        onClick={togglingContestHandler}
      >
        <OpenDropDown />
      </OpenIconContainer>
      {[currentContest, ...otherContests].length > 0 ? (
        <NormalDiv
          position="absolute"
          top="25px"
          left="24px"
          width="83%"
          mobileChange={true}
        >
          {[currentContest, ...otherContests].map((contest, index) => (
            <MyOngoingContestItem
              key={contest.id}
              contest={contest}
              index={index}
            />
          ))}
        </NormalDiv>
      ) : (
        <NormalDiv position="absolute" top="25px" left="24px">
          <MyOngoingContestItem contest="emptyContest" />
        </NormalDiv>
      )}

      <NormalDiv
        position="absolute"
        top={inputsHeight}
        left="auto"
        width="95%"
        competition={competition} // if open from competition ::> change the style (width)
      >
        <FormsContainer>
          {/* Create Contest Form  */}
          <JoinAndCreateInputContainer>
            <DefaultForm>
              <SearchContainer placeholder="New Contest Name" type="text" onChange={handleNewContestNameChange}/>
            </DefaultForm>
            <ActionBtn onClick={createContestHandler}>Create</ActionBtn>
          </JoinAndCreateInputContainer>
          {/* Join Contest Form  */}
          <JoinAndCreateInputContainer>
            <DefaultForm>
              <SearchContainer placeholder="Access code" type="text" onChange={handleContestCodeChange}/>
            </DefaultForm>
            <ActionBtn onClick={joinContestHandler}>Join</ActionBtn>
          </JoinAndCreateInputContainer>
        </FormsContainer>
        { createErrorMessage.length > 0 &&
            <DivPass className="red">{createErrorMessage}</DivPass>
        }
        { joinErrorMessage.length > 0 &&
            <DivPass className="red">{joinErrorMessage}</DivPass>
        }
      </NormalDiv>
    </MainContainer>
  );
}
export default MyOngoingContestTab;
