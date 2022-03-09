import React, {useEffect, useState} from 'react'
import AdminsDefault, {
    DropdownDiv,
    DropdownDivSelect,
    DropdownList,
    DropdownListItem,
    Span,
} from "./Admins.styles"
import Sidebar from "components/shared/Sidebar";
import Tabs from "../shared/Tabs/Tabs";
import AddAdminForm from "./AddAdminForm/AddAdminForm";
import EditAdminForm from "./EditAdminForm/EditAdminForm";
import {retrieveAdmins} from "../../services/adminsServices";

export default function Admins() {

    const [admins, setAdmins] = useState(null);

    useEffect(() => {

        retrieveAdmins(
            (res) => {
                setAdmins(res.data);
            }, (err) => {
                console.log("ERROR: " + JSON.stringify(err.response.data));
            }
        );

    }, []);

    return (
        <AdminsDefault>

            {admins && admins.count > 0 &&
                <DropdownDiv className='DropdownDiv'>
                    <DropdownDivSelect>
                        <Span>المسؤولون الحاليين</Span>
                    </DropdownDivSelect>
                    <DropdownList className='DropdownList'>
                        {
                            admins.results.map((admin, index) => {
                                return (<DropdownListItem
                                    value={admin.username}
                                    key={index}>{admin.first_name} {admin.last_name}</DropdownListItem>)
                            })
                        }
                    </DropdownList>
                </DropdownDiv>
            }

            <Tabs labels={['تعديل مسؤول', 'إضافة مسؤول']}
                  contents={
                    [<EditAdminForm admins={admins}/>
                      , <AddAdminForm/>
                    ]}/>

            <Sidebar/>

        </AdminsDefault>
    );
}
