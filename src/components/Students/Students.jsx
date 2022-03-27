import React, {useEffect, useState} from 'react';
import Tabs from "../shared/Tabs/Tabs"
import SetPasswordStudents from "./setPasswordStudent/SetPasswordStudents";
import EditStudentForm from "./EditStudentForm/EditStudentForm";
import {deleteStudent, retrieveStudents} from "../../services/studentsServices";
import  {H5} from "./setPasswordStudent/SetPasswordStudent.styles";
import Modal from "../shared/Modal/Modal";
import StudentsContainer, {Button, DropdownList, DropdownListItem, Span} from "../Admins/Admins.styles";
import {useAdminContext} from "../../contexts/AdminContext";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";
export default function Students(){
    const [students, setStudents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState("");
    const [hasPermission, setPermission] = useState(false);
    const context = useAdminContext();
    let navigate = useNavigate();

    useEffect(()=>{
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Students"}});
        }

        retrieveStudents(
            (res) => {
                setStudents(res.data)
            }, (err) => {
                console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
            }
        );

        if(Object.keys(context.adminInfo).length > 0){
            setPermission( context.adminInfo.is_super_admin);
        }else{
            setTimeout(() => {
                if(Object.keys(context.adminInfo).length === 0){
                    // permission will be updated once context.adminInfo is updated.
                    context.getAdminInfo();
                }
            }, 1000);
        }

    },[]);

    useEffect( ()=>{
        setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
    }, [context.adminInfo] )

    const handleDeleteStudentModalChange = (e)=>{
        setStudentToDelete(e.target.value);
        setOpenModal(true);

    };

    const deleteFunction = () =>{
        deleteStudent(studentToDelete,(res)=>{
                if(res && res.status === 204){
                    console.log(`Student ${studentToDelete} has been deleted`);
                    setStudents(students.filter( student => student.username !== studentToDelete));
                }
            }, (err)=>{
                console.log("Failed to delete admin: ", JSON.stringify(err.response.data));
            }
        );
        setOpenModal(false);
    }
    return(

        <>
            { openModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذا الطالب؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenModal} deleteFunction={deleteFunction} />
            }

            <StudentsContainer>
                { students && students.length > 0
                    ?
                        <>
                            <DropdownList className='DropdownList'>
                                <DropdownListItem  className="title"><Span>الطلاب</Span></DropdownListItem>
                                {

                                    students.map((student, index) => {
                                            return (<DropdownListItem key={index}>
                                                { hasPermission?
                                                    <>
                                                        <Button id="deleteBtn" onClick={handleDeleteStudentModalChange} value={student.username}>حذف</Button>
                                                        <Span>{student.first_name} {student.last_name}</Span>
                                                    </>
                                                    :
                                                    <Span style={{width: '100%'}}>{student.first_name} {student.last_name}</Span>
                                                }
                                            </DropdownListItem>)
                                        })
                                }
                            </DropdownList>

                            <Tabs labels={['تعديل طالب','كلمة المرور']}
                                  contents={
                                      [
                                          <EditStudentForm students={students} setStudents={setStudents} />,
                                          <SetPasswordStudents students={students}  />
                                      ]} />
                        </>
                    :
                        <Tabs labels={['الطلاب']} contents={[<H5>لا يوجد طلاب </H5>]} />
                }
            </StudentsContainer>

        </>
    );
}