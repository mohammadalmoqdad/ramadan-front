import { UserBlankImage } from "components/shared/UserBlankImage";
import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { retrieveTopStudents } from "../../services/competitionsServices";
import Loader from "../Loader";
import { Top2Name } from "../Home/TopRanks/TopRanks.styles";
import { H5 } from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import {
  LeaderBoardMain,
  LeaderBoardMainTitel,
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
  MarkWrapper,
  Average,
} from "./TopStudents.styles";
export default function TopStudents() {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

              <WarbSlider>
                {/* <SecondaryWrapper> */}
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
                {/* </SecondaryWrapper> */}
              </WarbSlider>

              <SecondaryWrapper>
                <DivLine />

                <AverageWrapper>
                  <PAverageWrapper>Average</PAverageWrapper>
                  <AverageParents>80/100</AverageParents>
                </AverageWrapper>
              </SecondaryWrapper>
            </StudentPointsWrapper>
          );
        })}
      </LeaderBoardContainer>
    </LeaderBoardMain>
  );
}
