import React, {useEffect, useState} from 'react'
import AdminsDefault, {
    DropdownList,
    DropdownListItem,
    Span,
} from "./Admins.styles"
import Tabs from "../shared/Tabs/Tabs";
import AddAdminForm from "./AddAdminForm/AddAdminForm";
import EditAdminForm from "./EditAdminForm/EditAdminForm";
import {retrieveAdmins} from "../../services/adminsServices";
import {useAdminContext} from "../../contexts/AdminContext";
import ResetAdminPasswordForm from "./ResetAdminPasswordForm/ResetAdminPasswordForm";

export default function Admins() {

    const [admins, setAdmins] = useState([]);
    const context = useAdminContext();

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
        <AdminsDefault>
            { admins && admins.length > 0 &&
                <DropdownList className='DropdownList'>
                    <DropdownListItem  className="title"><Span>المسؤولون الحاليين</Span></DropdownListItem>
                    {

                        admins.filter(admin => Object.keys(context.getAdminInfo()).length === 0 || context.getAdminInfo().username !== admin.username)
                            .map((admin, index) => {
                                return (<DropdownListItem key={index}>
                                    <Span style={{width:'100%'}}>{admin.first_name} {admin.last_name}</Span>
                                </DropdownListItem>)
                            })
                    }
                </DropdownList>
            }

            <Tabs labels={['كلمة المرور','تعديل مسؤول', 'إضافة مسؤول']}
                  contents={
                      [
                          <ResetAdminPasswordForm admins={admins}/>,
                          <EditAdminForm admins={admins} setAdmins={setAdmins}/>,
                          <AddAdminForm admins={admins} setAdmins={setAdmins}/>
                      ]}
                  toggleState={1}/>
        </AdminsDefault>
    );
}
