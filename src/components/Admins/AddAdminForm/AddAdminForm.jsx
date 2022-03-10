import React, {useEffect, useState} from 'react'
import  {
    Checkboxes,
    DivPass,
    DivTxtField,
    Form,
    FormInput,
    InputSubmit,
    LabelSuper,
    Span
} from "../Admins.styles";
import {addAdmin} from "../../../services/adminsServices";


export default function AddAdminForm(props) {

    const [username, setUserName] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [isSuperAdmin, setSuperAdmin] = useState(false);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [unmatchedPasswords, setUnmatchedPasswords] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isValidPassword, setValidPassword] = useState(true);
    const [isValidUserName, setValidUserName] = useState(true);

    useEffect(()=>{
            setMessages([]);
        }
    ,[username, firstName, lastName, email, phoneNumber, password, confirmPassword]);

    const handleAddNewAdminSubmit = (e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setUnmatchedPasswords(true);
            return;
        }

        if(!isValidUserName || !isValidPassword ){      // TODO: add "|| !isValidPermissions" when it's supported in backend-side
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
                    props.setAdmins([...props.admins, data])
                    setMessages(["تمت إضافة المسؤول بنجاح"]);
                }
            }, (err) => {
                let errMessages = [];
                errMessages.push(["لم تمت إضافة المسؤول"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages);
            }
        );
    }

    const handleUserNameChange = (e)=>{
        let regex = new RegExp('^[\u0621-\u064Aa-zA-Z0-9+-.@_]*$');
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
                <FormInput onChange={handleUserNameChange} type="text" placeholder='اسم المستخدم' required/>
            </DivTxtField>
            {!isValidUserName &&
                <DivPass>اسم المستخدم يمكن أن يحتوي على الحروف والأرقام وبعض الرموز(+/-/_/./@)فقط</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" required/>
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" required/>
            </DivTxtField>

            <DivTxtField>
              <Span />
              <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" required />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handlePhoneNumberChange} placeholder='رقم الهاتف' type="text" required />
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handlePasswordChange} placeholder='كلمة المرور' type="password" required/>
            </DivTxtField>
            {!isValidPassword &&
                <DivPass>يجب أن تتكون كلمة المرور 8 أحرف على الأقل</DivPass>
            }

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleConfirmPasswordChange} placeholder='تأكيد كلمة المرور' type="password"
                           required/>
            </DivTxtField>

            {unmatchedPasswords &&
                <DivPass>الإدخال غير صحيح، تأكد من مطابقة كلمة المرور</DivPass>
            }

            {/*TODO: Uncomment when it's supported in backend-side*/}

            {/*<DivTxtField>*/}
            {/*  <Span/>*/}
            {/*  <FormInput onChange={handlePermissionsChange} placeholder='الصلاحيات' type="text" required />*/}
            {/*</DivTxtField>*/}
            {/*{ !isValidPermissions &&*/}
            {/*    <DivPass>يجب أن تتكون الصلاحيات من أرقام وبينهم فواصل فقط وعددهم أقل من 10 أحرف</DivPass>*/}
            {/*}*/}

            <DivTxtField>
                <LabelSuper>إضافته كمسؤول رئيسي؟ </LabelSuper><Checkboxes onChange={handleSuperAdminCheckChange} type="checkbox"/>
            </DivTxtField>

            {
                messages.length > 0  &&
                    messages.map((message, index)=>{
                        return <DivPass key={index}>{message}</DivPass>
                    })

            }
            <InputSubmit type="submit" value='login'>إضافة مسؤول جديد</InputSubmit>

        </Form>

    );
}