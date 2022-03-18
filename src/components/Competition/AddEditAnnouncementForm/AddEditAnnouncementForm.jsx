import React, {useState} from "react";
import {Form, DivTxtField, Span, InputSubmit, AddBtn, AnnouncementsFormInput, RemoveBtn} from "../../Groups/Groups.styles";
import {DivPass} from "../../Admins/Admins.styles";
import {DropdownList, DropdownListItem, DropdownDiv} from "../../Admins/EditAdminForm/EditAdminForm.styles";
import {updateCompetition} from "../../../services/competitionsServices";

export default function AddEditAnnouncementForm(props){
    const [selectedCompetitionId, setSelectedCompetitionId] = useState("");
    const [notes, setNotes] = useState([""]);
    const [messages, setMessages] = useState([]);
    const [isSemiColonExists, setSemiColonExists] = useState(false);


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

    }
    const handleAnnouncementsChange = (e, index)=>{
        let notesArray = [...notes];
        notesArray.splice(index, 1, e.target.value);
        setNotes(notesArray);
    }

    const handleAddBtnChange = ()=>{
        setNotes([...notes, ""]);
    }
    const handleRemoveBtnChange = (index)=>{
        let notesArray = [...notes];
        notesArray.splice(index, 1);
        setNotes(notesArray);
    }

    const handleSelectedCompetitionChange = (e) => {
      setSelectedCompetitionId(e.target.value);
      if(e.target.value !== ""){
          let competition =  props.competitions.filter(competition => competition.id === e.target.value)[0];
          let notesArray = competition.announcements.split(";").filter(item => item.trim().length > 0);
          setNotes(notesArray.length > 0 ? notesArray: [""]);
      }else{
          setNotes([""]);
      }
      setMessages([]);
    }

    return(
        <Form onSubmit={handleAddEditSubmit}>

            { props.competitions && props.competitions.length > 0 &&
                <DropdownDiv className="DropdownDiv" onChange={handleSelectedCompetitionChange}>
                    <DropdownList className="DropdownList_groups" >
                        <DropdownListItem>اختر المسابقة</DropdownListItem>
                        {
                            props.competitions.map((competition, index) => (
                                <DropdownListItem key={index} value={competition.id}>{competition.name}</DropdownListItem>
                            ))
                        }
                    </DropdownList>
                </DropdownDiv>

            }

            { notes?.map((inputItem, index) =>{
                    return(

                        <DivTxtField style={{width: '100%'}}>
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
            <InputSubmit type="submit" value='login'>تعديل الإعلانات</InputSubmit>
        </Form>
    );
}