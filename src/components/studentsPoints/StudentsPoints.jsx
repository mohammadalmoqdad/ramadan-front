import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "components/shared/Sidebar";

import LoginFormContainer, { PointShow, LoginForm, Formm, DropdownListItem, DropdownList, DropdownDiv, Wird, DivPass, DivCenter, H3Login, InputSubmit, Form, FormInput, H1Login, DivTxtField, FormLabel, Span } from "./StudentsPoints.styles"
import Tabl from './table/Tabl.jsx';
export default function StudentsPoints() {
  const [usarName, setUsarName] = useState("");

  const selectedUser = (e) => {
    setUsarName(e.target.value)
    console.log(e.target.value);
  }

  return <LoginFormContainer>
    <PointShow>

      <LoginForm>
        <Wird>نقاط الطلاب</Wird>
        <Form>
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
          </Formm>
        </Form>

        <DropdownDiv className='DropdownDiv' onChange={selectedUser} >
          {/* <DropdownDivSelect>
        <I><AiFillCaretDown /></I>
        <Span>اختر المتسابق لتغيير كلمة المرور</Span>  .results[i].username
      </DropdownDivSelect> */}

          <DropdownList className='DropdownList'>

            <DropdownListItem>اختر المتسابق </DropdownListItem>
            <DropdownListItem >امين بسام صالح</DropdownListItem>
            <DropdownListItem value="bo">أسامة مؤمن أبوحمدان</DropdownListItem>
            <DropdownListItem value="An">الليدر أنس القاضي</DropdownListItem>

          </DropdownList>
        </DropdownDiv>

        <DropdownDiv className='DropdownDiv' onChange={selectedUser} >
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

        <Tabl />

      </LoginForm>
    </PointShow>
    <Sidebar />

  </LoginFormContainer>;
}
