import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { isSuperAdmin } from "../../util/ContestPeople_Role";
import { useAdminContext } from "../../contexts/AdminContext";
import Loader from "../Loader";
import {
  deleteSection,
  deleteStandard,
  retrieveSections,
  retrieveStandards,
} from "../../services/standardServices";

import MainContainer, {
  SectionsContainer,
  CriteriaContainer,
  Criteria,
  HeadContent,
  Section,
  SectionAndCriteriaContainer,
  HeadText,
  AddButton,
  EditButton,
  DeleteButton,
  InnerText,
  ButtonsContainer,
} from "./ContestCriteria.styled";

import MyOngoingContestTab from "components/shared/MyOngoingContestTab";
import PopUpModal from "components/shared/PopUpModal";
import CriteriaForm from "./CriteriaForm";
import AddSectionForm from "./AddSectionForm";
import { useTranslation } from "react-i18next";
import EditSectionForm from "./EditSectionForm";

export default function ContestCriteria() {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
  const [hasPermission, setPermission] = useState(false);
  const [standards, setStandards] = useState([]);
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [showEditSectionModal, setShowEditSectionModal] = useState(false);
  const [showEditStandardModal, setShowEditStandardModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showAddCriteriaModal, setShowAddCriteriaModal] = useState(false);
  const [sectionIdForDelete, setSectionIdForDelete] = useState("");
  const [standardIdForDelete, setStandardIdForDelete] = useState("");
  const [modalPosition, setModalPosition] = useState({});
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const [standardIdForUpdate, setStandardIdForUpdate] = useState("");
  const [currentSelectedDays, setCurrentSelectedDays] = useState([]);

  const context = useAdminContext();
  const { t } = useTranslation();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/ContestCriteria" } });
    }

    setLoading(true);

    if (Object.keys(context.adminInfo).length > 0) {
      setPermission(isSuperAdmin(context));
    } else {
      setTimeout(() => {
        if (Object.keys(context.adminInfo).length === 0) {
          // permission will be updated once context.adminInfo is updated.
          context.getAdminInfo();
        }
      }, 1000);
    }

    retrieveSections(
      (res) => {
        setSections(res.data);
      },
      (err) => {
        console.log(
          "Failed to retrieve sections, ERROR: ",
          JSON.stringify(err.response.data)
        );
      }
    );

    retrieveStandards(
        (res) => {
          setStandards(res.data);
          setLoading(false);
        },
        (err) => {
          console.log(
              "Failed to retrieve standards, ERROR: ",
              JSON.stringify(err.response.data)
          );
          setLoading(false);
        }
    );

  }, []);


  function handleCriteriaDelete(event, id) {
    const buttonPosition = event.target.offsetTop;
    setStandardIdForDelete(id);
    setModalPosition({
      top: buttonPosition - event.target.getBoundingClientRect().height,
    });
    hideAllModals();
    setTimeout(()=>{
      setShowCriteriaModal(true);
    },100);
  }

  function handleSectionDelete(event, id) {
    setSectionIdForDelete(id);
    const buttonPosition = event.target.offsetTop;
    setModalPosition({
      top: buttonPosition - event.target.getBoundingClientRect().height,
    });
    hideAllModals();
    setShowSectionModal(true);
  }

  const handleCancel = () => {
    hideAllModals();
  };

  const handleConfirmDelete = () => {
    deleteSection(sectionIdForDelete,
        (res)=>{
          if(res && (res.status === 200 || res.status === 204)){
            setSections(sections.filter(sec => sec.id !== sectionIdForDelete));
          }
          hideAllModals();
        }, (err)=>{
          console.log(
              `Failed to delete section with id: ${sectionIdForDelete}: ${JSON.stringify(err.response.data)}`
          );
          hideAllModals();
        }
      );
  };

  const handleConfirmStandardDelete = () => {
    deleteStandard(standardIdForDelete,
        (res)=>{
          if(res && (res.status === 200 || res.status === 204)){
            setSections(sections.filter(sec => sec.id !== standardIdForDelete));
          }
          hideAllModals();
        }, (err)=>{
          console.log(
              `Failed to delete standard with id: ${standardIdForDelete}: ${JSON.stringify(err.response.data)}`
          );
          hideAllModals();
        }
    );
  };

  const handleAddSection = () => {
    hideAllModals();
    setShowAddSectionModal(true);
  };
  const handleAddCriteria = () => {
    hideAllModals();
    setShowAddCriteriaModal(true);
  };
  const hideAllModals = () => {
    setShowCriteriaModal(false);
    setShowSectionModal(false);
    setShowAddSectionModal(false);
    setShowAddCriteriaModal(false);
  };
  const addCriteriaForm = () => {
    setShowAddCriteriaModal(false);
  };
  const addSectionForm = () => {
    setShowAddSectionModal(false);
  };

  const hideEditSectionForm = ()=>{
    setShowEditSectionModal(false);
  };

  const hideEditStandardForm = ()=>{
    setShowEditStandardModal(false);
  };

  const handleEditSectionClick = (sectionId) => {
    hideAllModals();
    setSelectedSectionId(sectionId);
    setShowEditSectionModal(true);
  };

  const handleEditStandardClick = (standardId) => {
    hideAllModals();
    setStandardIdForUpdate(standardId);
    setShowEditStandardModal(true);
  };

  if(loading) {
    return (
        <main>
          <Loader />
        </main>
    );
  }

  return (
    <MainContainer>
      <MyOngoingContestTab />
      <SectionAndCriteriaContainer>
        {/* all sections */}
        <SectionsContainer>
          <HeadContent>
            <HeadText>{t("sections")}</HeadText>
            <div>
              <AddButton onClick={handleAddSection}>
                {t("add-section")} +
              </AddButton>
              {showAddSectionModal && (
                <AddSectionForm
                  hideModalFunction={addSectionForm}
                  clickOverlay={() => {
                    setShowAddSectionModal(false);
                  }}
                  sections={sections}
                  setSections={setSections}
                />
              )}
            </div>
          </HeadContent>
          {sections.map((section, index) => {
            return (
                <>
                  <Section key={index}>
                    <InnerText>{section.label}</InnerText>
                    <div>
                      <ButtonsContainer>
                        <EditButton onClick={()=>{handleEditSectionClick(section.id)}}>{t("edit")}</EditButton>
                        <DeleteButton onClick={(e) => handleSectionDelete(e, section.id)}>
                          {t("delete")}
                        </DeleteButton>
                      </ButtonsContainer>
                      { showSectionModal && section.id === sectionIdForDelete &&
                          <PopUpModal
                              key={index}
                              position={modalPosition}
                              fixedTextFields={[<p>Are you sure you want to delete this section?</p>]}
                              buttons={[
                                <button onClick={handleCancel}>{t("cancel")}</button>,
                                <button onClick={handleConfirmDelete}>
                                  {t("delete")}
                                </button>,
                              ]}
                          >
                          </PopUpModal>
                      }
                    </div>
                    {showEditSectionModal &&
                        <EditSectionForm
                            hideModalFunction={hideEditSectionForm}
                            clickOverlay={() => {
                              hideEditSectionForm();
                            }}
                            sectionId={selectedSectionId}
                            sections={sections}
                            setSections={setSections}
                        />
                    }
                  </Section>
                </>
            );
          })}
        </SectionsContainer>

        {/* all criteria */}
        <CriteriaContainer>
          <HeadContent>
            <HeadText>{t("criterias")}</HeadText>
            <div>
              <AddButton onClick={handleAddCriteria}>
                {t("add-criteria")} +
              </AddButton>
              {showAddCriteriaModal && (
                <CriteriaForm
                  hideModalFunction={addCriteriaForm}
                  clickOverlay={() => {
                    setShowAddCriteriaModal(false);
                  }}
                  sections={sections}
                  standards={standards}
                  setStandards={setStandards}
                />
              )}
            </div>
          </HeadContent>
          {standards.map((standard, index) => {
            return (
              <Criteria key={index}>
                <InnerText>{standard.label}</InnerText>
                <div>
                  <ButtonsContainer>
                    <EditButton onClick={()=>{handleEditStandardClick(standard.id)}}>{t("edit")}</EditButton>
                    <DeleteButton
                      onClick={(e) => {handleCriteriaDelete(e, standard.id)}}
                    >
                      {t("delete")}
                    </DeleteButton>
                  </ButtonsContainer>
                  {showCriteriaModal && standardIdForDelete === standard.id && (
                    <PopUpModal
                      key={index}
                      position={modalPosition}
                      fixedTextFields={[<p>Are you sure you want to delete this criteria?</p>]}
                      buttons={[
                        <button onClick={handleCancel}>{t("cancel")}</button>,
                        <button onClick={handleConfirmStandardDelete}>
                          {t("delete")}
                        </button>,
                      ]}
                    >
                    </PopUpModal>
                  )}
                  { showEditStandardModal && standardIdForUpdate === standard.id &&
                      <CriteriaForm
                          hideModalFunction={hideEditStandardForm}
                          clickOverlay={() => {
                            setShowEditStandardModal(false);
                          }}
                          sections={sections}
                          standards={standards}
                          setStandards={setStandards}
                          standardIdForUpdate={standardIdForUpdate}
                      />

                  }
                </div>
              </Criteria>
            );
          })}
        </CriteriaContainer>
      </SectionAndCriteriaContainer>
    </MainContainer>
  );
}
