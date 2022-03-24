import React, {useEffect, useState} from 'react'
import AdminsDefault, {
    DropdownList,
    DropdownListItem,
    Span,
    Button
} from "./Admins.styles"
import Tabs from "../shared/Tabs/Tabs";
import Modal from "../shared/Modal/Modal";
import AddAdminForm from "./AddAdminForm/AddAdminForm";
import EditAdminForm from "./EditAdminForm/EditAdminForm";
import {deleteAdmin, retrieveAdmins} from "../../services/adminsServices";
import {useAdminContext} from "../../contexts/AdminContext";
import ResetAdminPasswordForm from "./ResetAdminPasswordForm/ResetAdminPasswordForm";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";

export default function Admins() {

    const [admins, setAdmins] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState("");
    const [hasPermission, setPermission] = useState(false);
    const context = useAdminContext();
    const [adminsLabels, setAdminsLabels] = useState([]);
    const [adminsContents, setAdminsContents] = useState([]);

    useEffect(() => {
        retrieveAdmins(
            (res) => {
                setAdmins(res.data);
            }, (err) => {
                console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
            }
        );
    }, []);

    useEffect(() => {
        setPermission(Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin);
    }, [context.adminInfo]);

    useEffect(()=>{
        let labels = [];
        let contents = [];

        if(Object.keys(context.getAdminInfo()).length > 0 && !hasPermission && admins.length ===0) {
            setAdmins([context.getAdminInfo()])
        }

        if(admins.length > 0 ){

            labels.push('كلمة المرور');
            contents.push(<ResetAdminPasswordForm admins={admins}/>);

            labels.push('تعديل مسؤول');
            contents.push(<EditAdminForm admins={admins} setAdmins={setAdmins} hasPermission={hasPermission}/>);

            if(hasPermission){
                labels.push('إضافة مسؤول');
                contents.push(<AddAdminForm admins={admins} setAdmins={setAdmins}/>);
            }
        }

        setAdminsLabels(labels);
        setAdminsContents(contents);

    },[admins]);

    const handleOpenModelChange = (e)=>{
        setAdminToDelete(e.target.value);
        setOpenModal(true);

    };

    const deleteFunction = () =>{
        deleteAdmin(adminToDelete,(res)=>{
            if(res && res.status === 204){
                console.log(`Admin ${adminToDelete} has been deleted`);
                setAdmins(admins.filter( admin => admin.username !== adminToDelete));
            }
            }, (err)=>{
                console.log("Failed to delete admin: ", JSON.stringify(err.response.data));
            }
        );
        setOpenModal(false);
    }

    return (
        <AdminsDefault>
            { openModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذا المسؤول؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenModal} deleteFunction={deleteFunction} />
            }

            { adminsLabels.length === 0 && admins.length === 0 &&
                <Tabs labels={['']} contents={[ <H5>لا يوجد مسؤولون</H5>]} />
            }

            { admins && admins.length > 0 &&
                admins.filter(admin => Object.keys(context.getAdminInfo()).length === 0 || context.getAdminInfo().username !== admin.username).length > 0 &&

                <DropdownList className='DropdownList'>
                    <DropdownListItem  className="title"><Span>المسؤولون</Span></DropdownListItem>
                    {

                        admins.filter(admin => Object.keys(context.getAdminInfo()).length === 0 || context.getAdminInfo().username !== admin.username)
                            .map((admin, index) => {
                                return (<DropdownListItem key={index}>
                                    { hasPermission?
                                        <>
                                            <Button id="deleteBtn" onClick={handleOpenModelChange} value={admin.username}>حذف</Button>
                                            <Span>{admin.first_name} {admin.last_name}</Span>
                                        </>
                                      :
                                        <Span style={{width: '100%'}}>{admin.first_name} {admin.last_name}</Span>

                                    }
                                </DropdownListItem>)
                            })
                    }
                </DropdownList>
            }

            <Tabs labels={adminsLabels} contents={adminsContents}/>
        </AdminsDefault>
    );
}
