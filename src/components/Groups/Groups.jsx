import React, {useEffect, useState} from 'react'
import GroupsContainer from "./Groups.styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../shared/Tabs/Tabs";
import Sidebar from "components/shared/Sidebar";
import AddGroupForm from "./AddGroupForm/AddGroupForm";
import EditGroupForm from "./EditGroupForm/EditGroupForm";
import {retrieveStudents} from "../../services/studentsServices";
import {retrieveAdmins} from "../../services/adminsServices";
import {deleteGroup, retrieveGroups} from "../../services/groupsServices";
import Modal from "../shared/Modal/Modal";
import {Button, DropdownList, DropdownListItem, Span} from "../Admins/Admins.styles";

export default function Groups() {

    const [admins, setAdmins] = useState(null);
    const [groups, setGroups] = useState(null);
    const [students, setStudents] = useState(null);
    const [groupIdToDelete, setGroupIdToDelete] = useState(-1);
    const [openGroupModal, setOpenGroupModal] = useState(false);

    useEffect(() => {

        retrieveStudents(
            (res) => {
            setStudents(res.data)
        }, (err) => {
            console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
        });

        retrieveAdmins(
            (res) => {
            setAdmins(res.data)
        }, (err) => {
            console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
        });

        retrieveGroups(
            (res) => {
            setGroups(res.data)
        }, (err) => {
            console.log("Failed to retrieve groups: " + JSON.stringify(err.response.data));
        });

    }, []);

    useEffect(() => {
            if(students && students.length > 0){
                students.map(student => student['full_name'] = student.first_name+" "+student.last_name);
            }
    } , [students]);

    const handleOpenGroupModalChange = (e)=>{
        setGroupIdToDelete(e.target.value);
        setOpenGroupModal(true);
    };

    const deleteGroupFunction = () => {
        deleteGroup(groupIdToDelete,
            (res) => {
                if (res && res.status === 204) {
                    console.log(`Group with id: ${groupIdToDelete} has been deleted`);
                    setGroups(groups.filter(group => group.id !== Number(groupIdToDelete)));
                }
            },
            (err) => {
                console.log("Failed to delete group: ", JSON.stringify(err.response.data));
            }
        );
        setOpenGroupModal(false);
    };

    return (
        <>
            { openGroupModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذه المجموعة؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenGroupModal} deleteFunction={deleteGroupFunction} />
            }
            <GroupsContainer>

                { groups && groups.length > 0 &&
                    <DropdownList className='DropdownList'>
                        <DropdownListItem  className="title"><Span>المجموعات الحالية</Span></DropdownListItem>
                        {
                            groups.map((group, index) => {
                                return (<DropdownListItem key={index}>
                                    <Button id="deleteBtn" onClick={handleOpenGroupModalChange} value={group.id}>حذف</Button>
                                    <Span>{group.name}</Span>
                                </DropdownListItem>)
                            })
                        }
                    </DropdownList>
                }

                <Tabs labels={['تعديل مجموعة', 'إضافة مجموعة']}
                      contents={
                          [
                              <EditGroupForm studentsGroups={groups} setGroups={setGroups} students={students} admins={admins}/>,
                              <AddGroupForm students={students} admins={admins} studentsGroups={groups} setGroups={setGroups}/>
                          ]
                      }/>
                <Sidebar/>
            </GroupsContainer>
        </>
    )
}
