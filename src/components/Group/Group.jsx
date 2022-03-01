import React, {useEffect, useState} from 'react'
import GroupsContainer from "./Group.styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../shared/Tabs/Tabs";
import Sidebar from "components/shared/Sidebar";
import AddGroupForm from "./AddGroupForm";
import EditGroupForm from "./EditGroupForm";
import axios from "axios";
import cookie from "react-cookies";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";

export default function Group() {

    const [admins, setAdmins] = useState(null);
    const [groups, setGroups] = useState(null);
    const [students, setStudents] = useState(null);

    useEffect(() => {
        axios({
            method: "get",
            url: `${apiUrl}/comp-admin/students/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie.load('token')}`,
            },
        }).then(
            (res) => {
                setStudents(res.data)
            }, (err) => {
                //TODO: We have to update our Auth logic and using refresh token to refresh the access token.
                //TODO: Redirect the user to login with saving the location to return him back here again.
                console.log("ERROR: "+JSON.stringify(err.response.data));
            }
        );

        axios({
            method: "get",
            url: `${apiUrl}/comp-admin/comp-admins/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie.load('token')}`,
            },
        }).then(
            (res) => {
                setAdmins(res.data)
            }, (err) => {
                //TODO: We have to update our Auth logic and using refresh token to refresh the access token.
                //TODO: Redirect the user to login with saving the location to return him back here again.
                console.log("ERROR: "+JSON.stringify(err.response.data));
            }
        );

        axios({
            method: "get",
            url: `${apiUrl}/comp-admin/comp-group/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie.load('token')}`,
            },
        }).then(
            (res) => {
                setGroups(res.data)
            }, (err) => {
                //TODO: We have to update our Auth logic and using refresh token to refresh the access token.
                //TODO: Redirect the user to login with saving the location to return him back here again.
                console.log("ERROR: "+JSON.stringify(err.response.data));
            }
        );


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
