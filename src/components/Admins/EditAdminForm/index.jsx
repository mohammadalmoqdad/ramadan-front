import React, { useEffect, useState } from 'react';
import {
    DivPass,
    Span
} from "../Admins.styles";
import {
    DivTxtFieldnumber,
    LabelSoper,
    Checkboxes,
    DivTxtField,
    Form,
    FormInput,
    InputSubmit,
    DropdownListItem
} from "../../shared/styles";

import {DropdownDiv, DropdownList} from "./EditAdminForm.styles";
import {updateAdmin} from "../../../services/adminsServices";
import {useAdminContext} from "../../../contexts/AdminContext";

export default function EditGroupForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    const [isSuperAdmin, setSuperAdmin] = useState(false);
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedUserName, setSelectedUserName] = useState("");
    const context = useAdminContext();

    useEffect(() => {
        setMessages([]);
        setClassColor("");
    }, [firstName, lastName, email, phoneNumber, selectedUserName]);

    useEffect(()=>{
        resetEditAdminForm();
    },[props.reset]);

    const handleEditAdminSubmit = (e) => {
        e.preventDefault();


        updateAdmin(selectedUserName, {
            'username': selectedUserName,
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'phone_number': phoneNumber,
            'is_super_admin': isSuperAdmin
        },
            (res) => {
                if (res && res.status === 200) {
                    let updatedAdmin = props.admins.filter(admin => admin.username === selectedUserName)[0];
                    updatedAdmin.first_name = firstName;
                    updatedAdmin.last_name = lastName;
                    updatedAdmin.email = email;
                    updatedAdmin.phone_number = phoneNumber;
                    updatedAdmin.is_super_admin = isSuperAdmin;

                    resetEditAdminForm();

                    setClassColor("green");
                    setMessages(["تم تعديل المسؤول"]);

                    setTimeout(()=>{
                        props.setAdmins([...props.admins.filter(admin => admin.username !== selectedUserName), updatedAdmin]);
                        if(Object.keys(context.adminInfo).length > 0 && context.adminInfo.person.username === selectedUserName){
                            context.setAdminInfo(updatedAdmin);
                        }
                        setClassColor("");
                        setMessages([]);
                    },2000);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push(["لم يتم تعديل المسؤول"]);
                if (err.response.data) {
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

    const resetEditAdminForm = ()=>{
        setSelectedUserName("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setSuperAdmin(false);
    };

    const handleSuperAdminCheckChange = (e) => {
        setSuperAdmin(e.target.checked);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };


    const handleAdminSelectChange = (e) =>{
        let admin = props.admins.filter(admin => admin.username === e.target.value)[0];
        if(admin){
            setSelectedUserName(admin.username);
            setFirstName(admin.first_name);
            setLastName(admin.last_name);
            setPhoneNumber(admin.phone_number);
            setEmail(admin.email);
            setSuperAdmin(admin.is_super_admin);
        } else {
            resetEditAdminForm();
        }

    }

    return (
        <Form onSubmit={handleEditAdminSubmit}>

            {
                props.admins && props.admins.length > 0 &&
                        <DropdownDiv className="DropdownDiv">
                            <DropdownList className="DropdownList_editAdmin" onChange={handleAdminSelectChange} value={selectedUserName}>
                                <DropdownListItem>اختر المسؤول</DropdownListItem>
                                {
                                    props.admins.map((admin, index) => {
                                        if(admin?.first_name?.length > 0 || admin?.last_name?.length > 0){
                                           return <DropdownListItem key={index} value={admin.username}>{admin.first_name} {admin.last_name}</DropdownListItem>
                                        }else{
                                            return <DropdownListItem key={index} value={admin.username}>{admin.username}</DropdownListItem>
                                        }
                                    })
                                }
                            </DropdownList>
                        </DropdownDiv>
            }
            <DivTxtField>
                <Span />
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" value={firstName} required />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" value={lastName} required />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" value={email}  />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handlePhoneNumberChange} placeholder='رقم الهاتف' type="text" value={phoneNumber}  />
            </DivTxtField>

            { props.hasPermission &&
                <DivTxtFieldnumber>
                    <Checkboxes type="checkbox" onChange={handleSuperAdminCheckChange} checked={isSuperAdmin}/> <LabelSoper>إضافته كمسؤول رئيسي</LabelSoper>
                </DivTxtFieldnumber>
            }

            {/*TODO: Uncomment when it's supported in backend-side*/}
            {/*<DivTxtField>*/}
            {/*  <Span />*/}
            {/*  <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" required />*/}
            {/*</DivTxtField>*/}

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل المسؤول</InputSubmit>

        </Form>

    );
}