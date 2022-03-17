import React, {useState, useEffect} from "react";

import {
    InputSubmit,
    DivPass,
    FormInput,
    DivTxtField,
    Form,
    DropdownListItem,
    DropdownList,
    DropdownDiv,
    Span,
} from "./SetPasswordStudent.styles";
import "./Setpass.css";
import {setStudentPassword} from "../../../services/studentsServices";

export default function SetPasswordStudents(props) {
    const [userName, setUserName] = useState("");
    const [PasswordStudent1, setPasswordStudent1] = useState("");
    const [PasswordStudent2, setPasswordStudent2] = useState("");
    const [PasswordStudentEqual, setPasswordStudentEqual] = useState(true);
    const [messages, setMessages] = useState([]);
    const [isValidPassword, setValidPassword] = useState(true);


    useEffect(() => {

        setMessages([]);
    }, [userName, PasswordStudent1, PasswordStudent2]);


    const selectedUser = (e) => {
        setUserName(e.target.value);
    };

    const handleChangeStudentPassword1 = (e) => {
        if (e.target.value.length < 8) {
            setValidPassword(false);
        } else {
            setValidPassword(true);
        }
        setPasswordStudent1(e.target.value);
    };

    const handleChangeStudentPassword2 = (e) => {
        setPasswordStudent2(e.target.value);
        if (PasswordStudent1 === e.target.value) {
            setPasswordStudentEqual(true);
        } else {
            setPasswordStudentEqual(false);
        }
    };


    const Set_Pas_St_Fun = async (e) => {
        e.preventDefault();

        if (!PasswordStudentEqual || !isValidPassword) {
            return;
        }

        if (userName === "") {
            setMessages(["يجب عليك اختيار متسابق لتغيير كلمة المرور"]);
            return;
        }

        let PasswordStudent = {
            password: PasswordStudent1,
        };

        setStudentPassword(
            userName,
            PasswordStudent,
            (res) => {
                setMessages(['تم تغيير كلمة المرور بنجاح']);
                console.log(res.data);
            },
            (err) => {
                let errMessages = [];
                errMessages.push('لم يتم تغيير كلمة المرور');
                if (err.response.data) {
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages)
            }
        );

    };

    return (
        <Form onSubmit={Set_Pas_St_Fun}>

            <DropdownDiv className="DropdownDiv" onChange={selectedUser}>
                <DropdownList className="DropdownList">
                    <DropdownListItem key={0} value="">اختر الطالب</DropdownListItem>
                    {
                        props.students.map((student, index) => (
                            <DropdownListItem key={index + 1}
                                              value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                        ))
                    }
                </DropdownList>
            </DropdownDiv>

            <DivTxtField>
                <Span/>
                <FormInput
                    onChange={handleChangeStudentPassword1}
                    type="password"
                    placeholder="أدخل كلمة مرور جديدة"
                    required
                />
            </DivTxtField>
            {!isValidPassword &&
                <DivPass>يجب أن تتكون كلمة المرور 8 أحرف على الأقل</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput
                    onChange={handleChangeStudentPassword2}
                    placeholder="تأكيد كلمة المرور"
                    type="password"
                    required
                />
            </DivTxtField>

            {!PasswordStudentEqual &&
                <DivPass>
                    الإدخال غير صحيح، تأكد من مطابقة كلمة المرور
                </DivPass>
            }

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value="login">
                تغيير كلمة المرور
            </InputSubmit>
        </Form>
    );
}