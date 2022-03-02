import React, {useEffect, useState} from 'react'
import GroupsContainer from "./Group.styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../shared/Tabs/Tabs";
import Sidebar from "components/shared/Sidebar";
import AddGroupForm from "./AddGroupForm";
import EditGroupForm from "./EditGroupForm";
import {retrieveStudents} from "../../services/studentsServices";
import {retrieveAdmins} from "../../services/adminsServices";
import {retrieveGroups} from "../../services/groupsServices";

export default function Group() {

    const [admins, setAdmins] = useState(null);
    const [groups, setGroups] = useState(null);
    const [students, setStudents] = useState(null);

    useEffect(() => {

        retrieveStudents(
            (res) => {
            setStudents(res.data)
        }, (err) => {
            console.log("ERROR: " + JSON.stringify(err.response.data));
        });

        retrieveAdmins(
            (res) => {
            setAdmins(res.data)
        }, (err) => {
            console.log("ERROR: " + JSON.stringify(err.response.data));
        });

        retrieveGroups(
            (res) => {
            setGroups(res.data)
        }, (err) => {
            console.log("ERROR: " + JSON.stringify(err.response.data));
        });

    }, []);

    useEffect(() => {
            if(students && students.results){
                students.results.map(student => student['full_name'] = student.first_name+" "+student.last_name);
            }
    } , [students]);

    return (
        <GroupsContainer>
            <Tabs labels={['تعديل مجموعة', 'إضافة مجموعة']}
                  contents={
                      [
                          <EditGroupForm studentsGroups={groups} students={students} admins={admins}/>,
                          <AddGroupForm students={students} admins={admins}/>
                      ]
                  }/>
            <Sidebar/>
        </GroupsContainer>
    )
}
