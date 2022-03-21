import React, {useEffect, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';

import {
    DivMultiselect,
    DivTxtFieldnumber,
    FormInputnumber,
    Label,
    LabelSoper,
    DropdownListStanderd,
    DropdownListItemStanderd,
    Checkboxes,
    InputSubmit,
    FormInput,
    DivTxtField,
    Formm,
    Span, DropdownDiv
} from "./AddStandardForm.styles"
import {DivPass} from "../../Admins/Admins.styles";
import {addStandard} from "../../../services/standardServices";

export default function AddStandardForm(props) {
    const [selectedSection, setSelectedSection] = useState(null);
    const [label, setLabel] = useState("");
    const [order, setOrder] = useState(-1);
    const [formType, setFormType] = useState("");
    const [isCustomDaysChecked, setCustomDaysChecked] = useState(false);
    const [customDays, setCustomDays] = useState("");
    const [isShown, setShown] = useState(false);
    const [isActive, setActive] = useState(false);
    const [description, setDescription] = useState("");
    const [upperUnitsBound, setUpperUnitsBound] = useState(-1);
    const [lowerUnitsBound, setLowerUnitsBound] = useState(-1);
    const [pointsPerUnit, setPointsPerUnit] = useState(-1);
    const [messages, setMessages] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(()=>{
        let array = [];
        for(let i = 1 ; i<=30 ; i++){
            array.push({id:i, label: `${i} رمضان `});
        }
        setDays(array);
    }, []);

    useEffect(() => {
            setMessages([]);
        }
        , [
            selectedSection, label, order, formType, isCustomDaysChecked, customDays, isShown,
            isActive, description, lowerUnitsBound, pointsPerUnit, days
        ]
    );

    const handleAddStandardSubmit = (e)=>{
        e.preventDefault();

        let data = {
            "section": selectedSection.id,
            "is_active": isActive,
            "is_shown": isShown,
            "order_in_section": order,
            "custom_days": customDays,
            "label": label,
            "description": description,
            "form_type": formType,
            "upper_units_bound": upperUnitsBound,
            "lower_units_bound": lowerUnitsBound,
            "points_per_unit": pointsPerUnit
        };

        addStandard(data,
            (res) => {
                if(res && res.status === 201){
                    data.id = res.data.id;
                    props.setStandards([...props.standards, data]);
                    setMessages(['تم إضافة المعيار بنجاح']);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push('لم يتم إضافة المعيار');
                if (err.response.data) {
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

    const handleSelectedSectionChange = (e)=>{
        if(e.target.value === ""){
            setSelectedSection(null);
        }else{
            setSelectedSection(props.sections.filter(section => section.id === Number(e.target.value))[0]);
        }
    };

    const handleLabelChange = (e)=>{
        setLabel(e.target.value);
    };

    const handleOrderChange = (e)=>{
        setOrder(e.target.value);
    };

    const handleFormTypeChange = (e)=>{
        setFormType(e.target.value);
    };

    const handleCustomDaysCheckboxChange = (e)=>{
        setCustomDaysChecked(e.target.checked);
    };

    const handleCustomDaysChange = (e)=>{
        let selectedDays =[];
        for (let i = 0; i < e.length; i++) {
            selectedDays.push(e[i]);
        }
        let str="", len = selectedDays.length ;
        for(let i=0; i < len; i++){
            str += (selectedDays[i].id+"");
            if(i<len-1){
                str +=",";
            }
        }
        setCustomDays(str);
    };

    const handleShownCheckboxChange = (e)=>{
        setShown(e.target.checked);
    };

    const handleActiveCheckboxChange = (e)=>{
        setActive(e.target.checked);
    };

    const handleDescriptionChange = (e)=>{
        setDescription(e.target.value);
    };

    const handleUpperBoundPointUnitsChange = (e) =>{
        setUpperUnitsBound(e.target.value);
    };

    const handleLowerBoundPointUnitsChange = (e) =>{
        setLowerUnitsBound(e.target.value);
    };

    const handlePointUnitChange = (e)=>{
        setPointsPerUnit(e.target.value);
    };

    return (


                <Formm onSubmit={handleAddStandardSubmit}>
                    { props.sections && props.sections.length > 0
                        ?
                        <DropdownDiv onChange={handleSelectedSectionChange}>
                            <DropdownListStanderd className='DropdownList'>
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
                        <FormInput placeholder='ادخل العنوان ' type="text" required onChange={handleLabelChange}/>
                    </DivTxtField>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber type="number"  min='1' required onChange={handleOrderChange}/>
                        <Label>ترتيب المعيار داخل القسم</Label>
                    </DivTxtFieldnumber>

                    <DropdownListStanderd className='DropdownList' onChange={handleFormTypeChange}>
                        <DropdownListItemStanderd value="">اختر نوع النموذج</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="num">رقمي</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="chk">تحديدي - تحديد إنجاز المعيار من عدمه</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="oth">نوع أخر - يحتاج مراجعة من المسؤول</DropdownListItemStanderd>
                    </DropdownListStanderd>


                    <DivTxtField>
                        <Span/>
                        <FormInput placeholder='وصف النقاط - مثال : نقطتان لكل صفحة ' type="text" required onChange={handleDescriptionChange}/>
                    </DivTxtField>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber  min="0" type="number" required onChange={handleLowerBoundPointUnitsChange}/>
                        <Label>الحد الأدنى للتكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber min={lowerUnitsBound !== -1 ? lowerUnitsBound : 0} type="number" required onChange={handleUpperBoundPointUnitsChange}/>
                        <Label>الحد الأعلى للتكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber type="number" min="1" required onChange={handlePointUnitChange}/>
                        <Label>ادخل عدد نقاط لكل تكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Checkboxes type="checkbox" onChange={handleCustomDaysCheckboxChange}/> <LabelSoper>متاح لأيام محددة؟</LabelSoper>
                    </DivTxtFieldnumber>
                    { isCustomDaysChecked &&
                        <DivMultiselect>
                            <Multiselect
                                onSelect={handleCustomDaysChange}
                                onRemove={handleCustomDaysChange}
                                placeholder='اختر الايام ليكون متاحا'
                                options={days}
                                displayValue='label'
                                popupHeight='1rem'
                                popupwidth='5rem'
                            />
                        </DivMultiselect>
                    }

                    <DivTxtFieldnumber>
                        <Checkboxes type="checkbox" onChange={handleShownCheckboxChange}/> <LabelSoper>هـل هـو مـرئـي؟</LabelSoper>
                    </DivTxtFieldnumber>

                    { isShown
                        ?
                        <DivTxtFieldnumber>
                            <Checkboxes type="checkbox" onChange={handleActiveCheckboxChange}/> <LabelSoper>هـل هـو فـعـال؟</LabelSoper>
                        </DivTxtFieldnumber>
                        :
                        <DivTxtFieldnumber>
                            <Checkboxes type="checkbox" disabled={true} checked={false}/> <LabelSoper>هـل هـو فـعـال؟</LabelSoper>
                        </DivTxtFieldnumber>
                    }

                    { messages.length > 0  &&
                          messages.map((message, index)=>{
                            return <DivPass key={index}>{message}</DivPass>
                        })
                    }
                    <InputSubmit type="submit" value='login'>إضافة المعيار</InputSubmit>
                </Formm>
    )
};
