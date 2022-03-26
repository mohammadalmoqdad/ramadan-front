import React, {useEffect, useState} from "react";
import {Form, DivTxtField, Span, InputSubmit, AddBtn, AnnouncementsFormInput, RemoveBtn} from "../../Groups/Groups.styles";
import {DivPass} from "../../Admins/Admins.styles";
import {updateCompetition} from "../../../services/competitionsServices";

export default function AddEditAnnouncementForm(props){
    const [selectedCompetitionId, setSelectedCompetitionId] = useState("");
    const [notes, setNotes] = useState([""]);
    const [messages, setMessages] = useState([]);
    const [isSemiColonExists, setSemiColonExists] = useState(false);

    useEffect(()=>{
        let competition = props.competitions[0];
        if(competition){
            setSelectedCompetitionId(competition.id);
            let notesArray = competition?.announcements.split(";").filter(item => item.trim().length > 0);
            setNotes(notesArray.length > 0 ? notesArray: [""]);
        }else{
            setSelectedCompetitionId("");
            setNotes([""]);
            setMessages([]);
        }
    },[props.competitions]);

    const handleAddEditSubmit = (e)=>{
        e.preventDefault();

        if(selectedCompetitionId === ""){
            setMessages(['يجب عليك إختيار مسابقة']);
            return;
        }

        let valid = true;
        notes.forEach(note =>{
            if(note.includes(';')){
               valid = false;
            }
        });

        if(!valid){
            setSemiColonExists(true);
            return;
        }else{
            setSemiColonExists(false);
        }

        let data = {
            announcements: notes.filter(note => note.trim().length > 0).join(";")
        };

        updateCompetition(selectedCompetitionId,
            data,
            (res)=>{
                if(res?.status === 200){
                    let updatedCompetition = props.competitions.filter(competition => competition.id === selectedCompetitionId)[0];
                    updatedCompetition.announcements = data.announcements;
                    props.setCompetitions([...props.competitions.filter(comp => comp.id !== selectedCompetitionId), updatedCompetition]);
                    setMessages(['تم تعديل الإعلانات بنجاح'])
                }
            },
            (err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم تعديل الإعلانات"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages);
            }
        );

    };

    const handleAnnouncementsChange = (e, index)=>{
        let notesArray = [...notes];
        notesArray.splice(index, 1, e.target.value);
        setNotes(notesArray);
    }

    const handleAddBtnChange = ()=>{
        setNotes([...notes, ""]);
    }
    const handleRemoveBtnChange = (e, index)=>{
        e.preventDefault();
        let notesArray = [...notes];
        notesArray.splice(index, 1);
        setNotes(notesArray);
    }

    return(
        <Form onSubmit={handleAddEditSubmit}>

            { notes?.map((inputItem, index) =>{
                    return(

                        <DivTxtField key={index} style={{width: '100%'}}>
                            <Span/>
                            <AnnouncementsFormInput placeholder='الإعلان' key={index} value={inputItem} onChange={(e) => handleAnnouncementsChange(e, index)} type="text"/>
                            { notes.length > 1 &&
                                <RemoveBtn onClick={(e)=>handleRemoveBtnChange(e, index)}>-</RemoveBtn>
                            }
                            { index === notes.length -1 &&
                                <AddBtn onClick={handleAddBtnChange}>+</AddBtn>
                            }
                        </DivTxtField>
                    )
                })
            }
            { isSemiColonExists &&
                <DivPass>الإعلان يجب أن لا يحتوي على ;</DivPass>
            }
            {messages.length > 0 &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل الإعلانات</InputSubmit>
        </Form>
    );
}