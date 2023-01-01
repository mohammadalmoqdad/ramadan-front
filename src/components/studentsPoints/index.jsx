import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "components/shared/Sidebar";

import { retrieveStudents } from "../../services/studentsServices";
import TotalByPoints from './TotalByDayChart';
import TotalByLabelChars from './TotalByLabelChart'
import LoginFormContainer,
{
  PointShow,
  LoginForm,
  DropdownList,
  DropdownDiv,
  Wird,
  SelectInputContainer,
  ChartsContainer
} from "./StudentsPoints.styles"
import {DropdownListItem} from "../shared/styles";

import TableData from './table';
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader";


export default function StudentsPoints() {

  const [Students, setStudents] = useState(null);
  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");
  const [studentsResultsFlag, SetStudentsResultsFlag] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(!cookie.load("token")) {
      navigate("/login", {state:{redirectTo: "/StudentsPoints"}});
      return;
    }

    setLoading(true);
    retrieveStudents(
      (res) => {
        setStudents(res.data.results);
        setLoading(false);
      }, (err) => {
        console.log("ERROR: " + JSON.stringify(err.response.data));
        setLoading(false);
      }
    );

  }, []);


  const handleSelectedUser = (e) => {
    setUsername(e.target.value)
  }

  const handleDayChange = (e) => {
    setDay(e.target.value)
  }

  if(loading) {
    return (
        <main>
          <Loader />
        </main>
    );
  }

  return <LoginFormContainer>
    <PointShow>
      <LoginForm>
        {
          Students?.length === 0 || !Students ? <p style={{ textAlign: 'center', margin: 0 }}> لا يوجد طلاب لعرضهم </p> : <>
            {studentsResultsFlag ?
              <Wird onClick={() => SetStudentsResultsFlag(!studentsResultsFlag)}>اضغط لعرض الجدول</Wird> :
              <Wird onClick={() => SetStudentsResultsFlag(!studentsResultsFlag)}>اضغط لعرض الرسم البياني</Wird>
            }
            <SelectInputContainer>

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


              {!studentsResultsFlag &&
                <DropdownDiv className='DropdownDiv' >
                  <DropdownList className='DropdownList' onChange={handleDayChange}>
                    <DropdownListItem key={0} value="">اختر اليوم من رمضان</DropdownListItem>
                    {
                      Array(30).fill(undefined).map((val, idx) => <DropdownListItem key={idx+1} value={idx+1}>{idx+1} رمضان</DropdownListItem>)
                    }
                  </DropdownList>

                </DropdownDiv>
              }

            </SelectInputContainer>
            {studentsResultsFlag &&
              <ChartsContainer>
                <TotalByPoints selectedUser={username} />
                <TotalByLabelChars selectedUser={username} />
              </ChartsContainer>
            }

            {!studentsResultsFlag &&
              <TableData selectedUser={username} selectedDay={day} />
            }

          </>
        }
      </LoginForm>

    </PointShow>
    <Sidebar />

  </LoginFormContainer >;
}
