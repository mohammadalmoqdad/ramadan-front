import React, {useEffect, useState} from 'react'
import {
    DivMultiselect,
    DivTxtField,
    DropdownDiv,
    DropdownDivSelect,
    FormInput,
    Form,
    InputSubmit,
    Span, AnnouncementsFormInput, RemoveBtn, AddBtn
} from "../Groups.styles";
import Multiselect from "multiselect-react-dropdown";
import {DropdownList, DropdownListItem} from "../../Admins/EditAdminForm/EditAdminForm.styles";
import {DivPass} from "../../Admins/Admins.styles";
import {addGroup} from "../../../services/groupsServices";

export default function AddGroupForm(props) {

    const [selectedStudents, setSelectedStudents] = useState([]);
    const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [isValidGroupName, setValidGroupName] = useState(true);
    const [announcements, setAnnouncements] = useState([""]);
    const [isSemiColonExists, setSemiColonExists] = useState(false);
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

    const handleAnnouncementsChange = (e, index)=>{
        let notesArray = [...announcements];
        notesArray.splice(index, 1, e.target.value);
        setAnnouncements(notesArray);
    };

    const handleAddBtnChange = ()=>{
        setAnnouncements([...announcements, ""]);
    };

    const handleRemoveBtnChange = (index)=>{
        let notesArray = [...announcements];
        notesArray.splice(index, 1);
        setAnnouncements(notesArray);
    };

    const handleAddGroupSubmit = (e) => {
        e.preventDefault();

        if(selectedAdminUserName === ""){
            setMessages(['يجب عليك إختيار مسؤول لهذه المجموعة'])
            return;
        }

        let valid = true;
        announcements.forEach(announcement =>{
            if(announcement.includes(';')){
                valid = false;
            }
        });

        if(!valid){
            setSemiColonExists(true);
            return;
        }else{
            setSemiColonExists(false);
        }

        let data = {
            'admin': selectedAdminUserName,
            'name': groupName,
            'group_students': selectedStudents,
            'announcements': announcements.filter(announcement => announcement.trim().length > 0).join(";")
        };

        addGroup(data,
            (res) => {
                if (res && res.status === 201) {
                    data.id = res.data.id;
                    props.setGroups([...props.studentsGroups, data]);
                    setMessages(["تم إضافة المجموعة بنجاح"]);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push("لم يتم إضافة المجموعة");
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
    };

    return (
        <Form onSubmit={handleAddGroupSubmit}>
            {
                props.students && props.students.length > 0 &&
                    <DropdownDiv className='DropdownDiv'>
                        <DropdownDivSelect>
                            <Span>أسماء الطلبة يكمن اضافتهم</Span>
                            <DivMultiselect>
                                <Multiselect
                                    onSelect={handleUpdateSelectedStudentsChange}
                                    onRemove={handleUpdateSelectedStudentsChange}
                                    options={props.students}
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
                props.admins && props.admins.length > 0 &&
                    <DropdownDiv className="DropdownDiv" onChange={handleAdminSelectChange}>
                        <DropdownList className="DropdownList_groups">
                            <DropdownListItem key={0} value="">اختر المسؤول</DropdownListItem>
                            {
                                props.admins.map((admin, index) => (
                                    <DropdownListItem key={index+1}
                                                      value={admin.username}>{admin.first_name} {admin.last_name}</DropdownListItem>
                                ))
                            }
                        </DropdownList>
                    </DropdownDiv>

            }

            <DivTxtField>
                <Span/>
                <FormInput placeholder='ادخل اسم المجموعة الجديدة' onChange={handleGroupNameChange} type="text" required/>
            </DivTxtField>
            {!isValidGroupName &&
                <DivPass>يجب أن يكون طول اسم المجموعة أقل أو يساوي 30 حرف</DivPass>

            }

            {
                announcements?.map((inputItem, index) => {
                    return (

                        <DivTxtField style={{width: '100%'}}>
                            <Span/>
                            <AnnouncementsFormInput placeholder='الإعلان' key={index} value={inputItem}
                                                    onChange={(e) => handleAnnouncementsChange(e, index)} type="text"/>
                            {announcements.length > 1 &&
                                <RemoveBtn onClick={() => handleRemoveBtnChange(index)}>-</RemoveBtn>}
                            {index === announcements.length - 1 && <AddBtn onClick={handleAddBtnChange}>+</AddBtn>}
                        </DivTxtField>)
                })
            }
            { isSemiColonExists &&
                <DivPass>الإعلان يجب أن لا يحتوي على ;</DivPass>
            }

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