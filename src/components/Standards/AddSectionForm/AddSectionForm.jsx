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
    DivPass,
} from "../AddStandardForm/AddStandardForm.styles"
import {addSection} from "../../../services/standardServices";

export default function AddSectionForm(props){

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

    const handleAddSectionSubmit = (e)=>{
        e.preventDefault();

        addSection({
                label: label,
                position: position
            },
            (res) => {
                if (res && res.status === 201) {
                    props.setSections([...props.sections, {label: label, position: position, id : res.data.id}])
                    setMessages(['تم إضافة القسم بنجاح']);
                }
            },
            (err) => {
                let errMessages =[];
                errMessages.push(["لم يتم إضافة القسم"]);
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
            <DivTxtField>
                <Span/>
                <FormInput placeholder='ادخل العنوان' type="text" required onChange={handleLabelChange}/>
            </DivTxtField>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber type="number"  min='1' required onChange={handlePositionChange}/>
                <Label>ترتيب القسم داخل المسابقة</Label>
            </DivTxtFieldnumber>

            { messages.length > 0  &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit">إضافة قسم جديد</InputSubmit>
        </Formm>
    );
};