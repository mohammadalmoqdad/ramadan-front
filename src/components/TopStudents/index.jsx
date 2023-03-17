import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { retrieveTopMembers } from "../../services/competitionsServices";
import Loader from "../Loader";
import { H5 } from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import {
  TopStudentsSpan,
  LeaderBoardContainer,
  StudentPointsWrapper,
  SecondaryWrapper,
  AverageWrapper,
  Top3RankDiv,
  Top2Img,
  DayInAverageWrapper,
  AverageParsents as AverageParents,
  DivLine,
  WarbSlider,
  PAverageWrapper,
  LeaderBoardMain,
  LeaderBoardMainTitel,
  Top2Name,
  AverageWrapperButon,
} from "./TopStudents.styles";

import MyOngoingContestTab from "components/shared/MyOngoingContestTab";

export default function TopStudents() {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [color, setColor] = useState();
  const [visible, setVisible] = useState("flex");
  // new State
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(screenWidth);

  function willvisible(e) {
    var x = document.getElementById(e.target.id);
    // new condition
    if (screenWidth > 700) {
      console.log("Grater than 700px");
      return; // if innerWidth is grater than 700 px ::> don't excute any thing
    }
    //
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  // new Content ::> stateup function to new screenWidth
  const resizeScreenHandler = () => {
    setScreenWidth((prevState) => window.innerWidth);
  };
  //
  useEffect(() => {
    //   if (!cookie.load("token")) {
    //       navigate("/login", {state:{redirectTo: "/TopStudents"}});
    //       return;
    //   }

    //   setLoading(true);
    //   retrieveTopStudents(
    //       (res) => {
    //           setTopStudents(res.data);
    //           setLoading(false);
    //       }, (err) => {
    //           console.log("Failed to retrieve top students: " + JSON.stringify(err.response.data));
    //           setLoading(false);
    //       }
    //   );

    // Temp change until the API from backend is ready
    setTopStudents([
      {
        total_points: 25,
        first_name: "mohammad",
        last_name: "almokdad",
        username: "modad",
      },
      {
        total_points: 20,
        first_name: "ameen",
        last_name: "albetawi",
        username: "ameeno",
      },
      {
        total_points: 25,
        first_name: "bassam",
        last_name: "saleh",
        username: "bassamo",
      },
    ]);

    setColor([
      {
        1: "#503E9D",
      },
      {
        2: "#FB862C",
      },
      {
        3: "#FF5367",
      },
      {
        4: "#FDD561",
      },
      {
        5: "#FFBAC2",
      },
    ]);
  }, []);
  // new content
  //
  useEffect(() => {
    const resizeTimer = setTimeout(() => {
      console.log("excute resize Timer!");
      if (screenWidth <= 700) {
        setVisible((prevState) => "none");
      } else {
        setVisible((prevState) => "flex");
      }
      window.addEventListener("resize", resizeScreenHandler);
    }, 50);
    return () => clearTimeout(resizeTimer); // cleanup function to stop excution
  }, [screenWidth]);
  //
  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  // Temp
  //   if (topStudents.length === 0) {
  //     return <H5>لا يوجد بيانات لعرضها</H5>;
  //   }

  let last = 1;
  return (
    <LeaderBoardMain>
      <MyOngoingContestTab />

      <LeaderBoardMainTitel>Participant Performance (251)</LeaderBoardMainTitel>

      <LeaderBoardContainer>
        {topStudents.map((student, index) => {
          if (index === 0) {
            last = 1;
          } else if (
            index > 0 &&
            student.total_points !== topStudents[index - 1].total_points
          ) {
            last++;
          }

          let randomColor = Math.floor(Math.random() * (5 - 1) + 1);
          console.log(randomColor + "66666666666666");
          return (
            <StudentPointsWrapper key={index}>
              <SecondaryWrapper>
                {/* Rank: Top1Img */}
                <TopStudentsSpan> #{index + 1}</TopStudentsSpan>

                {/* Name */}
                {student.first_name.length > 0 ||
                student.last_name.length > 0 ? (
                  <Top3RankDiv>
                    <Top2Img style={{ background: color.randomColor }}>
                      MK
                    </Top2Img>
                    <Top2Name>
                      {student.first_name} {student.last_name}
                    </Top2Name>
                  </Top3RankDiv>
                ) : (
                  <Top2Name>{student.username}</Top2Name>
                )}
                <DivLine />
              </SecondaryWrapper>

              <WarbSlider style={{ display: `${visible}` }} id={index + 1}>
                {console.log(index + 1 + "+ '=========================='")}
                {/* <SecondaryWrapper>  style="@media (max-width:700) { display: `${visible}` }"*/}
                <AverageWrapper>
                  <DayInAverageWrapper>12 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>13 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>14 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>15 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>16 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>17 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>18 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>19 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                <AverageWrapper>
                  <DayInAverageWrapper>20 Ramadan</DayInAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
                {/* </SecondaryWrapper> */}
              </WarbSlider>

              <SecondaryWrapper>
                <DivLine />
                {student.username.length > 0 && (
                  <AverageWrapperButon id={index + 1} onClick={willvisible}>
                    <PAverageWrapper id={index + 1}>Average</PAverageWrapper>
                    <AverageParents id={index + 1}>80/100</AverageParents>
                  </AverageWrapperButon>
                )}
              </SecondaryWrapper>
            </StudentPointsWrapper>
          );
        })}
      </LeaderBoardContainer>
    </LeaderBoardMain>
  );
}
