import React, {useEffect, useState} from 'react';
import {resetAdminPassword} from "../../../services/adminsServices";
import {DropdownDiv, DropdownList, DropdownListItem} from "../EditAdminForm/EditAdminForm.styles";
import {DivPass, DivTxtField, Form, FormInput, InputSubmit, Span} from "../Admins.styles";

export default function ResetAdminPasswordForm(props){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidPassword, setValidPassword] = useState(true);
    const [unmatchedPasswords, setUnmatchedPasswords] = useState(false);
    const [selectedAdminUsername, setSelectedAdminUsername] = useState("");
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");


    useEffect(()=>{
            setMessages([]);
            setClassColor("");
    },[selectedAdminUsername, password, confirmPassword]);

    useEffect(()=>{
        resetPasswordForm();
    },[props.reset]);

    const handleResetAdminPasswordSubmit = (e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setUnmatchedPasswords(true);
            setClassColor("red");
            return;
        }

        if(!isValidPassword ){
            setClassColor("red");
            return;
        }

        if(selectedAdminUsername === ""){
            setMessages(['يجب عليك إختار مسؤول إعادة تعيين كلمة المرور']);
            setClassColor("red");
            return;
        }

        resetAdminPassword(selectedAdminUsername, {password: password},
            (res)=>{
                if(res && res.status ===200){

                    setClassColor("green");
                    setMessages(['تم إعادة تعيين كلمة المرور بنجاح']);

                    setTimeout(()=>{
                        resetPasswordForm();
                        setClassColor("");
                        setMessages([]);
                    },2000);
                }
            },(err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم  إعادة تعيين كلمة المرور"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                        errMessages.push(`${obj[e]} : ${e}`);
                        }
                    )
                }
                setClassColor("red");
                setMessages(errMessages);
            }
        );

    };

    const resetPasswordForm  = ()=>{
        setPassword("");
        setConfirmPassword("");
        setSelectedAdminUsername("");
        setValidPassword(true);
        setUnmatchedPasswords(false);
        setMessages([]);
        setClassColor("");
    };
    const handlePasswordChange = (e) => {
        if(e.target.value.length < 8){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setUnmatchedPasswords(false);
    }

    const handleSelectedAdminChange = (e) =>{
        let admin = props.admins.filter(admin => admin.username === e.target.value)[0];
        if(admin){
            setSelectedAdminUsername(admin.username);

        } else {
            setSelectedAdminUsername("");
        }
        setValidPassword(true);
        setUnmatchedPasswords(false);
        setPassword("");
        setConfirmPassword("");

    };

    return (
        <Form onSubmit={handleResetAdminPasswordSubmit}>
            {
                props.admins && props.admins.length > 0 &&
                <DropdownDiv className="DropdownDiv">
                    <DropdownList className="DropdownList_editAdmin" onChange={handleSelectedAdminChange} value={selectedAdminUsername}>
                        <DropdownListItem>اختر المسؤول</DropdownListItem>
                        {
                            props.admins.map((admin, index) => (
                                <DropdownListItem key={index} value={admin.username}>{admin.first_name} {admin.last_name}</DropdownListItem>
                            ))
                        }
                    </DropdownList>
                </DropdownDiv>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handlePasswordChange} placeholder='كلمة المرور' type="password" value={password} required/>
            </DivTxtField>
            {!isValidPassword &&
                <DivPass>يجب أن تتكون كلمة المرور من 8 أحرف على الأقل</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleConfirmPasswordChange} placeholder='تأكيد كلمة المرور' type="password"
                           value={confirmPassword} required/>
            </DivTxtField>

            {unmatchedPasswords &&
                <DivPass>الإدخال غير صحيح، تأكد من مطابقة كلمة المرور</DivPass>
            }

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>إعادة نعيين</InputSubmit>

        </Form>
    );
}