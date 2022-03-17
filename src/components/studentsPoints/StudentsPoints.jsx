import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "components/shared/Sidebar";

import { retrieveStudents } from "../../services/studentsServices";

import LoginFormContainer,
{
  PointShow,
  LoginForm,
  DropdownListItem,
  DropdownList,
  DropdownDiv,
  Wird
} from "./StudentsPoints.styles"

import TableData from './table/Table.jsx';


export default function StudentsPoints() {

  const [Students, setStudents] = useState(null);
  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    retrieveStudents(
      (res) => {
        setStudents(res.data);
      }, (err) => {
        console.log("ERROR: " + JSON.stringify(err.response.data));
      }
    );

  }, []);


  const handleSelectedUser = (e) => {
    setUsername(e.target.value)
  }

  const handleDayChange = (e) => {
    setDay(e.target.value)
  }

  return <LoginFormContainer>
    <PointShow>

      <LoginForm>
        <Wird>نقاط الطلاب</Wird>
        <DropdownDiv className='DropdownDiv' >
          <DropdownList className='DropdownList' onChange={handleSelectedUser}>
            <DropdownListItem key={0} value="">اختر المتسابق </DropdownListItem>
            {Students &&
              <>
                {
                  Students.map((student, index) => (
                    <DropdownListItem key={index + 1}
                      value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                  ))
                }
              </>
            }
          </DropdownList>
        </DropdownDiv>


        <DropdownDiv className='DropdownDiv' >
          <DropdownList className='DropdownList' onChange={handleDayChange}>
            <DropdownListItem>اختر اليوم من رمضان</DropdownListItem>
            {
              Array(30).fill(undefined).map((val, idx) => <DropdownListItem key={idx} value={idx}>{idx} رمضان</DropdownListItem>)
            }
          </DropdownList>

        </DropdownDiv>

        <TableData selectedUser={username} selectedDay={day} />

      </LoginForm>
    </PointShow>
    {/* <Sidebar /> */}

  </LoginFormContainer >;
}
