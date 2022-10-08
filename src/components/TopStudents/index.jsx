import React, {useEffect, useState} from 'react';
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
import {retrieveTopStudents} from "../../services/competitionsServices";
import Loader from "../Loader";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import Container, {DropdownListItem, Span} from "../Admins/Admins.styles";
import {TopStudentsDropdownList, TopStudentsSpan} from "./TopStudents.styles";
export default  function TopStudents() {

    const [topStudents, setTopStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/TopStudents"}});
            return;
        }

        setLoading(true);
        retrieveTopStudents(
            (res) => {
                setTopStudents(res.data);
                setLoading(false);
            }, (err) => {
                console.log("Failed to retrieve top students: " + JSON.stringify(err.response.data));
                setLoading(false);
            }
        );
    }, []);

    if(loading) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

    if(topStudents.length === 0){
        return <H5>لا يوجد بيانات لعرضها</H5>
    }

    let last = 1;
    return (
        <Container>
            <TopStudentsDropdownList className='DropdownList'>
                <DropdownListItem  className="title"><Span>أوائل المسابقة</Span></DropdownListItem>
                <div className="dropdown-scroll-container">
                    {

                        topStudents.map((student, index) => {
                            if(index ===0){
                                last = 1;
                            }
                            else if(index > 0 && student.total_points !== topStudents[index-1].total_points){
                                last++;
                            }
                            return (
                                <DropdownListItem key={index}>

                                    <TopStudentsSpan className="points" ><b>{student.total_points}</b> نقطة </TopStudentsSpan>

                                    { student.first_name.length > 0 || student.last_name.length > 0
                                        ?
                                        <TopStudentsSpan className="name">{student.first_name} {student.last_name}</TopStudentsSpan>
                                        :
                                        <TopStudentsSpan className="name">{student.username}</TopStudentsSpan>
                                    }

                                    <TopStudentsSpan className={'place' + (last<=3 ? ` num${last}`:"")}> المركز <b>{last}</b></TopStudentsSpan>

                                </DropdownListItem>
                            )
                        })
                    }
                </div>
            </TopStudentsDropdownList>
        </Container>
    );
}