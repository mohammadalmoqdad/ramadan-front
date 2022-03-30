import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../shared/Tabs/Tabs";
import AddGroupForm from "./AddGroupForm/AddGroupForm";
import EditGroupForm from "./EditGroupForm/EditGroupForm";
import {retrieveStudents} from "../../services/studentsServices";
import {retrieveAdmins} from "../../services/adminsServices";
import {deleteGroup, retrieveGroups} from "../../services/groupsServices";
import Modal from "../shared/Modal/Modal";
import Container, {Button, DropdownList, DropdownListItem, Span} from "../Admins/Admins.styles";
import {useAdminContext} from "../../contexts/AdminContext";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";
import {DivPass} from "./Groups.styles";
import Loader from "../Loader";

export default function Groups() {

    const [admins, setAdmins] = useState([]);
    const [groups, setGroups] = useState([]);
    const [students, setStudents] = useState([]);
    const [groupIdToDelete, setGroupIdToDelete] = useState("");
    const [openGroupModal, setOpenGroupModal] = useState(false);
    const [hasPermission, setPermission] = useState(false);
    const [groupsLabels, setGroupsLabels] = useState([]);
    const [groupsContents, setGroupsContents] = useState([]);
    const [showDeleteGroupFailedMsg, setShowDeleteGroupFailedMsg] = useState(false);
    const [loading, setLoading] = useState(false);

    const context = useAdminContext();
    let navigate = useNavigate();


    useEffect(() => {
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Groups"}});
            return;
        }

        if(Object.keys(context.adminInfo).length > 0){
            setPermission( context.adminInfo.is_super_admin);
        }else{
            setTimeout(() => {
                if(Object.keys(context.adminInfo).length === 0){
                    // permission will be updated once context.adminInfo is updated.
                    context.getAdminInfo();
                }
            }, 1000);
        }

        setLoading(true);
        retrieveStudents(
            (res) => {
                setStudents(res.data);
                setLoading(false);
            },
            (err) => {
                console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
                setLoading(false);
            }
        );

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
        setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
    }, [context.adminInfo]);

    useEffect( ()=>{
        let labels = [];
        let contents = [];

        if(groups && groups.length > 0){
            labels.push('تعديل مجموعة');
            contents.push(<EditGroupForm studentsGroups={groups} setGroups={setGroups} students={students}
                                     admins={admins} hasPermission={hasPermission}/>);
        }
        if(hasPermission){
            labels.push('إضافة مجموعة');
            contents.push(<AddGroupForm students={students} admins={admins} studentsGroups={groups}
                                        setGroups={setGroups}/>);
        }
        setGroupsLabels(labels);
        setGroupsContents(contents);

    },[groups, students, hasPermission]);

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
                if(err?.response?.status === 500){
                    setShowDeleteGroupFailedMsg(true);
                    setTimeout(()=>{
                        setShowDeleteGroupFailedMsg(false);
                    },7000);
                }
            }
        );
        setOpenGroupModal(false);
    };

    if(loading) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

    return (
        <Container>
            { openGroupModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذه المجموعة؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenGroupModal} deleteFunction={deleteGroupFunction} />
            }
            { groups && groups.length > 0
                ?
                    <>
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
                            { showDeleteGroupFailedMsg &&
                                <DropdownListItem>
                                    <DivPass className='red'>يرجى إزالة أو نقل الطلاب لمجموعة أخرى قبل حذف هذه المجموعة</DivPass>
                                </DropdownListItem>
                            }
                        </DropdownList>
                        <Tabs labels={groupsLabels} contents={groupsContents} />
                    </>
                : hasPermission ?
                    <Tabs labels={groupsLabels} contents={groupsContents} />
                :
                    <Tabs labels={['المجموعات']} contents={[<H5>لا يوجد لديك مجموعات </H5>]}/>
            }
        </Container>
    )
}
