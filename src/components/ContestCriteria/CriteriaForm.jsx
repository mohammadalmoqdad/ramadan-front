import React, {useEffect, useState, useRef} from "react";
import ReactDom from "react-dom";
import Container, {
    TextInputField,
    DropDown,
    Option,
    AddButton,
    Overlay,
} from "./AddCriteriaForm.styled";
import InputField from "./InputField";
import {useTranslation} from "react-i18next";
import {addStandard, updateStandard} from "../../services/standardServices";
import {InputField as NumInputField, TextLabel, Container as NumInputContainer} from "./InputField.styled";
import {DivMultiselect} from "../Standards/AddStandardForm/AddStandardForm.styles";
import Multiselect from "multiselect-react-dropdown";
import {DivPass} from "../Admins/Admins.styles";

export default function PopUpModal({
                                       position,
                                       hideModalFunction,
                                       clickOverlay,
                                       sections,
                                       standards,
                                       setStandards,
                                       standardIdForUpdate
                                   }) {
    const [selectedSection, setSelectedSection] = useState({});
    const [label, setLabel] = useState("");
    const [order, setOrder] = useState(1);
    const [templateType, setTemplateType] = useState("");
    const [isCustomDaysChecked, setCustomDaysChecked] = useState(false);
    const [customDays, setCustomDays] = useState([]);
    const [isShown, setShown] = useState(true);
    const [isActive, setActive] = useState(true);
    const [description, setDescription] = useState("");
    const [upperUnitsBound, setUpperUnitsBound] = useState(0);
    const [lowerUnitsBound, setLowerUnitsBound] = useState(0);
    const [pointsPerUnit, setPointsPerUnit] = useState(1);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    const [days, setDays] = useState([]);
    const [currentDays, setCurrentDays] = useState([]);
    const multiselectRef = useRef();
    const {t} = useTranslation();

    useEffect(() => {
        let num = 1;
        let nextMonthDays = [];
        for (let d = new Date(); num <= 30; d.setDate(d.getDate() + 1)) {
            let dayDate = new Date(d).toISOString().substring(0,10);
            nextMonthDays.push({id: dayDate, label: dayDate});
            num++;
        }
        setDays(nextMonthDays);
    }, []);

    useEffect(()=>{
        if(!standardIdForUpdate){
            return;
        }
        let stand = standards.filter(standard => standard.id === standardIdForUpdate)[0];
        setSelectedSection(sections.filter(section => section.id === stand.section.id)[0]);
        setLabel(stand.label);
        setOrder(stand.order_in_section);
        setDescription(stand.description);
        if(stand.template_type === "NumberPointTemplate"){
            setUpperUnitsBound(stand.upper_units_bound);
            setLowerUnitsBound(stand.lower_units_bound);
            setPointsPerUnit(stand.points_per_unit);
        }
        if (templateType === "CheckboxPointTemplate") {
            setPointsPerUnit(stand.points_if_done);
        }
        setTemplateType(stand.template_type);
        setCustomDaysChecked(stand.custom_days.length > 0);
        setCustomDays(stand.custom_days);
        setShown(stand.is_shown);
        setActive(stand.is_active);

        if(stand.custom_days.length > 0){
            let tmpIds = days.map(day => day.id);
            let tmpDays = [...days];

            stand.custom_days.forEach(customDay =>{
                if(!tmpIds.includes(customDay)){
                    tmpDays.push({id: customDay, label: customDay});
                }
            });
            setDays(tmpDays);
            setCurrentDays(tmpDays.filter(tmpDay => stand.custom_days.includes(tmpDay.id)));
        }

    },[standardIdForUpdate]);

    useEffect(() => {
        setMessages([]);
        setClassColor("");
    }, [
        selectedSection,
        label,
        order,
        templateType,
        isCustomDaysChecked,
        customDays,
        isShown,
        isActive,
        description,
        lowerUnitsBound,
        pointsPerUnit,
        days,
    ]);

    useEffect(()=>{
        if(lowerUnitsBound > upperUnitsBound){
            setUpperUnitsBound(lowerUnitsBound);
        }
    },[lowerUnitsBound])

    useEffect(()=>{
        setCustomDays([]);
    },[isCustomDaysChecked]);

    const resetAddStandardForm = () => {
        setSelectedSection({});
        setActive(true);
        setShown(true);
        setOrder(1);
        setLabel("");
        setDescription("");
        setTemplateType("");
        setUpperUnitsBound(1);
        setLowerUnitsBound(0);
        setPointsPerUnit(1);
        setCustomDaysChecked(false);
        setCustomDays("");
        setCurrentDays([]);
        if (multiselectRef && multiselectRef.current) {
            multiselectRef.current.resetSelectedValues();
        }
    };

    const handleAddStandardSubmit = (e) => {
        e.preventDefault();

        let data = {
            section: selectedSection.id,
            is_active: isActive,
            is_shown: isShown,
            order_in_section: order,
            custom_days: customDays,
            label: label,
            description: description,
            template_type: templateType
        };

        if (templateType === "NumberPointTemplate") {
            data.upper_units_bound = upperUnitsBound;
            data.lower_units_bound = lowerUnitsBound;
            data.points_per_unit = pointsPerUnit;
        } else if (templateType === "CheckboxPointTemplate") {
            data.points_if_done = pointsPerUnit;
        }

        if(standardIdForUpdate){
            executeEditStandard(data);
        }else{
            executeAddStandard(data);
        }

    };

    const executeAddStandard = (data)=>{
        addStandard(
            data,
            (res) => {
                handleSuccessExec(res, data, t("success-add-standard-msg"), () => {
                    setStandards([...standards, data])
                });
            },
            (err) => {
                handleFailExec(err, t("fail-add-standard-msg"));
            }
        );
    };

    const executeEditStandard = (data)=>{
        updateStandard(
            standardIdForUpdate,
            data,
            (res) => {
                handleSuccessExec(res, data, t("success-edit-standard-msg"),
                    () => {
                        setStandards(standards.map(stand => stand.id !== standardIdForUpdate ? stand : data))
                    }
                );
            },
            (err) => {
                handleFailExec(err, t("fail-edit-standard-msg"));
            }
        );
    };

    const handleSuccessExec = (res, data, msg, replaceFun)=>{
        if (res && (res.status === 201 || res.status === 200)) {
            data.id = res.data.id;
            resetAddStandardForm();

            setClassColor("green");
            setMessages([msg]);

            setTimeout(() => {
                replaceFun();
                setClassColor("");
                setMessages([]);
                hideModalFunction();
            }, 2000);
        }
    };

    const handleFailExec = (err, msg) => {
        let errMessages = [];
        errMessages.push(msg);
        if (err.response.data) {
            let obj = err.response.data;
            Object.keys(obj).forEach((e) => {
                errMessages.push(`${obj[e]} : ${e}`);
            });
        }
        setClassColor("red");
        setMessages(errMessages);
    };

    const handleSelectedSectionChange = (e) => {
        if (e.target.value === "") {
            setSelectedSection({});
        } else {
            setSelectedSection(
                sections.filter((section) => section.id === e.target.value)[0]
            );
        }
    };

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    };

    const handleFormTypeChange = (e) => {
        setTemplateType(e.target.value);
    };

    const handleCustomDaysCheckboxChange = (e) => {
        setCustomDaysChecked(e.target.checked);
    };

    const handleCustomDaysChange = (e) => {
        let selectedDays = [];
        for (let i = 0; i < e.length; i++) {
            selectedDays.push(e[i].id+"");
        }
        setCustomDays(selectedDays);
    };

    const handleShownCheckboxChange = (e) => {
        setShown(e.target.checked);
    };

    const handleActiveCheckboxChange = (e) => {
        setActive(e.target.checked);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleUpperBoundPointUnitsChange = (e) => {
        setUpperUnitsBound(e.target.value);
    };

    const handleLowerBoundPointUnitsChange = (e) => {
        setLowerUnitsBound(e.target.value);
    };

    const handlePointUnitChange = (e) => {
        setPointsPerUnit(e.target.value);
    };


    return ReactDom.createPortal(
        <>
            <Overlay onClick={clickOverlay}/>
            <Container position={position}>
                {sections.length > 0
                    ?
                    <DropDown
                        onChange={handleSelectedSectionChange}
                        value={selectedSection && Object.keys(selectedSection).length > 0 ? selectedSection.id : ""}
                    >
                        <Option disabled selected hidden value="">
                            {t("choose-section")}
                        </Option>
                        {sections.map((section, index) => {
                                return <Option value={section.id} key={index}>{section.label}</Option>
                            }
                        )
                        }
                    </DropDown>
                    :
                    <span>{t("no-sections")}</span>
                }
                <TextInputField type={"text"} placeholder={t("enter-title")} onChange={handleLabelChange}
                                value={label}/>
                <NumInputContainer>
                    <TextLabel>{t("criteria-order")}</TextLabel>
                    <InputField
                        type="number"
                        min="1"
                        onChange={handleOrderChange}
                        value={order+""}
                    />
                </NumInputContainer>
                <DropDown
                    value={templateType}
                    onChange={handleFormTypeChange}
                >
                    <Option disabled selected hidden value="">
                        {t("choose-type")}
                    </Option>
                    <Option value="NumberPointTemplate">{t("digital")}</Option>
                    <Option value="CheckboxPointTemplate">{t("true-false")}</Option>
                    <Option value="PointTemplate">
                        {t("text-needs-revision")}
                    </Option>
                </DropDown>


                <TextInputField type={"text"} placeholder={t("points-description")} onChange={handleDescriptionChange} value={description}/>

                { templateType === "NumberPointTemplate" &&
                    <>
                        <NumInputContainer>
                            <TextLabel>{t("minimum-repeat")}</TextLabel>
                            <NumInputField
                                type="number"
                                min="0"
                                value={lowerUnitsBound+""}
                                placeholder="0"
                                onChange={handleLowerBoundPointUnitsChange}
                            />
                        </NumInputContainer>

                        <NumInputContainer>
                            <TextLabel>{t("maximum-repeat")}</TextLabel>
                            <NumInputField
                                type="number"
                                min="1"
                                value={upperUnitsBound+""}
                                placeholder="0"
                                onChange={handleUpperBoundPointUnitsChange}
                            />
                        </NumInputContainer>
                    </>
                }

                { templateType !== "PointTemplate" &&
                    <NumInputContainer>
                        <TextLabel>{t("enter-the-number-of-points-for-each-repetition")}</TextLabel>
                        <NumInputField
                            type="number"
                            min="1"
                            value={pointsPerUnit+""}
                            placeholder="1"
                            onChange={handlePointUnitChange}
                        />
                    </NumInputContainer>
                }

                <InputField type={"checkbox"} label={t("limited")} onChange={handleCustomDaysCheckboxChange} checked={isCustomDaysChecked}/>
                {isCustomDaysChecked && (
                    <DivMultiselect>
                        <Multiselect
                            onSelect={handleCustomDaysChange}
                            onRemove={handleCustomDaysChange}
                            placeholder={t("select-specific-days")}
                            options={days}
                            ref={multiselectRef}
                            selectedValues={currentDays}
                            displayValue="label"
                            popupHeight="1rem"
                            popupwidth="5rem"
                        />
                    </DivMultiselect>
                )}
                <InputField type={"checkbox"} label={t("show-criteria")} onChange={handleShownCheckboxChange} checked={isShown}/>
                <InputField type={"checkbox"} label={t("activate-criteria")} onChange={handleActiveCheckboxChange} checked={isActive}/>
                {messages.length > 0 &&
                    messages.map((message, index) => {
                        return (
                            <DivPass className={classColor} key={index}>
                                {message}
                            </DivPass>
                        );
                    })}
                <AddButton onClick={handleAddStandardSubmit}>{standardIdForUpdate ? t("edit-criteria") : t("add-criteria")}</AddButton>
            </Container>
        </>,
        document.getElementById("portal")
    );
}