import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "components/shared/Sidebar";

import { retrieveStudents } from "../../services/studentsServices";

import LoginFormContainer,
{
  PointShow,
  LoginForm,
  Formm,
  DropdownListItem,
  DropdownList,
  DropdownDiv,
  Wird,
  // DivPass,
  DivCenter,
  H3Login,
  // InputSubmit,
  Form,
  // FormInput,
  H1Login,
  // DivTxtField,
  // FormLabel,
  // Span
} from "./StudentsPoints.styles"

import Tabl from './table/Tabl.jsx';


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
    // console.log(e.target.value);
  }
  // console.log(usarName);

  return <LoginFormContainer>
    <PointShow>

      <LoginForm>
        <Wird>نقاط الطلاب</Wird>
        {/* <Form>
          <Formm>
            <DivCenter>
              <H1Login>عدد الصفحات المقروءة<Wird>200</Wird></H1Login>
              <H3Login>صفحة قران</H3Login>
            </DivCenter>

            <DivCenter>
              <H1Login>عدد طلبة المسابقة<Wird>25</Wird> </H1Login>
              <H3Login>طالب</H3Login>
            </DivCenter>
          </Formm>
          <Formm>
            <DivCenter>
              <H1Login>المركز الأول لليوم السابق<Wird>أنس القاضي</Wird> </H1Login>
              <H3Login>مبارك</H3Login>
            </DivCenter>

            <DivCenter>
              <H1Login>التقويم الرمضاني<Wird>1</Wird> </H1Login>
              <H3Login>اللهم تقبل</H3Login>
            </DivCenter>
          </Formm> /*/}
        {/* </Form> */}
        {Students && Students.count > 0 &&
          <>
            <DropdownDiv className='DropdownDiv' onChange={selectedUser} >
              <DropdownList className='DropdownList'>

                <DropdownListItem key={0} value="">اختر المتسابق </DropdownListItem>
                {
                  Students.results.map((student, index) => (
                    <DropdownListItem key={index + 1}
                      value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                  ))
                }
              </DropdownList>
            </DropdownDiv>
          </>
        }

        <DropdownDiv className='DropdownDiv' >
          {/* <DropdownDivSelect>
        <I><AiFillCaretDown /></I>
        <Span>اختر المتسابق لتغيير كلمة المرور</Span>  .results[i].username
      </DropdownDivSelect> */}

          <DropdownList className='DropdownList'>

            <DropdownListItem>اختر اليوم من رمضان</DropdownListItem>
            <DropdownListItem >1 رمضان</DropdownListItem>
            <DropdownListItem value="bo">2 رمضان</DropdownListItem>
            <DropdownListItem value="An">3 رمضان</DropdownListItem>

          </DropdownList>

        </DropdownDiv>

        <Tabl usarName={usarName} />

      </LoginForm>
    </PointShow>
    <Sidebar />

  </LoginFormContainer>;
}
