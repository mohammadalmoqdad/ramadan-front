import React, {useEffect, useState} from "react";
import {
    Form,
    DivTxtField,
    Span,
    InputSubmit,
    AddBtn,
    AnnouncementsFormInput,
    RemoveBtn
} from "../../Groups/Groups.styles";
import {DivPass, FormInput} from "../../Admins/Admins.styles";
import {updateCompetition} from "../../../services/competitionsServices";
import {Checkboxes, DivTxtFieldnumber, LabelSoper} from "../../Standards/AddStandardForm/AddStandardForm.styles";

export default function EditCompetitionForm(props){
    const [name, setName] = useState("");
    const [showStanding, setShowStanding] = useState(true);
    const [readOnlyMode, setReadOnlyMode] = useState(false);
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
            setName(competition.name);
            setReadOnlyMode(competition.readonly_mode);
            setShowStanding(competition.show_standings);
        }else{
            setSelectedCompetitionId("");
            setNotes([""]);
            setMessages([]);
            setName("");
            setReadOnlyMode(false);
            setShowStanding(true);
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
            name:name,
            show_standings: showStanding,
            readonly_mode: readOnlyMode,
            announcements: notes.filter(note => note.trim().length > 0).join(";")
        };

        updateCompetition(selectedCompetitionId,
            data,
            (res)=>{
                if(res?.status === 200){
                    let updatedCompetition = props.competitions.filter(competition => competition.id === selectedCompetitionId)[0];
                    updatedCompetition.announcements = data.announcements;
                    updatedCompetition.name = name;
                    updatedCompetition.readonly_mode = readOnlyMode;
                    updatedCompetition.show_standings = showStanding;
                    props.setCompetitions([...props.competitions.filter(comp => comp.id !== selectedCompetitionId), updatedCompetition]);
                    setMessages(['تم تعديل المسابقة بنجاح'])
                }
            },
            (err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم تعديل المسابقة"]);
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

    const handleNameChange = (e)=>{
        setName(e.target.value);
    };

    const handleShowStandingChange = (e)=>{
        setShowStanding(e.target.checked);
    };

    const handleReadOnlyChange = (e)=>{
        setReadOnlyMode(e.target.checked);
    };

    const handleAnnouncementsChange = (e, index)=>{
        let notesArray = [...notes];
        notesArray.splice(index, 1, e.target.value);
        setNotes(notesArray);
    };

    const handleAddBtnChange = ()=>{
        setNotes([...notes, ""]);
    };

    const handleRemoveBtnChange = (index)=>{
        let notesArray = [...notes];
        notesArray.splice(index, 1);
        setNotes(notesArray);
    };


    return(
        <Form onSubmit={handleAddEditSubmit}>
            <DivTxtField>
                <Span />
                <FormInput onChange={handleNameChange} placeholder='اسم المسابقة' type="text" value={name} required />
            </DivTxtField>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={showStanding} onChange={handleShowStandingChange}/> <LabelSoper>عرض النتائج</LabelSoper>
            </DivTxtFieldnumber>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={readOnlyMode} onChange={handleReadOnlyChange}/> <LabelSoper>قابلة للتعديل</LabelSoper>
            </DivTxtFieldnumber>

            { notes?.map((inputItem, index) =>{
                return(

                    <DivTxtField key={index} style={{width: '100%'}}>
                        <Span/>
                        <AnnouncementsFormInput placeholder='الإعلان' key={index} value={inputItem} onChange={(e) => handleAnnouncementsChange(e, index)} type="text"/>
                        { notes.length > 1 &&
                            <RemoveBtn onClick={()=>handleRemoveBtnChange(index)}>-</RemoveBtn>
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
            <InputSubmit type="submit" value='login'>تعديل المسابقة</InputSubmit>
        </Form>
    );
}