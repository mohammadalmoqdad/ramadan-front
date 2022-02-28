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
import AddAdminForm from "./AddAdminForm";
import EditAdminForm from "./EditAdminForm";
import axios from "axios";
import cookie from "react-cookies";

const apiUrl = "https://ramadan-comp-rest.herokuapp.com";

export default function Admins() {

    const [admins, setAdmins] = useState(null);
    const [managedGroups, setManagedGroups] = useState(null);

    useEffect(() => {
        axios({
            method: "get",
            url: `${apiUrl}/comp-admin/comp-admins/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie.load('token')}`,
            },
        }).then((res) => {
            setAdmins(res.data)
        })

        axios({
            method: "get",
            url: `${apiUrl}/comp-admin/comp-group/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookie.load('token')}`,
            },
        }).then((res) => {
            setManagedGroups(res.data);
        })

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
                    [<EditAdminForm managedGroups={managedGroups} admins={admins}/>
                      , <AddAdminForm managedGroups={managedGroups}/>
                    ]}/>

            <Sidebar/>

        </AdminsDefault>
    );
}
