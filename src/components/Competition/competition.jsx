import React, {useEffect, useState} from 'react';
import {retrieveCompetitions} from "../../services/competitionsServices";
import AddEditAnnouncementForm from "./AddEditAnnouncementForm/AddEditAnnouncementForm";
import EditCompetitionForm from "./EditCompetitionForm/EditCompetitionForm";
import Tabs from "../shared/Tabs/Tabs"
import CompetitionContainer from "../Admins/Admins.styles";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

export default function Competition(){
    const [competitions, setCompetitions] = useState([]);

    useEffect(()=>{
        retrieveCompetitions(
            (res)=>{
                if(res && res.status === 200){
                    setCompetitions(res.data);
                }
            },
            (err)=>{
                console.log("Failed to retrieve competitions: ", err?.response?.data);
            }
        )
    }, []);

    return (
        <CompetitionContainer>
            <div style={{width:'100%'}}>
                <Navbar/>

                <Tabs labels={['تعديل مسابقة', 'إضافة/تعديل إعلانات']}
                      contents={
                          [
                              <EditCompetitionForm competitions={competitions} setCompetitions={setCompetitions}/>,
                              <AddEditAnnouncementForm competitions={competitions} setCompetitions={setCompetitions}/>
                          ]}
                      toggleState={1}/>
            </div>
            <Sidebar/>
        </CompetitionContainer>
    );
}