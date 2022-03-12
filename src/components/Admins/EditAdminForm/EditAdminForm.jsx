import React, {useEffect, useState} from 'react';
import  {
    DivPass,
    DivTxtField,
    Form,
    FormInput,
    InputSubmit,
    Span
} from "../Admins.styles";

import {DropdownDiv, DropdownList, DropdownListItem} from "./EditAdminForm.styles";
import {updateAdmin} from "../../../services/adminsServices";

export default function EditGroupForm(props) {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [messages, setMessages] = useState([]);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [selectedUserName, setSelectedUserName] = useState("");

    useEffect(()=>{
            setMessages([]);
        },[ firstName, lastName, email, phoneNumber]);

    const handleEditAdminSubmit = (e)=>{
        e.preventDefault();


        updateAdmin(selectedUserName, {
                'username': selectedUserName,
                'first_name': firstName,
                'last_name': lastName,
                'email': email,
                'phone_number': phoneNumber,
            },
            (res) => {
                if (res && res.status === 200) {
                    let updatedAdmin = props.admins.filter(admin => admin.username === selectedUserName)[0];
                    updatedAdmin.first_name = firstName;
                    updatedAdmin.last_name = lastName;
                    updatedAdmin.email = email;
                    updatedAdmin.phone_number = phoneNumber;
                    props.setAdmins([...props.admins.filter(admin => admin.username !== selectedUserName), updatedAdmin]);
                    setMessages(["تم تعديل المسؤول"]);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push(["لم يتم تعديل المسؤول"]);
                if (err.response.data) {
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

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePhoneNumberChange = (e) =>{
        setPhoneNumber(e.target.value);
    }


    const handleAdminSelectChange = (e) =>{
        let admin = props.admins.filter(admin => admin.username === e.target.value)[0];
        if(admin){
            setSelectedUserName(admin.username);
            setFirstName(admin.first_name);
            setLastName(admin.last_name);
            setPhoneNumber(admin.phone_number);
            setEmail(admin.email);
        }else{
            setSelectedUserName("");
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("")
        }

    }

    return (
        <Form onSubmit={handleEditAdminSubmit}>

            {
                props.admins && props.admins.length > 0 &&
                        <DropdownDiv className="DropdownDiv" onChange={handleAdminSelectChange}>
                            <DropdownList className="DropdownList_editAdmin" >
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
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" value={firstName == null ? "" : firstName} required/>
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" value={lastName == null ? "" : lastName} required/>
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email"  value={email == null? "" : email} required />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handlePhoneNumberChange} placeholder='رقم الهاتف' type="text" value={phoneNumber == null ? "" : phoneNumber} required />
            </DivTxtField>


            {/*TODO: Uncomment when it's supported in backend-side*/}
            {/*<DivTxtField>*/}
            {/*  <Span />*/}
            {/*  <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" required />*/}
            {/*</DivTxtField>*/}

            {messages.length > 0 &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل المسؤول</InputSubmit>

        </Form>

    );
}