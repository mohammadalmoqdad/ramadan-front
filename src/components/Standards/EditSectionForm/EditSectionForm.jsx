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

    const [selectedSection, setSelectedSection] = useState({});
    const [label, setLabel] = useState("");
    const [position, setPosition] = useState(-1);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");

    useEffect(()=>{
        resetEditSectionForm();
    },[props.reset]);

    const resetEditSectionForm = ()=>{
        setLabel("");
        setSelectedSection({});
        setPosition(-1);
    };

    const handleLabelChange = (e)=>{
        setLabel(e.target.value);
    };

    const handlePositionChange = (e)=>{
        setPosition(e.target.value);
    };

    const handleSelectedSectionChange = (e)=>{
        if(e.target.value ===""){
            resetEditSectionForm();
        }else{
            let sec = props.sections.filter(section => section.id === Number(e.target.value))[0];
            setSelectedSection(sec);
            setLabel(sec.label);
            setPosition(sec.position);
        }
    }

    const handleAddSectionSubmit = (e)=>{
        e.preventDefault();

        if(Object.keys(selectedSection).length === 0){
            setMessages(['يجب عليك إختيار قسم لتعديله']);
            setClassColor("red");
            return;
        }

        updateSection(selectedSection.id,
            {
                label: label,
                position: position
            },
            (res) => {
                if (res && res.status === 200) {
                    let updatedSection = props.sections.filter( section => section.id === Number(selectedSection.id))[0];
                    updatedSection.label = label;
                    updatedSection.position = position;
                    resetEditSectionForm();

                    setClassColor("green");
                    setMessages(['تم تعديل القسم بنجاح']);

                    setTimeout(()=>{
                        props.setSections(
                            [...props.sections.filter( section => section.id !== Number(selectedSection.id)), updatedSection]
                        );
                        setClassColor("");
                        setMessages([]);
                    },2000);
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
                setClassColor("red");
                setMessages(errMessages);
            }
        );

    }

    return(
        <Formm onSubmit={handleAddSectionSubmit}>

            { props.sections && props.sections.length > 0
                ?
                <DropdownDiv >
                    <DropdownListStanderd className='DropdownList' onChange={handleSelectedSectionChange}
                                          value={Object.keys(selectedSection).length ===0 ? "" : setSelectedSection.id}>
                        <DropdownListItemStanderd key={0} value="">اختر القسم </DropdownListItemStanderd>
                        { props.sections.map((section, index) => {
                            return <DropdownListItemStanderd key={index + 1} value={section.id}>{section.label}</DropdownListItemStanderd>
                        })
                        }
                    </DropdownListStanderd>
                </DropdownDiv>
                :
                <Span>لا يوجد أقسام لعرضها</Span>

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

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit">تعديل القسم</InputSubmit>
        </Formm>
    );
};