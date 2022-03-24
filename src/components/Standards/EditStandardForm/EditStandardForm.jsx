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
} from "../AddStandardForm/AddStandardForm.styles"
import {DivPass} from "../../Admins/Admins.styles";
import { updateStandard} from "../../../services/standardServices";


export default function EditStandardForm(props) {

    const [selectedStandard, setSelectedStandard] = useState(null);
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
    const [currentSelectedDays, setCurrentSelectedDays] = useState([]);

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

    const updateStandardItem = (item, data)=>{
        item.section = data.section;
        item.is_active = data.is_active;
        item.is_shown = data.is_shown;
        item.order_in_section = data.order_in_section;
        item.custom_days = data.custom_days;
        item.label = data.label;
        item.description = data.description;
        item.form_type = data.form_type;
        item.upper_units_bound = data.upper_units_bound;
        item.lower_units_bound = data.lower_units_bound;
        item.points_per_unit = data.points_per_unit;

    }
    const handleEditStandardSubmit = (e)=>{
        e.preventDefault();

        if(selectedStandard === null){
            setMessages(['يجب عليك اختيار معيار لتعديله']);
            return;
        }

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

        updateStandard(selectedStandard.id, data,
            (res) => {
                if (res && res.status === 200) {
                    let updatedStandard = props.standards.filter(standard => standard.id === Number(selectedStandard.id))[0];
                    updateStandardItem(updatedStandard, data);
                    props.setStandards([...props.standards.filter(standard => standard.id !== Number(selectedStandard.id)), updatedStandard]);
                    setMessages(['تم تعديل المعيار بنجاح']);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push('لم يتم تعديل المعيار');
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

    const handleSelectedStandardChange = (e)=>{
        if(e.target.value === ""){
            setSelectedSection(null);
            setSelectedStandard(null);
            setActive(false);
            setShown(false);
            setOrder(-1);
            setLabel("");
            setDescription("");
            setFormType("");
            setUpperUnitsBound(-1);
            setLowerUnitsBound(-1);
            setPointsPerUnit(-1);
            setCustomDaysChecked(false);
            setCustomDays("");

        }else{
            let standard = props.standards.filter(standard => standard.id === Number(e.target.value))[0];
            setSelectedStandard(standard);
            setSelectedSection(props.sections.filter(section => section.id === standard.section)[0]);
            setActive(standard.is_active);
            setShown(standard.is_shown);
            setOrder(standard.order_in_section);
            setLabel(standard.label);
            setDescription(standard.description);
            setFormType(standard.form_type);
            setUpperUnitsBound(standard.upper_units_bound);
            setLowerUnitsBound(standard.lower_units_bound);
            setPointsPerUnit(standard.points_per_unit);
            if(standard.custom_days.length > 0){
                setCustomDaysChecked(true);
                setCustomDays(standard.custom_days);
                let selectedArray = standard.custom_days.split(",");
                setCurrentSelectedDays(days.filter(day => selectedArray.includes(day.id+"")));
            }else{
                setCustomDaysChecked(false);
                setCustomDays("");
            }
        }
    };

    const handleSelectedSectionChange = (e)=>{
        if(e.target.value === ""){
            selectedSection(null);
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
        if(!e.target.checked){
            setCustomDays("");
        }
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


        <Formm onSubmit={handleEditStandardSubmit}>

            { props.standards && props.standards.length > 0
                ?
                    <DropdownDiv onChange={handleSelectedStandardChange}>
                        <DropdownListStanderd className='DropdownList'>
                            <DropdownListItemStanderd key={0} value="">اختر المعيار </DropdownListItemStanderd>
                            { props.standards.map((standard, index) => {
                                return <DropdownListItemStanderd key={index + 1}  value={standard.id}>{standard.label}</DropdownListItemStanderd>
                                })
                            }
                        </DropdownListStanderd>
                    </DropdownDiv>
                :
                    <Span>لا يوجد معايير لعرضها</Span>
            }

            { props.sections && props.sections.length > 0
                ?
                <DropdownDiv>
                    <DropdownListStanderd className='DropdownList' value={selectedSection !== null ? selectedSection.id : ""}  onChange={handleSelectedSectionChange}>
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
                <FormInput placeholder='ادخل العنوان ' type="text" value={label} onChange={handleLabelChange} required/>
            </DivTxtField>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber type="number"  min='1' value={order!== -1 ? (order+"") : ""} onChange={handleOrderChange} required/>
                <Label>ترتيب المعيار داخل القسم</Label>
            </DivTxtFieldnumber>

            <DropdownListStanderd className='DropdownList' value={formType} onChange={handleFormTypeChange} >
                <DropdownListItemStanderd value="">اختر نوع النموذج</DropdownListItemStanderd>
                <DropdownListItemStanderd value="num">رقمي</DropdownListItemStanderd>
                <DropdownListItemStanderd value="chk">خانة إختيار - صح أو خطأ</DropdownListItemStanderd>
                <DropdownListItemStanderd value="oth">نصي - يحتاج مراجعة من المسؤول</DropdownListItemStanderd>
            </DropdownListStanderd>


            <DivTxtField>
                <Span/>
                <FormInput placeholder='وصف النقاط - مثال : نقطتان لكل صفحة ' type="text" value={description} onChange={handleDescriptionChange} required/>
            </DivTxtField>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber min="0" type="number" value={lowerUnitsBound !== -1 ? (""+lowerUnitsBound) : ""} onChange={handleLowerBoundPointUnitsChange} required/>
                <Label>الحد الأدنى للتكرار</Label>
            </DivTxtFieldnumber>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber min={lowerUnitsBound !== -1 ? lowerUnitsBound : (0 + "")} type="number"
                                value={upperUnitsBound !==-1 ? (upperUnitsBound+"") : ""} onChange={handleUpperBoundPointUnitsChange} required/>
                <Label>الحد الأعلى للتكرار</Label>
            </DivTxtFieldnumber>

            <DivTxtFieldnumber>
                <Span/>
                <FormInputnumber type="number" min="1" value={pointsPerUnit !==-1 ? (pointsPerUnit+"") : ""} onChange={handlePointUnitChange} required/>
                <Label>ادخل عدد نقاط لكل تكرار</Label>
            </DivTxtFieldnumber>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={isCustomDaysChecked} onChange={handleCustomDaysCheckboxChange}/> <LabelSoper>متاح لأيام محددة</LabelSoper>
            </DivTxtFieldnumber>
            { isCustomDaysChecked &&
                <DivMultiselect>
                    <Multiselect
                        onSelect={handleCustomDaysChange}
                        onRemove={handleCustomDaysChange}
                        placeholder='اختر الايام ليكون متاحا'
                        options={days}
                        selectedValues={currentSelectedDays}
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
                    <Checkboxes type="checkbox" checked={isActive} onChange={handleActiveCheckboxChange}/> <LabelSoper>تفعيل المعييار</LabelSoper>
                </DivTxtFieldnumber>
                :
                <DivTxtFieldnumber>
                    <Checkboxes type="checkbox" disabled={true} checked={false}/> <LabelSoper>تفعيل المعييار</LabelSoper>
                </DivTxtFieldnumber>
            }

            { messages.length > 0  &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل المعيار</InputSubmit>
        </Formm>
    )
};
