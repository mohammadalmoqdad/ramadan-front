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

export default function ContestCriteria() {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
  const [hasPermission, setPermission] = useState(false);
  const [standards, setStandards] = useState([]);
  const context = useAdminContext();
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
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({});

  function handleDelete(event) {
    const buttonPosition = event.target.getBoundingClientRect();
    setModalPosition({
      top: buttonPosition.top + buttonPosition.height,
      //   left: buttonPosition.left,
    });
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    // Delete the item here(it should get the id of the item so it gets deleted)
    setShowModal(false);
  };

  return (
    <MainContainer>
      <MyOngoingContestTab />
      <SectionAndCriteriaContainer>
        {/* all sections */}
        <SectionsContainer>
          <HeadContent>
            <HeadText>Sections</HeadText>
            <AddButton>Add Section +</AddButton>
          </HeadContent>

          <Section>
            <InnerText>Section1</InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Section>
          <Section>
            <InnerText>
              Which prayers you make in the mosque?Which prayers you make in the
              mosque?
            </InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
              {showModal && (
                <PopUpModal
                  position={modalPosition}
                  fixedTextFields={[<p>This is text</p>]}
                  buttons={[
                    <button onClick={handleCancel}>Cancel</button>,
                    <button onClick={handleConfirmDelete}>Delete</button>,
                  ]}
                >
                  <p>Are you sure you want to delete this item?</p>
                </PopUpModal>
              )}
            </div>
          </Section>
          <Section>
            <InnerText>Section1</InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Section>
          <Section>
            <InnerText>
              Which prayers you make in the mosque?Which prayers you make in the
              mosque?
            </InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
              {showModal && (
                <PopUpModal
                  position={modalPosition}
                  fixedTextFields={[<p>This is text text</p>]}
                  buttons={[
                    <button onClick={handleCancel}>Cancel</button>,
                    <button onClick={handleConfirmDelete}>Delete</button>,
                  ]}
                >
                  <p>Are you sure you want to delete this item?</p>
                </PopUpModal>
              )}
            </div>
          </Section>
        </SectionsContainer>

        {/* all criteria */}
        <CriteriaContainer>
          <HeadContent>
            <HeadText>Criteria</HeadText>
            <div>
              <AddButton onClick={handleDelete}>Add Criteria +</AddButton>
              {showModal && (
                <PopUpModal
                  position={modalPosition}
                  fixedTextFields={[<p>This is text text</p>]}
                  buttons={[
                    <button onClick={handleCancel}>Cancel</button>,
                    <button onClick={handleConfirmDelete}>Delete</button>,
                  ]}
                >
                  <p>Are you sure you want to delete this item?</p>
                </PopUpModal>
              )}
            </div>
          </HeadContent>
          <Criteria>
            <InnerText>Criteria1</InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Criteria>
          <Criteria>
            <InnerText>Criteria1</InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Criteria>
          <Criteria>
            <InnerText>Criteria1</InnerText>
            <div>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </div>
          </Criteria>
        </CriteriaContainer>
      </SectionAndCriteriaContainer>
    </MainContainer>
  );
}
