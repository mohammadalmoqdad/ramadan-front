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
  Wrapper,
  SectionAndCriteriaContainer,
  HeadText,
  AddButton,
  EditButton,
  DeleteButton,
  InnerText,
} from "./ContestCriteria.styled";

import MyOngoingContestTab from "components/shared/MyOngoingContestTab";
import PopUpModal from "components/shared/PopUpModal";
import AddCriteriaForm from "./AddCriteriaForm";
import AddSectionForm from "./AddSectionForm";
import { useTranslation } from "react-i18next";

export default function ContestCriteria() {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
  const [hasPermission, setPermission] = useState(false);
  const [standards, setStandards] = useState([]);
  const context = useAdminContext();
  const { t } = useTranslation();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Standards" } });
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

    retrieveStandards(
      (res) => {
        setStandards(res.data.results);
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
  }, []);
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showAddCriteriaModal, setShowAddCriteriaModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({});

  function handleCriteriaDelete(event, index) {
    setDeleteIndex(index);
    const buttonPosition = event.target.offsetTop;
    setModalPosition({
      top: buttonPosition - event.target.getBoundingClientRect().height,
      //   left: buttonPosition.left,
    });
    hideAllModals();
    setTimeout(() => {
      setShowCriteriaModal(true);
    }, 0);
  }

  function handleSectionDelete(event, index) {
    setDeleteIndex(index);
    const buttonPosition = event.target.offsetTop;
    setModalPosition({
      top: buttonPosition - event.target.getBoundingClientRect().height,
      //   left: buttonPosition.left,
    });
    hideAllModals();
    setTimeout(() => {
      setShowSectionModal(true);
    }, 0);
  }

  const handleCancel = () => {
    hideAllModals();
  };

  const handleConfirmDelete = () => {
    // Delete the item here(it should get the id of the item so it gets deleted)
    hideAllModals();
  };

  const handleAddSection = (event) => {
    hideAllModals();
    setTimeout(() => {
      setShowAddSectionModal(true);
    }, 0);
  };
  const handleAddCriteria = (event) => {
    hideAllModals();
    setTimeout(() => {
      setShowAddCriteriaModal(true);
    }, 0);
  };
  const hideAllModals = () => {
    setShowCriteriaModal(false);
    setShowSectionModal(false);
    setShowAddSectionModal(false);
    setShowAddCriteriaModal(false);
  };
  const addCriteriaForm = () => {
    //submit the data in add criteria form
    setShowAddCriteriaModal(false);
  };
  const addSectionForm = () => {
    //submit the data in add criteria form
    setShowAddSectionModal(false);
  };
  const DUMMY_Sections = [
    {
      item: "Which prayers you make in the mosque?Which prayers you make in the mosque?",
    },
    {
      item: "Which prayers you make in the mosque?",
    },
    {
      item: "Which prayers you make in the mosque?",
    },
    {
      item: "Which prayers you make in the mosque?",
    },
    {
      item: "Which prayers you make in the mosque?",
    },
  ];
  const DUMMY_Criteria = [
    {
      item: "Criteria 1",
    },
    {
      item: "Criteria 2",
    },
    {
      item: "Criteria 3",
    },
    {
      item: "Criteria 4",
    },
  ];

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
                {t("add-section")}
              </AddButton>
              {showAddSectionModal && (
                <AddSectionForm
                  hideModalFunction={addSectionForm}
                  clickOverlay={() => {
                    setShowAddSectionModal(false);
                  }}
                />
              )}
            </div>
          </HeadContent>
          {DUMMY_Sections.map((section, index) => {
            return (
              <Section key={index}>
                <InnerText>{section.item}</InnerText>
                <div>
                  <EditButton>{t("edit")}</EditButton>
                  <DeleteButton onClick={(e) => handleSectionDelete(e, index)}>
                    {t("delete")}
                  </DeleteButton>
                  {showSectionModal && deleteIndex === index && (
                    <PopUpModal
                      key={index}
                      position={modalPosition}
                      fixedTextFields={[<p>SectionDelete</p>]}
                      buttons={[
                        <button onClick={handleCancel}>{t("cancel")}</button>,
                        <button onClick={handleConfirmDelete}>
                          {t("delete")}
                        </button>,
                      ]}
                    >
                      <p>Are you sure you want to delete this item?</p>
                    </PopUpModal>
                  )}
                </div>
              </Section>
            );
          })}
        </SectionsContainer>

        {/* all criteria */}
        <CriteriaContainer>
          <HeadContent>
            <HeadText>{t("criterias")}</HeadText>
            <div>
              <AddButton onClick={handleAddCriteria}>
                {t("add-criteria")}
              </AddButton>
              {showAddCriteriaModal && (
                <AddCriteriaForm
                  hideModalFunction={addCriteriaForm}
                  clickOverlay={() => {
                    setShowAddCriteriaModal(false);
                  }}
                />
              )}
            </div>
          </HeadContent>
          {DUMMY_Criteria.map((criteria, index) => {
            return (
              <Criteria key={index}>
                <InnerText>{criteria.item}</InnerText>
                <div>
                  <EditButton>{t("edit")}</EditButton>
                  <DeleteButton onClick={(e) => handleCriteriaDelete(e, index)}>
                    {t("delete")}
                  </DeleteButton>
                  {showCriteriaModal && deleteIndex === index && (
                    <PopUpModal
                      key={index}
                      position={modalPosition}
                      fixedTextFields={[<p>CriteriaDelete</p>]}
                      buttons={[
                        <button onClick={handleCancel}>{t("cancel")}</button>,
                        <button onClick={handleConfirmDelete}>
                          {t("delete")}
                        </button>,
                      ]}
                    >
                      <p>Are you sure you want to delete this item?</p>
                    </PopUpModal>
                  )}
                </div>
              </Criteria>
            );
          })}
        </CriteriaContainer>
      </SectionAndCriteriaContainer>
    </MainContainer>
  );
}
