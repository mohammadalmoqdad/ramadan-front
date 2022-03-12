import React, { useEffect, useState } from 'react'
import AdminsDefault, {
    DropdownList,
    DropdownListItem,
    Span,
    Button
} from "./Admins.styles"
import Sidebar from "components/shared/Sidebar";
import Tabs from "../shared/Tabs/Tabs";
import Modal from "../shared/Modal/Modal";
import AddAdminForm from "./AddAdminForm/AddAdminForm";
import EditAdminForm from "./EditAdminForm/EditAdminForm";
import { deleteAdmin, retrieveAdmins } from "../../services/adminsServices";

export default function Admins() {

    const [admins, setAdmins] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState("");

    const handleOpenModelChange = (e) => {
        setAdminToDelete(e.target.value);
        setOpenModal(true);
    };

    const deleteFunction = () => {
        deleteAdmin(adminToDelete, (res) => {
            if (res && res.status === 204) {
                console.log(`Admin ${adminToDelete} has been deleted`);
                setAdmins(admins.filter(admin => admin.username !== adminToDelete));
            }
        }, (err) => {
            console.log("Failed to delete admin: ", JSON.stringify(err.response.data));
        }
        );
        setOpenModal(false);
    }
    useEffect(() => {

        retrieveAdmins(
            (res) => {
                setAdmins(res.data);
            }, (err) => {
                console.log("Failed to retrieve admins: " + JSON.stringify(err.response.data));
            }
        );

    }, []);

    return (
        <>

            {openModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذا المسؤول؟" deleteBtn="حذف" cancelBtn="إلغاء"
                    setOpenModal={setOpenModal} deleteFunction={deleteFunction} />
            }
            <AdminsDefault>

                {admins && admins.length > 0 &&
                    <DropdownList className='DropdownList'>
                        <DropdownListItem className="title"><Span>المسؤولون الحاليين</Span></DropdownListItem>
                        {
                            admins.map((admin, index) => {
                                return (<DropdownListItem key={index}>
                                    <Button id="deleteBtn" onClick={handleOpenModelChange} value={admin.username}>حذف</Button>
                                    <Span>{admin.first_name} {admin.last_name}</Span>
                                </DropdownListItem>)
                            })
                        }
                    </DropdownList>
                }

                <Tabs labels={['تعديل مسؤول', 'إضافة مسؤول']}
                    contents={
                        [<EditAdminForm admins={admins} setAdmins={setAdmins} />
                            , <AddAdminForm admins={admins} setAdmins={setAdmins} />
                        ]} />

                <Sidebar />

            </AdminsDefault>
        </>
    );
}
