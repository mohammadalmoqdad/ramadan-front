import React, { useEffect, useState } from "react";
import Tabs from "../shared/Tabs";
import SetPasswordStudents from "./setPasswordStudent";
import EditStudentForm from "./EditStudentForm";
import {
  deleteStudent, retrieveDeactivatedMembers,
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
import WaitingCard from "./WaitingCard";
import Participants from "./ParticipantsMember";

export default function Students() {
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const [deactivatedStudents, setDeactivatedStudents] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState("");
  const [hasPermission, setPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isStudentsDisplayed, setIsStudentsDisplayed] = useState(true);
  const [membersNumber, setMembersNumber] = useState(0);
  const [searchText, setSearchText] = useState("");

  const context = useAdminContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Students" } });
    }

    setLoading(true);

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

    retrieveDeactivatedMembers(
        (res)=>{
          if(res && res.status === 200){
            setDeactivatedStudents(res.data);
          }
        }, (err)=>{
          console.log(
              "Failed to retrieve deactivated students: " + JSON.stringify(err?.response?.data)
          );
        }
    );

    retrieveStudents(
        (res) => {
          setStudents(res.data);
          setLoading(false);
        },
        (err) => {
          console.log(
              "Failed to retrieve students: " + JSON.stringify(err?.response?.data)
          );
          setLoading(false);
        }
    );

  }, []);

  useEffect(() => {
    setPermission(
        Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);

  useEffect(() => {
    setSearchText("");
  }, [isStudentsDisplayed]);

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
          JSON.stringify(err?.response?.data)
        );
      }
    );
    setOpenModal(false);
  };

  const handleSearchTextChange = (e)=>{
    setSearchText(e.target.value);
  }

  const handleSearchClick = ()=>{
    setLoading(true);

    if(isStudentsDisplayed){
      retrieveStudents(
          (res) => {
            setStudents(res.data);
            setLoading(false);
          },
          (err) => {
            console.log(
                "Failed to retrieve students: " + JSON.stringify(err?.response?.data)
            );
            setLoading(false);
          },
          searchText
      );
    }else{
      retrieveDeactivatedMembers(
          (res)=>{
            if(res && res.status === 200){
              setDeactivatedStudents(res.data);
            }
            setLoading(false);
          }, (err)=>{
            console.log(
                "Failed to retrieve deactivated students: " + JSON.stringify(err?.response?.data)
            );
            setLoading(false);
          },
          searchText
      );
    }
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  const showDeactivatedStudents = () => {
    setIsStudentsDisplayed(!isStudentsDisplayed);
  };

  return (
    <>

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
                {isStudentsDisplayed
                  ? `${t("students")}(${students.length})`
                  : `${t("deactivatedStudents")}(${
                      deactivatedStudents.length
                    })`}
              </BoldText>
              <StudentSearchContainer>
                <SearchInput
                  value={searchText.length > 0 ? searchText : ""}
                  onChange={handleSearchTextChange}
                  placeholder={t("search")}
                  isExpanded={isExpanded}
                />
                <SearchIcons2 onClick={handleSearchClick} />
              </StudentSearchContainer>
            </RowContainer>

            {isStudentsDisplayed
              ? students.map((student, idx) => {
                  return (
                    <ParticipantCard
                      key={idx}
                      name={student.person?.first_name?.length > 0 ? student.person.first_name + " " + student.person.last_name : student.person.username}
                      username={student.person.username}
                      setStudents={setStudents}
                      students={students}
                      setDeactivatedStudents={setDeactivatedStudents}
                      deactivatedStudents={deactivatedStudents}
                    />
                  );
                })
              : deactivatedStudents.map((deactivatedStudent, idx) => {
                  return (
                    <WaitingCard
                      key={idx}
                      name={deactivatedStudent.person?.first_name?.length > 0
                          ? deactivatedStudent.person.first_name + " " + deactivatedStudent.person.last_name
                          : deactivatedStudent.person.username}
                      username={deactivatedStudent.person.username}
                      setStudents={setStudents}
                      students={students}
                      setDeactivatedStudents={setDeactivatedStudents}
                      deactivatedStudents={deactivatedStudents}
                    />
                  );
                })}
          </div>

          <AddParticipantContainer>
            <Participants
              title={isStudentsDisplayed ? "deactivatedStudents" : "students"}
              showButton
              onClick={showDeactivatedStudents}
              length={isStudentsDisplayed ? deactivatedStudents.length : students.length}
            />
          </AddParticipantContainer>
        </ContentContainer>
      </StudentsContainer>
    </>
  );
}
