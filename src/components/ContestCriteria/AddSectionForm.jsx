import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";
import Container, {
    TextInputField,
    AddButton,
    Overlay,
} from "./AddCriteriaForm.styled";
import InputField from "./InputField";
import {useTranslation} from "react-i18next";
import {addSection} from "../../services/standardServices";
import {DivPass} from "../ResetPassword/ResetPassword.styles";

export default function PopUpModal({
                                       hideModalFunction,
                                       clickOverlay,
                                       sections,
                                       setSections
                                   }) {

    const [label, setLabel] = useState("");
    const [position, setPosition] = useState(0);
    const [successAddedSectionMsg, setSuccessAddedSectionMsg] = useState("");
    const [failAddedSectionMsg, setFailAddedSectionMsg] = useState("");

    const {t} = useTranslation();

    useEffect(()=>{
        setFailAddedSectionMsg("");
    },[label, position]);

    const handleLabelChange = (e) =>{
      setLabel(e.target.value);
    };

    const handlePositionChange = (e) =>{
        setPosition(e.target.value);
    };

    const handleAddNewSection = () => {
        if (label.length === 0 || label.trim().length === 0) {
            setFailAddedSectionMsg(t("should-add-section-name"));
            return;
        }
        addSection({
                "label": label,
                "position": position
            }, (res) => {
                if (res && res.status === 201) {
                    setSections([...sections, res.data]);
                    setSuccessAddedSectionMsg(t("success-add-section-msg"));
                    setTimeout(() => {
                        setSuccessAddedSectionMsg("");
                        hideModalFunction();
                    }, 2000);

                }
            }, (err) => {
                setFailAddedSectionMsg(t("fail-add-section-msg") + " " + err?.response?.data);
                console.log(`Failed to add section ${err}`);
            }
        );
    }

    return ReactDom.createPortal(
        <>
            <Overlay onClick={clickOverlay}/>
            <Container>
                <TextInputField type={"text"} placeholder={t("enter-title")} onChange={handleLabelChange}/>
                <InputField type={"number"} label={t("section-order")} onChange={handlePositionChange}/>
                <AddButton onClick={handleAddNewSection}>{t("add-section")}</AddButton>
                { successAddedSectionMsg.length > 0 &&
                    <DivPass className="green">{successAddedSectionMsg}</DivPass>
                }
                { failAddedSectionMsg.length > 0 &&
                    <DivPass className="red">{failAddedSectionMsg}</DivPass>
                }
            </Container>
        </>,
        document.getElementById("portal")
    );
}
