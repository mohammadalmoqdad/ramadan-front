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
import {DivPass} from "../../Admins/Admins.styles";
import {updateCompetition} from "../../../services/competitionsServices";
import {Checkboxes, DivTxtFieldnumber, LabelSoper} from "../../Standards/AddStandardForm/AddStandardForm.styles";

export default function EditCompetitionForm(props){
    const [name, setName] = useState("");
    const [showStanding, setShowStanding] = useState(true);
    const [readOnlyMode, setReadOnlyMode] = useState(false);
    const [selectedCompetitionId, setSelectedCompetitionId] = useState("");
    const [notes, setNotes] = useState([""]);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
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
    },[props.competitions, props.reset]);

    useEffect(()=>{
        setMessages([]);
        setClassColor("");
    },[name, showStanding, readOnlyMode, notes, props.reset]);

    const handleAddEditSubmit = (e)=>{
        e.preventDefault();

        if(selectedCompetitionId === ""){
            setMessages(['يجب عليك إختيار مسابقة']);
            setClassColor("red");
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
            setClassColor("red");
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

                    setClassColor("green");
                    setMessages(['تم تعديل المسابقة بنجاح']);

                    setTimeout(()=>{
                        props.setCompetitions([...props.competitions.filter(comp => comp.id !== selectedCompetitionId), updatedCompetition]);

                    },2000);
                }
            },
            (err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم تعديل المسابقة"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                        errMessages.push(`${obj[e]} : ${e}`);
                        }
                    )
                }
                setClassColor("red");
                setMessages(errMessages);
            }
        );

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

    const handleRemoveBtnChange = (e, index)=>{
        e.preventDefault();
        let notesArray = [...notes];
        notesArray.splice(index, 1);
        setNotes(notesArray);
    };


    return(
        <Form onSubmit={handleAddEditSubmit}>

            <LabelSoper placeholder='اسم المسابقة' type="text" value={name}>{name}</LabelSoper>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={showStanding} onChange={handleShowStandingChange}/> <LabelSoper>عرض النتائج</LabelSoper>
            </DivTxtFieldnumber>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={readOnlyMode} onChange={handleReadOnlyChange}/> <LabelSoper>وضع القراءة فقط</LabelSoper>
            </DivTxtFieldnumber>
            <DivPass>لا يستطيع الطلاب تسجيل النقاط في وضع القراءة فقط</DivPass>


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
                <DivPass className={classColor}>الإعلان يجب أن لا يحتوي على ;</DivPass>
            }
            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل المسابقة</InputSubmit>
        </Form>
    );
}