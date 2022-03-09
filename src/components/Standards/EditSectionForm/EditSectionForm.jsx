import React, {useEffect, useState} from 'react';
import {
    DivTxtFieldnumber,
    FormInputnumber,
    Label,
    InputSubmit,
    FormInput,
    DivTxtField,
    Formm,
    Span,
    DivPass, DropdownDiv, DropdownListStanderd, DropdownListItemStanderd,
} from "../AddStandardForm/AddStandardForm.styles"
import {updateSection} from "../../../services/standardServices";

export default function EditSectionForm(props){

    const [selectedSection, setSelectedSection] = useState(null);
    const [label, setLabel] = useState("");
    const [position, setPosition] = useState(-1);
    const [messages, setMessages] = useState([]);


    useEffect(()=>{
        setMessages([]);
    },[label, position]);

    const handleLabelChange = (e)=>{
        setLabel(e.target.value);
    };

    const handlePositionChange = (e)=>{
        setPosition(e.target.value);
    };

    const handleSelectedSectionChange = (e)=>{
        if(e.target.value ===""){
            setLabel("");
            setPosition(-1);
            setSelectedSection(null);
        }else{
            let sec = props.sections.results.filter(section => section.id === Number(e.target.value))[0];
            setSelectedSection(sec);
            setLabel(sec.label);
            setPosition(sec.position);
        }
    }

    const handleAddSectionSubmit = (e)=>{
        e.preventDefault();

        if(selectedSection == null){
            setMessages(['يجب عليك إختيار قسم لتعديله']);
            return;
        }

        updateSection(selectedSection.id,
            {
                label: label,
                position: position
            },
            (res) => {
                if (res && res.status === 200) {
                    setMessages(['تم تعديل القسم بنجاح']);
                }
            },
            (err) => {
                let errMessages =[];
                errMessages.push(["لم يتم تعديل القسم"]);
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

    return(
        <Formm onSubmit={handleAddSectionSubmit}>

            { props.sections && props.sections.count > 0
                ?
                <DropdownDiv onChange={handleSelectedSectionChange}>
                    <DropdownListStanderd className='DropdownList'>
                        <DropdownListItemStanderd key={0} value="">اختر القسم </DropdownListItemStanderd>
                        { props.sections.results.map((section, index) => {
                            return <DropdownListItemStanderd key={index + 1} value={section.id}>{section.label}</DropdownListItemStanderd>
                        })
                        }
                    </DropdownListStanderd>
                </DropdownDiv>
                :
                <DivTxtField>لا يوجد أقسام لعرضها</DivTxtField>

            }

            <DivTxtField>
                <Span/>
                <FormInput placeholder='ادخل العنوان' type="text" value={label} onChange={handleLabelChange} required/>
            </DivTxtField>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber type="number"  min='1' value={position !== -1 ? (position+"") : "" } onChange={handlePositionChange} required/>
                <Label>ترتيب القسم داخل المسابقة</Label>
            </DivTxtFieldnumber>

            { messages.length > 0  &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit">تعديل القسم</InputSubmit>
        </Formm>
    );
};