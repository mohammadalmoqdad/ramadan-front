import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "components/shared/Sidebar";


import SetPasswordStudentContainer, {
  InputSubmit,
  DivPass,
  FormInput,
  DivTxtField,
  Form,
  H3Login,
  DivCenter,
  StudantName,
  DropdownListItem,
  DropdownList,
  DropdownDiv,
  Span,
  SetPasswordStudent,
} from "./SetPasswordStudent.styles";
import "./Setpass.css";
import cookie from "react-cookies";
let AccessToken = cookie.load("token");

// we have 3 TODO
// TODO 1 : get the token from Cookies and let it to AccessToken
// NOTE : when I test the get, put method the token need change If we had an error, I dont know why, also the useEffect was rendering.

export default function SetPasswordStudents() {
  const [userName, setUserName] = useState("");

  const [PasswordStudent1, setPasswordStudent1] = useState("");
  const [PasswordStudent2, setPasswordStudent2] = useState("");
  const [PasswordStudentEqual, setPasswordStudentEqual] = useState(true);
  const [mhdArray, setMhdarray] = useState([]);
  const [message, setMessage] = useState("");

  const selectedUser = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeStudentPassword1 = (e) => {
    setPasswordStudent1(e.target.value);
  };
  const handleChangeStudentPassword2 = (e) => {
    if(PasswordStudent1 !== PasswordStudent2){
      setPasswordStudentEqual(false);
    }else{
      setPasswordStudentEqual(true);
    }
    setPasswordStudent2(e.target.value);
  };
  useEffect(() => {
    let arr = [];
    // console.log(AccessToken);
    axios({
      method: "get",
      url: `https://ramadan-comp-rest.herokuapp.com/comp-admin/students/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
    }).then((res) => {
      console.log(res.data);
      for (let i = 0; i < res.data.results.length; i++) {
        arr.push(res.data.results[i].first_name+" "+res.data.results[i].last_name);
      }
      setMhdarray(arr);
      console.log(mhdArray);
    }, (err) => {
      //TODO: We should update our Auth logic and using refresh token to refresh the access token
      //TODO: Redirect the user to login with saving the location to return him back here again
      console.log("ERROR: "+JSON.stringify(err.response.data));
    });
  }, []);

  const Set_Pas_St_Fun = async (e) => {
    e.preventDefault();

    if (!PasswordStudentEqual) {
      return;
    }

    if (userName === 'اختر المتسابق لتغيير كلمة المرور') {
      setMessage("يجب عليك اختيار متسابق لتغيير كلمة المرور");
      return;
    }

    let PasswordStudent = {
      password: PasswordStudent1,
    };

    await axios({
      method: "put",
      url: `https://ramadan-comp-rest.herokuapp.com/comp-admin/students/${userName}/change_password/`,
      data: PasswordStudent,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
    }).then(
        (res) => {
          console.log(res.data);
          setMessage('تم تغيير كلمة المرور بنجاح')
        }, (err) => {
          console.log("ERROR: "+JSON.stringify(err.response.data));
        }
    );
  };

  return (
    <SetPasswordStudentContainer>
      <SetPasswordStudent>
      <DropdownDiv className="DropdownDiv" onChange={selectedUser}>
        <DropdownList className="DropdownList">
          <DropdownListItem>اختر المتسابق لتغيير كلمة المرور</DropdownListItem>
          {
            // TODO 3 : type map method to render the userName from the git method

            mhdArray.map((item, index) => (
                <DropdownListItem key={index}>{item}</DropdownListItem>
            ))
          }
        </DropdownList>
      </DropdownDiv>

      <StudantName>
        : اسم المتسابق <br /> {userName}{" "}
      </StudantName>

      <DivCenter>
        <H3Login>أدخل كلمة مرور جديدة</H3Login>

        <Form onSubmit={Set_Pas_St_Fun}>
          <DivTxtField>
            <Span />
            <FormInput
              onChange={handleChangeStudentPassword1}
              type="password"
              placeholder="أدخل كلمة مرور جديدة"
              required
            />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput
              onChange={handleChangeStudentPassword2}
              placeholder="تأكيد كلمة المرور"
              type="password"
              required
            />
          </DivTxtField>

          { !PasswordStudentEqual &&
              <DivPass>
                الإدخال غير صحيح، تأكد من مطابقة كلمة المرور
              </DivPass>
          }

          { message !== "" &&
            <DivPass>{message}</DivPass>
          }
          <InputSubmit type="submit" value="login">
            تغيير كلمة المرور
          </InputSubmit>
        </Form>
      </DivCenter>
      </SetPasswordStudent>
      <Sidebar/>

    </SetPasswordStudentContainer>
  );
}
