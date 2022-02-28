import React, { useState} from 'react'
import  {
    Checkboxes,
    DivPass,
    DivTxtField,
    DropdownDivSelect,
    Form,
    FormInput,
    InputSubmit,
    LabelSuper,
    Span,
    DivMultiselect
} from "./Admins.styles";

import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import cookie from "react-cookies";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";


export default function AddAdminForm(props) {

    const [username, setUserName] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [selectedManagedGroups, setSelectedManagedGroups] = useState([]);
    const [isSuperAdmin, setSuperAdmin] = useState(false);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [unmatchedPasswords, setUnmatchedPasswords] = useState(false);
    const [message, setMessage] = useState("");
    const [isValidPassword, setValidPassword] = useState(true);
    const [isValidUserName, setValidUserName] = useState(true);

    const handleAddNewAdminSubmit = (e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setUnmatchedPasswords(true);
            return;
        }

        if(!isValidUserName || !isValidPassword ){      // TODO: add "|| !isValidPermissions" when it's supported in backend-side
            return;
        }

        axios.post(
            `${apiUrl}/comp-admin/comp-admins/`,
            {
                'password': password,
                'username': username,
                'first_name': firstName,
                'last_name': lastName,
                'permissions': "0",                       // TODO:  update it when it's supported from backend-side
                'is_super_admin': isSuperAdmin,
                'managed_groups': selectedManagedGroups
                // 'email': email,                           TODO: uncomment it when it's supported from backend-side
            },{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookie.load('token')}`
                }
            }
        ).then(
            (res)=>{
                if(res && res.status === 201){
                    setMessage("تمت إضافة المسؤول بنجاح");
                } else{
                    setMessage("لم تمت إضافة المسؤول");
                }
            },
            (err)=>{
                if(err && err.response && err.response.data && err.response.data.includes('user with that username already exists')){
                    setMessage("اسم المستخدم موجود، لم تمت إضافة المسؤول")
                } else{
                    setMessage("لم تمت إضافة المسؤول");
                }
                console.log("ERROR: ",err);
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
    }

    const handleUpdateSelectedGroupsChange = (e) =>{
        let selectedGroups =[];

        for(let i=0; i < e.length ; i++){
            selectedGroups.push(e[i].id);
        }
        setSelectedManagedGroups(selectedGroups);
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

            {/*TODO: Uncomment when it's supported in backend-side*/}
            {/*<DivTxtField>*/}
            {/*  <Span />*/}
            {/*  <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" required />*/}
            {/*</DivTxtField>*/}

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

            {
                props.managedGroups && props.managedGroups.count > 0 &&
                <DropdownDivSelect>
                    <LabelSuper>اختر المجموعات المسؤول عنها</LabelSuper>
                    <DivMultiselect>
                        <Multiselect
                            onSelect={handleUpdateSelectedGroupsChange}
                            onRemove={handleUpdateSelectedGroupsChange}
                            options={props.managedGroups.results}
                            displayValue='name'
                            style={{textAlign: 'right'}}
                            placeholder=""
                            popupwidth='5rem'
                            popupHeight='1rem'
                        />
                    </DivMultiselect>
                </DropdownDivSelect>
            }

            <DivTxtField>
                <LabelSuper>إضافته كمسؤول رئيسي؟ </LabelSuper><Checkboxes onChange={handleSuperAdminCheckChange} type="checkbox"/>
            </DivTxtField>

            {message !== "" &&
                <DivPass>{message}</DivPass>
            }
            <InputSubmit type="submit" value='login'>إضافة مسؤول جديد</InputSubmit>

        </Form>

    );
}