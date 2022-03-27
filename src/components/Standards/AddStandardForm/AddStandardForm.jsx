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
    const [selectedSection, setSelectedSection] = useState({});
    const [label, setLabel] = useState("");
    const [order, setOrder] = useState(-1);
    const [formType, setFormType] = useState("");
    const [isCustomDaysChecked, setCustomDaysChecked] = useState(false);
    const [customDays, setCustomDays] = useState("");
    const [isShown, setShown] = useState(true);
    const [isActive, setActive] = useState(true);
    const [description, setDescription] = useState("");
    const [upperUnitsBound, setUpperUnitsBound] = useState(-1);
    const [lowerUnitsBound, setLowerUnitsBound] = useState(-1);
    const [pointsPerUnit, setPointsPerUnit] = useState(-1);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    const [days, setDays] = useState([]);
    const [currentDays, setCurrentDays] = useState([]);
    const multiselectRef = React.createRef();

    useEffect(()=>{
        let array = [];
        for(let i = 1 ; i<=30 ; i++){
            array.push({id:i, label: `${i} رمضان `});
        }
        setDays(array);
    }, []);

    useEffect(() => {
            setMessages([]);
            setClassColor("");
        }
        , [
            selectedSection, label, order, formType, isCustomDaysChecked, customDays, isShown,
            isActive, description, lowerUnitsBound, pointsPerUnit, days
        ]
    );
    useEffect(()=>{
        resetAddStandardForm();
    },[props.reset]);

    const resetAddStandardForm = ()=>{
        setSelectedSection({});
        setActive(true);
        setShown(true);
        setOrder(-1);
        setLabel("");
        setDescription("");
        setFormType("");
        setUpperUnitsBound(-1);
        setLowerUnitsBound(-1);
        setPointsPerUnit(-1);
        setCustomDaysChecked(false);
        setCustomDays("");
        setCurrentDays([]);
        if(multiselectRef && multiselectRef.current){
            multiselectRef.current.resetSelectedValues();
        }
    };

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
                    resetAddStandardForm();

                    setClassColor("green");
                    setMessages(['تم إضافة المعيار بنجاح']);

                    setTimeout(()=>{
                        props.setStandards([...props.standards, data]);
                        setClassColor("");
                        setMessages([]);

                    },2000);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push('لم يتم إضافة المعيار');
                if (err.response.data) {
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

    const handleSelectedSectionChange = (e)=>{
        if(e.target.value === ""){
            setSelectedSection({});
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
                        <DropdownDiv>
                            <DropdownListStanderd className='DropdownList'  value={Object.keys(selectedSection).length > 0 ? selectedSection.id : ""}  onChange={handleSelectedSectionChange}>
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
                        <FormInput placeholder='ادخل العنوان ' value={label} type="text" required onChange={handleLabelChange}/>
                    </DivTxtField>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber type="number" value={order!== -1 ? (order+"") : ""}  min='1' required onChange={handleOrderChange}/>
                        <Label>ترتيب المعيار داخل القسم</Label>
                    </DivTxtFieldnumber>

                    <DropdownListStanderd className='DropdownList' value={formType} onChange={handleFormTypeChange}>
                        <DropdownListItemStanderd value="">اختر نوع النموذج</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="num">رقمي</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="chk">خانة إختيار - صح أو خطأ</DropdownListItemStanderd>
                        <DropdownListItemStanderd value="oth">نصي - يحتاج مراجعة من المسؤول</DropdownListItemStanderd>
                    </DropdownListStanderd>


                    <DivTxtField>
                        <Span/>
                        <FormInput placeholder='وصف النقاط - مثال : نقطتان لكل صفحة ' type="text" required value={description} onChange={handleDescriptionChange}/>
                    </DivTxtField>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber  min="0" type="number" required value={lowerUnitsBound !== -1 ? (""+lowerUnitsBound) : ""} onChange={handleLowerBoundPointUnitsChange}/>
                        <Label>الحد الأدنى للتكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber min={lowerUnitsBound !== -1 ? lowerUnitsBound : 0}
                                         type="number" value={upperUnitsBound !==-1 ? (upperUnitsBound+"") : ""} required onChange={handleUpperBoundPointUnitsChange}/>
                        <Label>الحد الأعلى للتكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Span/>
                        <FormInputnumber type="number" min="1" required value={pointsPerUnit !==-1 ? (pointsPerUnit+"") : ""} onChange={handlePointUnitChange}/>
                        <Label>ادخل عدد نقاط لكل تكرار</Label>
                    </DivTxtFieldnumber>

                    <DivTxtFieldnumber>
                        <Checkboxes type="checkbox" onChange={handleCustomDaysCheckboxChange} checked={isCustomDaysChecked}/> <LabelSoper>متاح لأيام محددة</LabelSoper>
                    </DivTxtFieldnumber>
                    { isCustomDaysChecked &&
                        <DivMultiselect>
                            <Multiselect
                                onSelect={handleCustomDaysChange}
                                onRemove={handleCustomDaysChange}
                                placeholder='اختر الايام ليكون متاحا'
                                options={days}
                                ref={multiselectRef}
                                selectedValues={currentDays}
                                displayValue='label'
                                popupHeight='1rem'
                                popupwidth='5rem'
                            />
                        </DivMultiselect>
                    }

                    <DivTxtFieldnumber>
                        <Checkboxes type="checkbox" checked={isShown} onChange={handleShownCheckboxChange}/> <LabelSoper>عرض المعييار</LabelSoper>
                    </DivTxtFieldnumber>

                    { isShown
                        ?
                        <DivTxtFieldnumber>
                            <Checkboxes type="checkbox" checked={isActive}  onChange={handleActiveCheckboxChange}/> <LabelSoper>تفعيل المعييار</LabelSoper>
                        </DivTxtFieldnumber>
                        :
                        <DivTxtFieldnumber>
                            <Checkboxes type="checkbox" disabled={true} checked={false}/> <LabelSoper>تفعيل المعييار</LabelSoper>
                        </DivTxtFieldnumber>
                    }

                    {messages.length > 0 &&
                        messages.map((message, index) => {
                            return <DivPass className={classColor} key={index}>{message}</DivPass>
                        })
                    }
                    <InputSubmit type="submit" value='login'>إضافة المعيار</InputSubmit>
                </Formm>
    )
};
