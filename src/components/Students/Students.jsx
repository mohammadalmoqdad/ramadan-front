import React, {useEffect, useState} from 'react';
import Tabs from "../shared/Tabs/Tabs"
import SetPasswordStudents from "./setPasswordStudent/SetPasswordStudents";
import EditStudentForm from "./EditStudentForm/EditStudentForm";
import {retrieveStudents} from "../../services/studentsServices";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";
import StudentsContainer from "./setPasswordStudent/SetPasswordStudent.styles";
export default function Students(){
    const [students, setStudents] = useState([]);


    useEffect(()=>{
        retrieveStudents(
            (res) => {
                setStudents(res.data)
            }, (err) => {
                console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
            }
        );
    },[]);

    return(

        <>
            <Navbar />
            <StudentsContainer>
                { students.length > 0
                    ?
                    <Tabs labels={['تعديل طالب','كلمة المرور']}
                          contents={
                              [
                                  <EditStudentForm students={students} setStudents={setStudents} />,
                                  <SetPasswordStudents students={students}/>
                              ]} />
                    :
                    <h1>لا يوجد طلاب لعرضهم</h1>
                }
                <Sidebar />
            </StudentsContainer>

        </>
    );
}