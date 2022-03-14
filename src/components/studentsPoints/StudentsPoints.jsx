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
  const [usarName, setUsarName] = useState("");

  useEffect(() => {
    // successCallback,
    // faiCallback,
    retrieveStudents(
      (res) => {
        setStudents(res.data);
        // console.log(res.data);
        // console.log(Students);
      }, (err) => {
        console.log("ERROR: " + JSON.stringify(err.response.data));
      }
    );

  }, []);


  const selectedUser = (e) => {
    setUsarName(e.target.value)
    console.log(e.target.value);
  }
  // console.log(usarName);

  return <LoginFormContainer>
    <PointShow>

      <LoginForm>
        <Wird>نقاط الطلاب</Wird>
        <DropdownDiv className='DropdownDiv' onChange={selectedUser} >
          <DropdownList className='DropdownList'>
          <DropdownListItem key={0} value="">اختر المتسابق </DropdownListItem>
            {Students && Students.count > 0 &&
              <>
                {
                  Students.results.map((student, index) => (
                    <DropdownListItem key={index + 1}
                      value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                  ))
                }
              </>
            }
          </DropdownList>
        </DropdownDiv>


        <DropdownDiv className='DropdownDiv' >
          <DropdownList className='DropdownList'>
            <DropdownListItem>اختر اليوم من رمضان</DropdownListItem>
            <DropdownListItem >1 رمضان</DropdownListItem>
            <DropdownListItem value="bo">2 رمضان</DropdownListItem>
            <DropdownListItem value="An">3 رمضان</DropdownListItem>

          </DropdownList>

        </DropdownDiv>

        <TableData />

      </LoginForm>
    </PointShow>
    <Sidebar />

  </LoginFormContainer>;
}
