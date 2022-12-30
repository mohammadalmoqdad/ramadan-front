import React, {useEffect, useState} from 'react'
import  {DivPass, Span} from "../Admins.styles";
import {addAdmin} from "../../../services/adminsServices";
import {
    DivTxtFieldnumber,
    LabelSoper,
    Checkboxes,
    DivTxtField,
    Form,
    FormInput,
    InputSubmit
} from "../../shared/styles";


export default function AddAdminForm(props) {

    const [username, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSuperAdmin, setSuperAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [unmatchedPasswords, setUnmatchedPasswords] = useState(false);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    const [isValidPassword, setValidPassword] = useState(true);
    const [isValidUserName, setValidUserName] = useState(true);

    useEffect(()=>{
            setMessages([]);
            setClassColor("");
        }
    ,[username, firstName, lastName, email, phoneNumber, password, confirmPassword, isSuperAdmin]);

    useEffect(()=>{
        resetAddAdminForm();
    },[props.reset]);

    const handleAddNewAdminSubmit = (e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setUnmatchedPasswords(true);
            setClassColor("red");
            return;
        }

        if(!isValidUserName || !isValidPassword ){      // TODO: add "|| !isValidPermissions" when it's supported in backend-side
            setClassColor("red");
            return;
        }

        let data={
            'password': password,
            'username': username,
            'first_name': firstName,
            'last_name': lastName,
            'permissions': "0",                       // TODO:  update it when it's supported from backend-side
            'is_super_admin': isSuperAdmin,
            'email': email,
            "phone_number": phoneNumber,
        };

        addAdmin(data,
            (res) => {
                if(res && res.status === 201){
                    resetAddAdminForm();

                    setClassColor("green");
                    setMessages(["تمت إضافة المسؤول بنجاح"]);

                    setTimeout(()=>{
                        props.setAdmins([...props.admins, data]);
                        setClassColor("");
                        setMessages([]);
                    },2000);
                }
            }, (err) => {
                let errMessages = [];
                errMessages.push(["لم تمت إضافة المسؤول"]);
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
    }

    const resetAddAdminForm = ()=>{
        setUserName("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuperAdmin(false);
        setValidPassword(true);
        setValidUserName(true);
        setUnmatchedPasswords(false);
    };


    const handleUserNameChange = (e)=>{
        let regex = new RegExp('^[\u0621-\u064Aa-zA-Z0-9+\-.@_]*$');
        if(!regex.test(e.target.value)){
            setValidUserName(false);
        }else{
            setValidUserName(true);
        }
        setUserName(e.target.value);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        if(e.target.value.length < 8){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
        setPassword(e.target.value);
    }

    const handleSuperAdminCheckChange = (e) => {
        setSuperAdmin(e.target.checked);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setUnmatchedPasswords(false);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePhoneNumberChange = (e) =>{
        setPhoneNumber(e.target.value);
    }

    return (
        <Form onSubmit={handleAddNewAdminSubmit}>
            <DivTxtField>
                <Span/>
                <FormInput onChange={handleUserNameChange} type="text" placeholder='اسم المستخدم' value={username} required/>
            </DivTxtField>
            {!isValidUserName &&
                <DivPass className={classColor}>اسم المستخدم يمكن أن يحتوي على الحروف والأرقام وبعض الرموز(+/-/_/./@)فقط</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" value={firstName} required/>
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" value={lastName} required/>
            </DivTxtField>

            <DivTxtField>
              <Span />
              <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email"  value={email} />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handlePhoneNumberChange} placeholder='رقم الهاتف' type="text"  value={phoneNumber} />
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handlePasswordChange} placeholder='كلمة المرور' type="password" value={password} required/>
            </DivTxtField>
            {!isValidPassword &&
                <DivPass className={classColor}>يجب أن تتكون كلمة المرور من 8 أحرف على الأقل</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleConfirmPasswordChange} placeholder='تأكيد كلمة المرور' type="password"
                           value={confirmPassword} required/>
            </DivTxtField>

            {unmatchedPasswords &&
                <DivPass className={classColor}>الإدخال غير صحيح، تأكد من مطابقة كلمة المرور</DivPass>
            }

            {/*TODO: Uncomment when it's supported in backend-side*/}

            {/*<DivTxtField>*/}
            {/*  <Span/>*/}
            {/*  <FormInput onChange={handlePermissionsChange} placeholder='الصلاحيات' type="text" required />*/}
            {/*</DivTxtField>*/}
            {/*{ !isValidPermissions &&*/}
            {/*    <DivPass>يجب أن تتكون الصلاحيات من أرقام وبينهم فواصل فقط وعددهم أقل من 10 أحرف</DivPass>*/}
            {/*}*/}

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" onChange={handleSuperAdminCheckChange}/> <LabelSoper>إضافته كمسؤول رئيسي</LabelSoper>
            </DivTxtFieldnumber>

            {
                messages.length > 0  &&
                    messages.map((message, index)=>{
                        return <DivPass className={classColor} key={index}>{message}</DivPass>
                    })

            }
            <InputSubmit type="submit" value='login'>إضافة مسؤول جديد</InputSubmit>

        </Form>

    );
}