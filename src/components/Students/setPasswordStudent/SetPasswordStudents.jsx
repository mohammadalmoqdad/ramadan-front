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
    const [classColor, setClassColor] = useState("");
    const [isValidPassword, setValidPassword] = useState(true);


    useEffect(() => {
        setMessages([]);
        setClassColor("");
    }, [userName, PasswordStudent1, PasswordStudent2]);

    useEffect(()=>{
        resetStudentChangePasswordForm();
    },[props.reset]);

    const resetStudentChangePasswordForm = ()=>{
        setUserName("");
        setPasswordStudent1("");
        setPasswordStudent2("");
        setPasswordStudentEqual(true);
        setValidPassword(true);
    };

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
            setClassColor("red");
            return;
        }

        if (userName === "") {
            setMessages(["يجب عليك اختيار متسابق لتغيير كلمة المرور"]);
            setClassColor("red");
            return;
        }

        let PasswordStudent = {
            password: PasswordStudent1,
        };

        setStudentPassword(
            userName,
            PasswordStudent,
            (res) => {
                if(res && res.status === 200){
                    setMessages(['تم تغيير كلمة المرور بنجاح']);
                    setClassColor("green");
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push('لم يتم تغيير كلمة المرور');
                if (err.response.data) {
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                        errMessages.push(`${obj[e]} : ${e}`);
                        }
                    )
                }
                setClassColor("red");
                setMessages(errMessages)
            }
        );

    };

    return (
        <Form onSubmit={Set_Pas_St_Fun}>

            <DropdownDiv className="DropdownDiv">
                <DropdownList className="DropdownList" onChange={selectedUser} value={userName}>
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
                    placeholder="ادخل كلمة مرور جديدة"
                    value={PasswordStudent1}
                    required
                />
            </DivTxtField>
            {!isValidPassword &&
                <DivPass className={classColor}>يجب أن تتكون كلمة المرور من 8 أحرف على الأقل</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput
                    onChange={handleChangeStudentPassword2}
                    placeholder="تأكيد كلمة المرور"
                    type="password"
                    value={PasswordStudent2}
                    required
                />
            </DivTxtField>

            {!PasswordStudentEqual &&
                <DivPass className={classColor}>
                    الإدخال غير صحيح، تأكد من مطابقة كلمة المرور
                </DivPass>
            }

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value="login">
                تغيير كلمة المرور
            </InputSubmit>
        </Form>
    );
}