import React, { useState, useEffect } from 'react';
import { AiFillCaretDown } from "react-icons/ai";

import SetPasswordStudentContainer, { Wird, InputSubmit, DivPass, FormInput, DivTxtField, Form, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./SetPasswordStudent.styles"
import './Setpass.css'

export default function SetPasswordStudent() {

  const [usarName, setUsarName] = useState("");

  const selectedUser = (e) => {
    setUsarName(e.target.value)
    console.log('e.target.value');
  }

  // onChange={(e)=>{
  //   const selectedUser =e.target.value;
  //   setUsarName(selectedUser)
  //   console.log(selectedUser);
  // }}

  return <SetPasswordStudentContainer>
    <DropdownDiv onChange={selectedUser} className='DropdownDiv'>
      <DropdownDivSelect>
        <I><AiFillCaretDown /></I>
        <Span>اختر المتسابق لتغيير كلمة المرور</Span>
      </DropdownDivSelect>
    
      <DropdownList className='DropdownList'>
      
        <DropdownListItem>اختر المتسابق لتغيير كلمة المرور</DropdownListItem>
        <DropdownListItem >امين بسام صالح</DropdownListItem>
        <DropdownListItem value="bo">أسامة مؤمن أبوحمدان</DropdownListItem>
        <DropdownListItem value="An">الليدر أنس القاضي</DropdownListItem>

      </DropdownList>

    </DropdownDiv>


    <StudantName>: اسم المتسابق <br />  {usarName} </StudantName>


    <DivCenter>

      <H3Login>أدخل كلمة مرور جديدة</H3Login>
      {/* <H1Login> </H1Login> */}

      <Form>
        <DivTxtField>
          <Span />
          <FormInput type="text" placeholder='أدخل كلمة مرور جديدة' required />
        </DivTxtField>

        <DivTxtField>
          <Span />
          <FormInput placeholder='تأكيد كلمة المرور' type="passowrd" required />
        </DivTxtField>

        {/* <DivPass>هل تواجه مشكلة تقنية أو نسيت كلمة المرور؟ تواصل مع الدعم الفني</DivPass> */}
        <InputSubmit type="submit" value='login' >تغيير كلمة المرور</InputSubmit>

      </Form>
    </DivCenter>

  </SetPasswordStudentContainer>;
}
