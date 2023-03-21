import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";
import Container, {
    TextInputField,
    AddButton,
    Overlay,
} from "./AddCriteriaForm.styled";
import {useTranslation} from "react-i18next";
import { updateSection} from "../../services/standardServices";
import {DivPass} from "../ResetPassword/ResetPassword.styles";
import {InputField, TextLabel, Container as InputFiledContainer} from "./InputField.styled";

export default function PopUpModal({
   hideModalFunction,
   clickOverlay,
   sectionId,
   sections,
   setSections
}) {

    const [label, setLabel] = useState("");
    const [position, setPosition] = useState(0);
    const [successAddedSectionMsg, setSuccessAddedSectionMsg] = useState("");
    const [failEditedSectionMsg, setFailEditedSectionMsg] = useState("");
    const {t} = useTranslation();

    useEffect(()=>{
        let sec = sections.filter(section => section.id === sectionId)[0];
        if(sec){
            setLabel(sec.label);
            setPosition(sec.position);
        }
    },[sectionId]);

    useEffect(() => {
        setFailEditedSectionMsg("");
    }, [label, position]);

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleEditSection = () => {
        if (label.length === 0 || label.trim().length === 0) {
            setFailEditedSectionMsg(t("should-add-section-name"));
            return;
        }
        updateSection(sectionId,
            {
                "label": label,
                "position": position
            }, (res) => {
                if (res && res.status === 200) {
                    setSections(sections.map(sec => sec.id !== sectionId ? sec : res.data));
                    setSuccessAddedSectionMsg(t("success-edit-section-msg"));
                    setTimeout(() => {
                        setSuccessAddedSectionMsg("");
                        hideModalFunction();
                    }, 2000);

                }
            }, (err) => {
                setFailEditedSectionMsg(t("fail-edit-section-msg") + " " + err?.response?.data);
                console.log(`Failed to add section ${err}`);
            }
        );
    }

    return ReactDom.createPortal(
        <>
            <Overlay onClick={clickOverlay} style={{opacity: 0.03}}/>
            <Container>
                <TextInputField
                    type={"text"}
                    placeholder={t("enter-title")}
                    value={label !== "" ? label : ""}
                    onChange={handleLabelChange}/>
                <InputFiledContainer>
                    <TextLabel>{t("section-order")}</TextLabel>
                    <InputField
                        type="number"
                        min={0}
                        placholder={position+""}
                        value={position+""}
                        onChange={handlePositionChange}
                    />
                </InputFiledContainer>

                <AddButton onClick={handleEditSection}>{t("edit-section")}</AddButton>
                {successAddedSectionMsg.length > 0 &&
                    <DivPass className="green">{successAddedSectionMsg}</DivPass>
                }
                {failEditedSectionMsg.length > 0 &&
                    <DivPass className="red">{failEditedSectionMsg}</DivPass>
                }
            </Container>
        </>,
        document.getElementById("portal")
    );
}
