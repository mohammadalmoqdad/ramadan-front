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
    <LeaderBoardContainer>
      <div>
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
                {/* Rank: */}
                <TopStudentsSpan> #{index + 1}</TopStudentsSpan>

                {/* Name */}
                {student.first_name.length > 0 ||
                student.last_name.length > 0 ? (
                  <TopStudentsSpan>
                    {student.first_name} {student.last_name}
                  </TopStudentsSpan>
                ) : (
                  <TopStudentsSpan>{student.username}</TopStudentsSpan>
                )}
              </SecondaryWrapper>

              <SecondaryWrapper>
                <TopStudentsSpan>
                  {/* <b>{student.total_points}</b> This was supposed to be the total points but since the design have the multiple points */}
                  <SecondaryWrapper>
                    <AverageWrapper>
                      <p>12 Ramadan</p>
                      <p>80/100</p>
                    </AverageWrapper>
                    <AverageWrapper>
                      <p>13 Ramadan</p>
                      <p>80/100</p>
                    </AverageWrapper>
                    <AverageWrapper>
                      <p>14 Ramadan</p>
                      <p>80/100</p>
                    </AverageWrapper>
                    <AverageWrapper>
                      <p>14 Ramadan</p>
                      <p>80/100</p>
                    </AverageWrapper>
                  </SecondaryWrapper>
                </TopStudentsSpan>
              </SecondaryWrapper>

              <SecondaryWrapper>
                <AverageWrapper>
                  <p>Average</p>
                  <p>80/100</p>
                </AverageWrapper>
              </SecondaryWrapper>
            </StudentPointsWrapper>
          );
        })}
      </div>
    </LeaderBoardContainer>
  );
}
