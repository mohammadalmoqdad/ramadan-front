import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AiFillCaretDown } from "react-icons/ai";

import SetPasswordStudentContainer, { Wird, InputSubmit, DivPass, FormInput, DivTxtField, Form, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./SetPasswordStudent.styles"
import './Setpass.css'
let AccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1MjY1NTQ0LCJpYXQiOjE2NDUyNjUyNDQsImp0aSI6ImVlMTlkMDhjNzBmYjQzYzU5ODA5NDdiNTM5OWVmNmMwIiwidXNlcl9pZCI6MX0.5zR3j7_787e7_AJ6tmsOgENuHHk6IEvkct55jCb5J9s'

// we have 3 TODO
// TODO 1 : get the token from Cookies and let it to AccessToken
// NOTE : when I test the get, put method the token need change If we had an error, I dont know why, also the useEffct was reendering.

export default function SetPasswordStudents() {

  const [usarName, setUsarName] = useState("");
  const [yes, setyes] = useState("no");


  const [userNameData, setuserNameData] = useState(""); // NOTE : this is hook to change and add stydent names and API, I dont know if I need it

  const [PasswordStudent1, setPasswordStudent1] = useState("");
  const [PasswordStudent2, setPasswordStudent2] = useState("");
  const [PasswordStudentEqual, setPasswordStudentEqual] = useState("");

  const selectedUser = (e) => {
    setUsarName(e.target.value)
    console.log(e.target.value);
  }

  const handleChangeStudentPassowrd1 = (e) => {
    setPasswordStudent1(e.target.value)
  }
  const handleChangeStudentPassowrd2 = (e) => {
    setPasswordStudent2(e.target.value)
  }

  useEffect((e) =>{
    
    axios({
    method: 'get',
    url: (`https://ramadan-comp-rest.herokuapp.com/comp-admin/students/`),
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${AccessToken}`
    }})
    .then(res => {
      console.log(res.data)
      setuserNameData(res.data);
      // return (res.data)
      setyes('yes')
    })
  },[])

  const Set_Pas_St_Fun = async (e) => {
    e.preventDefault();
    
    if (PasswordStudent1 !== PasswordStudent2) {
      setPasswordStudentEqual('false')
      // console.log(PasswordStudentEqual);
    } else {
      let PasswordStudent = {
        "password": PasswordStudent1
      }
      await axios({
        method: 'put',
        url: (`https://ramadan-comp-rest.herokuapp.com/comp-admin/students/st1/change_password/`),
        data: PasswordStudent,
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${AccessToken}`
        }

        // TODO 2 : make the student name dynamic from url, we need to change the st1

      }).then(res => {
        console.log(res.data)
        // return (res.data)
      })
      setPasswordStudentEqual('true')
      // console.log(PasswordStudentEqual);
    }
  }
  // console.log(userNameData.results[0].username);

  return <SetPasswordStudentContainer>
    <DropdownDiv className='DropdownDiv' onChange={selectedUser} >
      {/* <DropdownDivSelect>
        <I><AiFillCaretDown /></I>
        <Span>اختر المتسابق لتغيير كلمة المرور</Span>  .results[i].username
      </DropdownDivSelect> */}

      <DropdownList className='DropdownList'>

        <DropdownListItem>اختر المتسابق لتغيير كلمة المرور</DropdownListItem>
        <>{

          // TODO 3 : type map method to render the userName from the git method

          // console.log(userNameData.results[0].username)
          yes=='yes'? userNameData.map((i)=> <DropdownListItem >{i.results[i].username}</DropdownListItem>):''
        }</>
        <DropdownListItem >امين بسام صالح</DropdownListItem>
        <DropdownListItem value="bo">أسامة مؤمن أبوحمدان</DropdownListItem>
        <DropdownListItem value="An">الليدر أنس القاضي</DropdownListItem>

      </DropdownList>

    </DropdownDiv>


    <StudantName>: اسم المتسابق <br />  {usarName} </StudantName>


    <DivCenter>

      <H3Login>أدخل كلمة مرور جديدة</H3Login>
      {/* <H1Login> </H1Login> */}

      <Form onSubmit={Set_Pas_St_Fun}>
        <DivTxtField>
          <Span />
          <FormInput onChange={handleChangeStudentPassowrd1} type="passowrd" placeholder='أدخل كلمة مرور جديدة' required />
        </DivTxtField>

        <DivTxtField>
          <Span />
          <FormInput onChange={handleChangeStudentPassowrd2} placeholder='تأكيد كلمة المرور' type="passowrd" required />
        </DivTxtField>

        <>{PasswordStudentEqual === '' ?
          <DivPass></DivPass> :
           <>{PasswordStudentEqual !== 'false' ?
          <DivPass>تم تغيير كلمة المرور بنجاح</DivPass> :
          <DivPass>الإدخال غير صحيح، تأكد من مطابقة كلمة المرور</DivPass>}</>
          }</>

        <InputSubmit type="submit" value='login' >تغيير كلمة المرور</InputSubmit>

      </Form>
    </DivCenter>

  </SetPasswordStudentContainer>;
}
