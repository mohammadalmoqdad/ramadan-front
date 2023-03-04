import React, { useEffect, useState } from "react";
import Tabs from "../shared/Tabs";
import SetPasswordStudents from "./setPasswordStudent";
import EditStudentForm from "./EditStudentForm";
import {
  deleteStudent,
  retrieveStudents,
} from "../../services/studentsServices";
import { H5 } from "./setPasswordStudent/SetPasswordStudent.styles";
import Modal from "../shared/Modal";
import {
  Button,
  DropdownList,
  DropdownListItem,
  Span,
} from "../Admins/Admins.styles";
import { useAdminContext } from "../../contexts/AdminContext";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import Loader from "../Loader";
import { isSuperAdmin } from "../../util/ContestPeople_Role";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";
import { ReactComponent as SearchIcons } from "assets/icons/search.svg";
import { useTranslation } from "react-i18next";
import MyOngoingContestTab from "../shared/MyOngoingContestTab/index";
import StudentsContainer, {
  ContentContainer,
  RowContainer,
  BoldText,
  StudentSearchContainer,
  SearchInput,
  AddParticipantContainer,
  AddParticipantSpan,
  SearchInputContainer,
  SearchContainerForm,
  SearchIconButton,
  SearchContainer,
  GoBtn,
} from "./Students.styles";
import ParticipantCard from "./ParticipantCard";
import Participants from "./ParticipantsMember";

export default function Students() {
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState("");
  const [hasPermission, setPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useAdminContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Students" } });
    }

    setLoading(true);
    retrieveStudents(
      (res) => {
        setStudents(res.data.results);
        setLoading(false);
      },
      (err) => {
        console.log(
          "Failed to retrieve students: " + JSON.stringify(err.response.data)
        );
        setLoading(false);
      }
    );

    if (Object.keys(context.adminInfo).length > 0) {
      setPermission(isSuperAdmin(context));
    } else {
      setTimeout(() => {
        if (Object.keys(context.adminInfo).length === 0) {
          // permission will be updated once context.adminInfo is updated.
          context.getAdminInfo();
        }
      }, 1000);
    }
  }, []);

  useEffect(() => {
    setPermission(
      Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);

  const participants = [
    {
      name: "Ammar Jalal",
      date: "Jun 16th, 2022 ",
      button: t("reject"),
      rank: 1,
    },
    {
      name: "Mohammad Ayed",
      date: "Nov 5th, 2022 ",
      button: t("reject"),
      rank: 2,
    },
    {
      name: "Ahmad Aburabee",
      date: "Aug 7th, 2022 ",
      button: t("reject"),
      rank: 3,
    },
    {
      name: "Osama Ali",
      date: "Dec 9th, 2022 ",
      button: t("reject"),
      rank: 4,
    },
    {
      name: "Qais samer",
      date: "Jan 4th, 2023 ",
      button: t("reject"),
      rank: 5,
    },
  ];

  const handleDeleteStudentModalChange = (e) => {
    setStudentToDelete(e.target.value);
    setOpenModal(true);
  };

  const deleteFunction = () => {
    deleteStudent(
      studentToDelete,
      (res) => {
        if (res && res.status === 204) {
          console.log(`Student ${studentToDelete} has been deleted`);
          setStudents(
            students.filter(
              (student) => student.person.username !== studentToDelete
            )
          );
        }
      },
      (err) => {
        console.log(
          "Failed to delete admin: ",
          JSON.stringify(err.response.data)
        );
      }
    );
    setOpenModal(false);
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      {/* {openModal && (
        <Modal
          title="تأكيد الحذف"
          content="هل تريد حذف هذا الطالب؟"
          deleteBtn="حذف"
          cancelBtn="إلغاء"
          setOpenModal={setOpenModal}
          deleteFunction={deleteFunction}
        />
      )} */}

      <StudentsContainer>
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
                {t("students")}
                {`(${participants.length})`}
              </BoldText>
              <StudentSearchContainer>
                <SearchInput
                  onClick={() => setIsExpanded(!isExpanded)}
                  placeholder={t("search")}
                  isExpanded={isExpanded}
                />
                <SearchIcons2 onClick={() => setIsExpanded(false)} />
              </StudentSearchContainer>
            </RowContainer>

            {participants.map((item, idx) => {
              return (
                <ParticipantCard
                  key={idx}
                  name={item.name}
                  button={item.button}
                  date={item.date}
                  rank={item.rank}
                />
              );
            })}
          </div>

          <AddParticipantContainer>
            <Participants title={"waitingForApproval"} />
            <Participants title={"rejectedParticipants"} />
            <AddParticipantSpan>
              {t("addParticipantManually")}
            </AddParticipantSpan>
            <SearchInputContainer>
              <SearchContainerForm>
                <SearchIconButton type="submit">
                  <SearchIcons />
                </SearchIconButton>
                <SearchContainer placeholder={t("username")} type="text" />
              </SearchContainerForm>

              <GoBtn>{t("go")}</GoBtn>
            </SearchInputContainer>
          </AddParticipantContainer>
        </ContentContainer>
      </StudentsContainer>
    </>
  );
}
