import React, {useEffect, useState} from 'react'
import {
    DivMultiselect,
    DivTxtField,
    DropdownDiv,
    DropdownDivSelect,
    FormInput,
    Form,
    InputSubmit,
    Span
} from "./Group.styles";
import Multiselect from "multiselect-react-dropdown";
import {DropdownList, DropdownListItem} from "../Admins/EditAdminForm.styles";
import {DivPass} from "../Admins/Admins.styles";
import axios from "axios";
import cookie from "react-cookies";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";

export default function AddGroupForm(props) {

    const [selectedStudents, setSelectedStudents] = useState([]);
    const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [isValidGroupName, setValidGroupName] = useState(true);
    const [announcements, setAnnouncements] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        setMessages([]);
    },[selectedStudents, selectedAdminUserName, groupName, announcements]);

    const handleUpdateSelectedStudentsChange = (e) => {
        let students = [];
        for (let i = 0; i < e.length; i++) {
            students.push(e[i].username);
        }
        setSelectedStudents(students);
    };

    const handleAdminSelectChange = (e) => {
      setSelectedAdminUserName(e.target.value);
    };

    const handleGroupNameChange = (e) => {
        if(e.target.value > 30){
            setValidGroupName(false);
        }else{
            setValidGroupName(true);
        }
      setGroupName(e.target.value);
    };

    const handleAnnouncementsChange = (e) => {
      setAnnouncements(e.target.value);
    };

    const handleAddGroupSubmit = (e) => {
      e.preventDefault();

        axios.post(
            `${apiUrl}/comp-admin/comp-group/`,
            {
                'admin': selectedAdminUserName,
                'name': groupName,
                'group_students': selectedStudents,
                'announcements': announcements
            },{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookie.load('token')}`
                }
            }
        ).then(
            (res)=>{
                if(res && res.status === 201){
                    setMessages(["تم إضافة المجموعة بنجاح"]);
                }
            },
            (err)=>{
                if(err.response.data.messages){
                    setMessages(["لم يتم إضافة المجموعة"]);
                }else{
                    let errMessages = [];
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                    setMessages(errMessages);
                }
                console.log("ERROR: ",JSON.stringify(err.response.data));
            }
        );
    };

    return (
        <Form onSubmit={handleAddGroupSubmit}>
            {
                props.students && props.students.count > 0 &&
                    <DropdownDiv className='DropdownDiv'>
                        <DropdownDivSelect>
                            <Span>أسماء الطلبة يكمن اضافتهم</Span>
                            <DivMultiselect>
                                <Multiselect
                                    onSelect={handleUpdateSelectedStudentsChange}
                                    onRemove={handleUpdateSelectedStudentsChange}
                                    options={props.students.results}
                                    displayValue='full_name'
                                    placeholder=""
                                    popupHeight='1rem'
                                    popupwidth='5rem'
                                />
                            </DivMultiselect>
                        </DropdownDivSelect>

                    </DropdownDiv>
            }

            {
                props.admins && props.admins.count > 0 &&
                <>
                    <DropdownDiv className="DropdownDiv" onChange={handleAdminSelectChange}>
                        <DropdownList className="DropdownList_groups" >
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
                <FormInput placeholder='ادخل اسم المجموعة الجديدة' onChange={handleGroupNameChange} type="text" required/>
            </DivTxtField>
            {!isValidGroupName &&
                <DivPass>يجب أن يكون طول اسم المجموعة أقل أو يساوي 30 حرف</DivPass>

            }

            <DivTxtField>
                <Span/>
                <FormInput placeholder='الإعلانات' onChange={handleAnnouncementsChange} type="text"/>
            </DivTxtField>
            <DivPass>استخدم ; للفصل بين الإعلانات في حالة إضافة أكثر من إعلان</DivPass>

            <Span/>

            {messages.length > 0 &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>اضافة مجموعة</InputSubmit>

        </Form>
    );
}