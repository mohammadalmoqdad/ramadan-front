import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyOngoingContestTab from "../shared/MyOngoingContestTab/index";
import StudentsContainer, { RowContainer } from "../Students/Students.styles";
import StudentCard from "./StudentCard";
import { ContentContainer } from "./ReviewOtherPoints.styles";
import { H5 } from "components/Students/setPasswordStudent/SetPasswordStudent.styles";
import { DropDown, Option } from "./InfoModal.styled";

export default function Students() {
  const { t } = useTranslation();
  const [students, setStudents] = useState([
    {
      first_name: "Ali ",
      last_name: "mohammad",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "ahmad ",
      last_name: "aburabee",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "mustafa ",
      last_name: "fares",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
    {
      first_name: "samer ",
      last_name: "khaled",
      text: "dummy text here dummy text here dummy text here dummy text here dummy text here",
    },
  ]);

  return (
    <>
      <StudentsContainer>
        <MyOngoingContestTab />
        <ContentContainer>
          <RowContainer className="fe">
            <DropDown>
              <Option disabled selected hidden>
                {t("choose-day")}
              </Option>
              <Option>{`1 ${t("ramadan")}`}</Option>
              <Option>{`2 ${t("ramadan")}`}</Option>
              <Option>{`3 ${t("ramadan")}`}</Option>
              <Option>{`4 ${t("ramadan")}`}</Option>
              <Option>{`5 ${t("ramadan")}`}</Option>
              <Option>{`6 ${t("ramadan")}`}</Option>
              <Option>{`7 ${t("ramadan")}`}</Option>
              <Option>{`8 ${t("ramadan")}`}</Option>
              <Option>{`9 ${t("ramadan")}`}</Option>
              <Option>{`10 ${t("ramadan")}`}</Option>
              <Option>{`12 ${t("ramadan")}`}</Option>
              <Option>{`13 ${t("ramadan")}`}</Option>
              <Option>{`14 ${t("ramadan")}`}</Option>
              <Option>{`15 ${t("ramadan")}`}</Option>
              <Option>{`16 ${t("ramadan")}`}</Option>
              <Option>{`17 ${t("ramadan")}`}</Option>
              <Option>{`18 ${t("ramadan")}`}</Option>
              <Option>{`19 ${t("ramadan")}`}</Option>
              <Option>{`20 ${t("ramadan")}`}</Option>
              <Option>{`21 ${t("ramadan")}`}</Option>
              <Option>{`22 ${t("ramadan")}`}</Option>
              <Option>{`23 ${t("ramadan")}`}</Option>
              <Option>{`24 ${t("ramadan")}`}</Option>
              <Option>{`25 ${t("ramadan")}`}</Option>
              <Option>{`26 ${t("ramadan")}`}</Option>
              <Option>{`27 ${t("ramadan")}`}</Option>
              <Option>{`28 ${t("ramadan")}`}</Option>
              <Option>{`29 ${t("ramadan")}`}</Option>
              <Option>{`30 ${t("ramadan")}`}</Option>
            </DropDown>
          </RowContainer>
          <div className="div">
            {students && students.length > 0 ? (
              students.map((student, index) => {
                console.log(student);
                return (
                  <StudentCard
                    key={index + 1}
                    name={`${student.first_name} ${student.last_name}`}
                    note={student.text}
                  />
                );
              })
            ) : (
              <H5>{t("there-is-no-students")}</H5>
            )}
          </div>
        </ContentContainer>
      </StudentsContainer>
    </>
  );
}
