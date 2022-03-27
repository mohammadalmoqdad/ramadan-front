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
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";

export default function Admins() {

    const [admins, setAdmins] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState("");
    const [hasPermission, setPermission] = useState(false);
    const [adminsLabels, setAdminsLabels] = useState([]);
    const [adminsContents, setAdminsContents] = useState([]);
    const context = useAdminContext();
    let navigate = useNavigate();

    useEffect(() => {
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Admins"}});
            return;
        }

        if(Object.keys(context.adminInfo).length > 0){
            setPermission(context.adminInfo.is_super_admin);
        }else{
            setTimeout(() => {
                if(Object.keys(context.adminInfo).length === 0){
                    // permission will be updated once context.adminInfo is updated.
                    context.getAdminInfo();
                }
             }, 1000);
        }

        retrieveAdmins(
            (res) => {
                setAdmins(res.data);
            }, (err) => {
                console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
            }
        );
    }, []);

    useEffect(() => {
        setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
    }, [context.adminInfo]);

    useEffect(()=>{
        let labels = [];
        let contents = [];

        if(Object.keys(context.adminInfo).length > 0 && !context.adminInfo.is_super_admin && admins.length === 0) {
            setAdmins([context.adminInfo])
        }

        if(admins.length > 0 ){

            labels.push('كلمة المرور');
            contents.push(<ResetAdminPasswordForm admins={admins}/>);

            labels.push('تعديل مسؤول');
            contents.push(<EditAdminForm admins={admins} setAdmins={setAdmins}
                                         hasPermission={hasPermission}/>);

            if(hasPermission){
                labels.push('إضافة مسؤول');
                contents.push(<AddAdminForm admins={admins} setAdmins={setAdmins}/>);
            }
        }

        setAdminsLabels(labels);
        setAdminsContents(contents);

    },[admins, hasPermission]);

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
                <Tabs labels={['المسؤولون']} contents={[ <H5>لا يوجد مسؤولون</H5>]} />
            }

            { admins && admins.length > 0 &&
                admins.filter(admin => Object.keys(context.adminInfo).length === 0 || context.adminInfo.username !== admin.username).length > 0 &&

                <DropdownList className='DropdownList'>
                    <DropdownListItem  className="title"><Span>المسؤولون</Span></DropdownListItem>
                    {

                        admins.filter(admin => Object.keys(context.adminInfo).length === 0 || context.adminInfo.username !== admin.username)
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
