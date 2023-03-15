import { useState, useEffect } from "react";

import MyOngoingContestItem from "./MyOngoingContestItem"; // contest item
import {
  MainContainer,
  NormalDiv,
  OpenIconContainer,
  FormsContainer,
  JoinAndCreateInputContainer,
  DefaultForm,
  SearchContainer,
  ActionBtn,
} from "./MyOngoingContestTab.styles"; // styled componenets
import { ReactComponent as OpenDropDown } from "../../../assets/icons/Shared/OpenDropDown.svg"; // icon

// Dummy Data
const DummyContests = [
  {
    id: "cont1",
    name: "Contest 1",
    enrollmentkey: "6F8E3W",
    isActive: false,
  },
  {
    id: "cont2",
    name: "Contest 2",
    enrollmentkey: "4F6E3W",
    isActive: false,
  },
  {
    id: "cont3",
    name: "Contest 3",
    enrollmentkey: "8W8E3S",
    isActive: true,
  },
  {
    id: "cont4",
    name: "Contest 4",
    enrollmentkey: "3R8D3W",
    isActive: false,
  },
];
//

function MyOngoingContestTab({ competition }) {
  const [contests, setContests] = useState([]);
  const [arrangmentContests, setArrangmentContests] = useState([]);
  const [openContests, setOpenContests] = useState(false);
  const [containerHeight, setContainerHeight] = useState("");
  const [inputsHeight, setInputsHeight] = useState("");

  const [selectChange, setSelectChange] = useState(false);
  //
  const togglingContestHandler = () => {
    setOpenContests((prevState) => !prevState);
  };
  const changeSelectHandler = () => {
    // console.log("press-Select");
    setSelectChange((prevState) => !prevState);
  };
  //
  const createContestHandler = (e) => {
    e.preventDefault();
    //
  };
  const joinContestHandler = (e) => {
    e.preventDefault();
    //
  };
  //

  // get Contests from server
  const getContestFromServer = () => {
    setContests((prevState) => DummyContests);
  };

  useEffect(() => {
    if (contests.length > 0) {
      setContainerHeight(
        (prevState) => (contests.length * 120 + 250).toString() + "px"
      );
      setInputsHeight((prevState) => (contests.length * 120).toString() + "px");
      // reArrangment Contsets depending on isActive key (true Or false)
      const firstItem = contests.filter((item) => item.isActive);
      const completeContests = contests.filter((item) => !item.isActive);
      //
      setArrangmentContests((prevState) => [...firstItem, ...completeContests]);
      //
    } else {
      // this condition to create One Empty item
      setContainerHeight((prevState) => (120 + 250).toString() + "px");
      setInputsHeight((prevState) => "120px");
    }
    // console.log("re_arrangment");
  }, [contests]);

  useEffect(() => {
    // one excuation when component render Or when select button pressed
    getContestFromServer();
    // console.log("re_excute");
  }, [selectChange]);
  //
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

      {arrangmentContests && arrangmentContests.length > 0 ? (
        <NormalDiv
          position="absolute"
          top="25px"
          left="24px"
          width="80%"
          mobileChange={true}
        >
          {arrangmentContests.map((contest) => (
            <MyOngoingContestItem
              key={contest.id}
              contest={contest}
              onClickSelect={changeSelectHandler}
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
              <SearchContainer placeholder="New Contest" type="text" />
            </DefaultForm>
            <ActionBtn onClick={createContestHandler}>Create</ActionBtn>
          </JoinAndCreateInputContainer>
          {/* Join Contest Form  */}
          <JoinAndCreateInputContainer>
            <DefaultForm>
              <SearchContainer placeholder="Join Contest" type="text" />
            </DefaultForm>
            <ActionBtn onClick={joinContestHandler}>Join</ActionBtn>
          </JoinAndCreateInputContainer>
        </FormsContainer>
      </NormalDiv>
    </MainContainer>
  );
}
export default MyOngoingContestTab;
