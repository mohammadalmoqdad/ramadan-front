import React, { useState} from 'react';
import  {
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
import {DropdownDiv, DropdownList, DropdownListItem} from "./EditAdminForm.styles";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";


export default function AddAdminForm(props) {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [selectedManagedGroups, setSelectedManagedGroups] = useState([]);
    const [currentGroups, setCurrentGroups] = useState([]);
    const [message, setMessage] = useState("");
    const [selectedUserName, setSelectedUserName] = useState("");



    const handleEditAdminSubmit = (e)=>{
        e.preventDefault();



        axios.put(
            `${apiUrl}/comp-admin/comp-admins/${selectedUserName}/`,
            {
                'username': selectedUserName,
                'first_name': firstName,
                'last_name': lastName,
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
                if(res && res.status === 200){
                    setMessage("تم تعديل المسؤؤول");
                }
            },
            (err)=>{
                setMessage("لم يتم تعديل المسؤول");
                console.log("ERROR: ",err);
            }
        );
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }


    const handleUpdateSelectedGroupsChange = (e) =>{
        let selectedGroups =[];

        for(let i=0; i < e.length ; i++){
            selectedGroups.push(e[i].id);
        }
        setSelectedManagedGroups(selectedGroups);
    }

    const handleAdminSelectChange = (e) =>{
        let admin = props.admins.results.filter(admin => admin.username === e.target.value)[0];
        if(admin){
            setSelectedUserName(admin.username);
            setFirstName(admin.first_name);
            setLastName(admin.last_name);
            setCurrentGroups(props.managedGroups.results.filter(group => admin.managed_groups.includes(group.id)));
            let arr = [...admin.managed_groups];
            setSelectedManagedGroups(arr);
        }else{
            setSelectedUserName("");
            setFirstName("");
            setLastName("");
            setSelectedManagedGroups([]);
        }

    }

    return (
        <Form onSubmit={handleEditAdminSubmit}>

            {
                props.admins && props.admins.count > 0 &&
                    <>
                        {/*<label>اختر المسؤول</label>*/}
                        {/*<select id="standard-select" onChange={handleAdminSelectChange}>*/}
                        {/*    {*/}
                        {/*        props.admins.results.map((admin, index)=>{*/}
                        {/*                return(<option key={index} value={admin.username}>{admin.first_name} {admin.last_name}</option> )*/}
                        {/*            }*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</select>*/}

                        <DropdownDiv className="DropdownDiv" onChange={handleAdminSelectChange}>
                            <DropdownList className="DropdownList_editAdmin" >
                                <DropdownListItem>اختر المسؤول</DropdownListItem>
                                {
                                    props.admins.results.map((admin, index) => (
                                        <DropdownListItem key={index} value={admin.username}>{admin.first_name} {admin.last_name}</DropdownListItem>
                                    ))
                                }
                            </DropdownList>
                        </DropdownDiv>

                    </>
            }
            <DivTxtField>
                <Span/>
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" value={firstName == null ? "" : firstName} required/>
            </DivTxtField>

            <DivTxtField>
                <Span/>
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" value={lastName == null ? "" : lastName} required/>
            </DivTxtField>

            {/*TODO: Uncomment when it's supported in backend-side*/}
            {/*<DivTxtField>*/}
            {/*  <Span />*/}
            {/*  <FormInput onChange={handleEmailChange} placeholder='البريد الإلكتروني' type="email" required />*/}
            {/*</DivTxtField>*/}

            {
                props.managedGroups && props.managedGroups.count > 0 &&
                <DropdownDivSelect>
                    <LabelSuper>اختر المجموعات المسؤول عنها</LabelSuper>
                    <DivMultiselect>
                        <Multiselect
                            onSelect={handleUpdateSelectedGroupsChange}
                            onRemove={handleUpdateSelectedGroupsChange}
                            selectedValues={currentGroups === [] ? [] : currentGroups}
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

            {message !== "" &&
                <DivPass>{message}</DivPass>
            }
            <InputSubmit type="submit" value='login'>تعديل المسؤول</InputSubmit>

        </Form>

    );
}