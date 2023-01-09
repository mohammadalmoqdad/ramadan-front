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
import StudentsContainer, {
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

export default function Students() {
  const [students, setStudents] = useState([]);
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
      {openModal && (
        <Modal
          title="تأكيد الحذف"
          content="هل تريد حذف هذا الطالب؟"
          deleteBtn="حذف"
          cancelBtn="إلغاء"
          setOpenModal={setOpenModal}
          deleteFunction={deleteFunction}
        />
      )}

      <StudentsContainer>
        {students && students.length > 0 ? (
          <>
            <DropdownList className="DropdownList">
              <DropdownListItem className="title">
                <Span>الطلاب</Span>
              </DropdownListItem>
              <div className="dropdown-scroll-container">
                {students.map((student, index) => {
                  return (
                    <DropdownListItem key={index}>
                      {hasPermission ? (
                        <>
                          <Button
                            id="deleteBtn"
                            onClick={handleDeleteStudentModalChange}
                            value={student.person.username}
                          >
                            حذف
                          </Button>
                          <Span>
                            {student.person.first_name}{" "}
                            {student.person.last_name}
                          </Span>
                        </>
                      ) : (
                        <Span style={{ width: "100%" }}>
                          {student.person.first_name} {student.person.last_name}
                        </Span>
                      )}
                    </DropdownListItem>
                  );
                })}
              </div>
            </DropdownList>

            <Tabs
              labels={["تعديل طالب", "كلمة المرور"]}
              contents={
                [
                  // <EditStudentForm students={students} setStudents={setStudents} />,
                  // <SetPasswordStudents students={students}  />
                ]
              }
            />
          </>
        ) : (
          <Tabs labels={["الطلاب"]} contents={[<H5>لا يوجد طلاب </H5>]} />
        )}
      </StudentsContainer>
    </>
  );
}
