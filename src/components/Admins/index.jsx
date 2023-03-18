import React, {useEffect, useState} from 'react'
import AdminsDefault, {
    DropdownList,
    DropdownListItem,
    Span,
    Button
} from "./Admins.styles"
import Tabs from "../shared/Tabs";
import Modal from "../shared/Modal";
import AddAdminForm from "./AddAdminForm";
import EditAdminForm from "./EditAdminForm";
import {deleteAdmin, retrieveAdmins} from "../../services/adminsServices";
import {useAdminContext} from "../../contexts/AdminContext";
import ResetAdminPasswordForm from "./ResetAdminPasswordForm";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader";
import {isSuperAdmin} from '../../util/ContestPeople_Role';

export default function Admins() {

    const [admins, setAdmins] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState("");
    const [hasPermission, setPermission] = useState(false);
    const [adminsLabels, setAdminsLabels] = useState([]);
    const [adminsContents, setAdminsContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const context = useAdminContext();
    let navigate = useNavigate();

    useEffect(() => {
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Admins"}});
            return;
        }


        if(Object.keys(context.adminInfo).length > 0){
            setPermission(isSuperAdmin(context));
        }else{
            setTimeout(() => {
                if(Object.keys(context.adminInfo).length === 0){
                    // permission will be updated once context.adminInfo is updated.
                    context.getAdminInfo();
                }
             }, 1000);
        }

        setLoading(true);
        retrieveAdmins(
            (res) => {
                setAdmins([...res.data]);
                setLoading(false);
            }, (err) => {
                console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
                setLoading(false);
            }
        );
    }, []);

    useEffect(() => {
        setPermission(Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context));
    }, [context.adminInfo]);

    useEffect(()=>{
        let labels = [];
        let contents = [];

        if(Object.keys(context.adminInfo).length > 0 && !isSuperAdmin(context) && admins.length === 0) {
            setAdmins([...context.adminInfo])
        }

        /*if(admins.length > 0 ){

            labels.push('كلمة المرور');
            contents.push(<ResetAdminPasswordForm admins={admins}/>);

            labels.push('تعديل مسؤول');
            contents.push(<EditAdminForm admins={admins} setAdmins={setAdmins}
                                         hasPermission={hasPermission}/>);

            if(hasPermission){
                labels.push('إضافة مسؤول');
                contents.push(<AddAdminForm admins={admins} setAdmins={setAdmins}/>);
            }
        }*/

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
                setAdmins([...admins.filter( admin => admin.person.username !== adminToDelete)]);
            }
            }, (err)=>{
                console.log("Failed to delete admin: ", JSON.stringify(err.response.data));
            }
        );
        setOpenModal(false);
    };

    if (loading) {
        return (
            <main>
                <Loader />
            </main>
        );
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
                admins.filter(admin => Object.keys(context.adminInfo).length === 0 || context.adminInfo.username !== admin.person.username).length > 0 &&

                <DropdownList className='DropdownList'>
                    <DropdownListItem  className="title"><Span>المسؤولون</Span></DropdownListItem>
                    <div className="dropdown-scroll-container">
                    {
                        admins.filter(admin => Object.keys(context.adminInfo).length === 0 || context.adminInfo.username !== admin.person.username)
                            .map((admin, index) => {
                                return (<DropdownListItem key={index}>
                                    { hasPermission
                                      ?
                                        <>
                                            <Button id="deleteBtn" onClick={handleOpenModelChange} value={admin.person.username}>حذف</Button>
                                            { admin.person.first_name?.length > 0 || admin.person.last_name?.length > 0
                                                ?
                                                <Span>{admin.person.first_name} {admin.person.last_name}</Span>
                                                :
                                                <Span>{admin.person.username}</Span>
                                            }
                                        </>
                                      :
                                        <>
                                            { admin.person.first_name?.length > 0 || admin.person.last_name?.length > 0
                                                ?
                                                <Span style={{width: '100%'}}>{admin.person.first_name} {admin.person.last_name}</Span>
                                                :
                                                <Span style={{width: '100%'}}>{admin.person.username}</Span>
                                            }
                                        </>
                                    }
                                </DropdownListItem>)
                            })
                    }
                    </div>
                </DropdownList>
            }

            <Tabs labels={adminsLabels} contents={adminsContents}/>
        </AdminsDefault>
    );
}
