import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { retrieveTopStudents } from "../../services/competitionsServices";
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
export default function TopStudents() {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [visible, setVisible] = useState("none");

  function willvisible(e) {
    var x = document.getElementById(2);
    // var x = e.nextElementSibling;
    if (x.style.display === "flex") {
      setVisible("none");
    }
    if (x.style.display === "none") {
      setVisible("flex");
    }

    console.log(e.target.id);
    console.log(x.style.display + "555555555555555555555555");
  }

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
    ]);
  }, []);

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
          return (
            <StudentPointsWrapper key={index}>
              <SecondaryWrapper>
                {/* Rank: Top1Img */}
                <TopStudentsSpan> #{index + 1}</TopStudentsSpan>

                {/* Name */}
                {student.first_name.length > 0 ||
                student.last_name.length > 0 ? (
                  <Top3RankDiv>
                    <Top2Img style={{ background: "#FF5367" }}>MK</Top2Img>
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
