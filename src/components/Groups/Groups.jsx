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
import {useAdminContext} from "../../contexts/AdminContext";
import Navbar from "../shared/Navbar";

export default function Groups() {

    const [admins, setAdmins] = useState([]);
    const [groups, setGroups] = useState([]);
    const [students, setStudents] = useState([]);
    const [groupIdToDelete, setGroupIdToDelete] = useState(-1);
    const [openGroupModal, setOpenGroupModal] = useState(false);
    const [hasPermission, setPermission] = useState(false);

    const context = useAdminContext();

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

    useEffect(() => {
            setPermission(Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin);
    }, [context.adminInfo]);

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

    const getLabelsArray = ()=>{
        let labels = [];
        if(students && students.length > 0){
            labels.push('تعديل مجموعة');
        }

        if(hasPermission){
            labels.push('إضافة مجموعة');
        }
        return labels;
    };

    const getContentsArray = ()=>{
        let contents = [];
        if(students && students.length > 0){
            contents.push(<EditGroupForm studentsGroups={groups} setGroups={setGroups} students={students}
                                         admins={admins}/>);
        }

        if(hasPermission){
            contents.push(<AddGroupForm students={students} admins={admins} studentsGroups={groups}
                                        setGroups={setGroups}/>);
        }
        return contents;
    };

    return (
        <>
            { openGroupModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذه المجموعة؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenGroupModal} deleteFunction={deleteGroupFunction} />
            }
            <GroupsContainer>
                <div style={{width:'100%'}}>
                    <Navbar/>
                    { groups && groups.length > 0 &&
                        <DropdownList className='DropdownList'>
                            <DropdownListItem  className="title"><Span>المجموعات الحالية</Span></DropdownListItem>
                            {
                                groups.map((group, index) => {
                                    return (<DropdownListItem key={index}>
                                        { hasPermission
                                            ?
                                                <>
                                                    <Button id="deleteBtn" onClick={handleOpenGroupModalChange} value={group.id}>حذف</Button>
                                                    <Span>{group.name}</Span>
                                                </>
                                            :
                                            <Span style={{width:'100%'}}>{group.name}</Span>
                                        }
                                    </DropdownListItem>)
                                })
                            }
                        </DropdownList>
                    }

                    <Tabs labels={getLabelsArray()} contents={getContentsArray()}/>
                </div>
                <Sidebar/>
            </GroupsContainer>
        </>
    )
}
