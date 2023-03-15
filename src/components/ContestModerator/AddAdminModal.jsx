import React from "react";
import ReactDom from "react-dom";
import Container, {
    AddButton,
    Overlay,
} from "../Students/ButtonsModal.styled"
import { useTranslation } from "react-i18next";
import {updateContestPeopleRole} from "../../services/adminsServices";

export default function AddAdminModal({ clickOverlay, turnOff, newAdminUsername, setShowErrorMessage, setErrorMessage}) {
    const { t } = useTranslation();

    const handleAddingAdmin = (addAsSuperAdmin) =>{
        updateContestPeopleRole(newAdminUsername,
            {
                "contest_role": addAsSuperAdmin ? 3 : 2
            }, (res) =>{
                if(res && res.status === 200){
                    window.location.reload(true);
                }
            }, (err)=>{
                setShowErrorMessage(true);
                setErrorMessage(err?.response?.data?.detail);

                setTimeout(() => {
                    setShowErrorMessage(false);
                    setErrorMessage("");
                }, 2000);
            }
        );
        turnOff();
    };

    return ReactDom.createPortal(
        <>
            <Overlay onClick={clickOverlay} />
            <Container>
                <AddButton onClick={() =>{handleAddingAdmin(false)}}>{t("add-as-admin")}</AddButton>
                <AddButton onClick={() =>{handleAddingAdmin(true)}}>{t("add-as-super-admin")}</AddButton>
            </Container>
        </>,
        document.getElementById("portal")
    );
}
