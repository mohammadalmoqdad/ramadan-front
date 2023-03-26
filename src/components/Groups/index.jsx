import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddGroupForm from "./AddGroupForm";
import EditGroupForm from "./EditGroupForm";
import { retrieveStudents } from "../../services/studentsServices";
import { retrieveAdmins } from "../../services/adminsServices";
import { deleteGroup, retrieveGroups } from "../../services/groupsServices";
import Modal from "../shared/Modal";
import {
  DropdownListItem,
  Span,
} from "../Admins/Admins.styles";
import { useAdminContext } from "../../contexts/AdminContext";
import { H5 } from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { H3Pass } from "../shared/styles";
import Loader from "../Loader";
import { isSuperAdmin } from "../../util/ContestPeople_Role";

import GroupsContentDefault, {
  GroupsTitleLine,
  GroupCard,
  NormalDiv,
  AddEditFormContainer,
  RowContainer,
  IconBox,
  ColumnContainer,
  BoldText,
  LightText,
  MembersImg,
  ActionButton,
} from "./Groups.styles";
import MyOngoingContestTab from "../shared/MyOngoingContestTab/index";
import { ReactComponent as GroupIcon } from "../../assets/icons/groupIcon.svg";
import { ReactComponent as AddGroupIcon } from "../../assets/icons/addGroupIcon.svg";
import { colors } from "styles";
import { useTranslation } from "react-i18next";


export default function Groups() {
  const [admins, setAdmins] = useState([]);
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [groupIdToDelete, setGroupIdToDelete] = useState("");
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [hasPermission, setPermission] = useState(false);
  const [showDeleteGroupFailedMsg, setShowDeleteGroupFailedMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addGroupFormOpen, setAddGroupFormOpen] = useState(false);
  const [editGroupFormOpen, setEditGroupFormOpen] = useState(false);
  const [groupIdToEdit, setGroupIdToEdit] = useState("");
  const { t } = useTranslation();
  const context = useAdminContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Groups" } });
      return;
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
    retrieveAdmins(
      (res) => {
        setAdmins(res.data);
      },
      (err) => {
        console.log(
          "Failed to retrieve admins: " + JSON.stringify(err.response.data)
        );
      }
    );

    retrieveGroups(
      (res) => {
        setGroups(res.data);
        // setGroups(DummyGroups); // dummy data to styling
      },
      (err) => {
        console.log(
          "Failed to retrieve groups: " + JSON.stringify(err.response.data)
        );
      }
    );

    retrieveStudents(
        (res) => {
          setStudents(res.data);
          setLoading(false);
        },
        (err) => {
          console.log(
              "Failed to retrieve students: " + JSON.stringify(err.response.data)
          );
          setLoading(false);
        }
    );


  }, []);

  useEffect(() => {
    if (students && students.length > 0) {
      console.log(students);
      students.map(
        (student) =>
          (student["full_name"] = student.person.first_name + " " + student.person.last_name)
      );
    }
  }, [students]);

  useEffect(() => {
    setPermission(
      Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);

  const handleOpenGroupModalChange = (groupId) => {
    setGroupIdToDelete(groupId);
    setOpenGroupModal(true);
  };

  const addGroupFormHandler = () => {
    setAddGroupFormOpen((prevState) => !prevState);
    setEditGroupFormOpen(false);
  };

  const closeAddGroupFormHandler = () => {
    setAddGroupFormOpen(false);
  };

  const editGroupFormHandler = (groupId) => {
    setEditGroupFormOpen((prevState) => !prevState);
    setGroupIdToEdit( groupId);
    setAddGroupFormOpen(false);
  };

  const closeEditGroupFormHandler = () => {
    setEditGroupFormOpen(false);
  };

  const deleteGroupFunction = () => {
    deleteGroup(
      groupIdToDelete,
      (res) => {
        if (res && (res.status === 204 || res.status === 200)) {
          console.log(`Group with id: ${groupIdToDelete} has been deleted`);
          setGroups(
            groups.filter((group) => group.id !== groupIdToDelete)
          );
        }
      },
      (err) => {
        console.log(
          "Failed to delete group: ",
          JSON.stringify(err.response.data)
        );
        setShowDeleteGroupFailedMsg(true);
        setTimeout(() => {
          setShowDeleteGroupFailedMsg(false);
        }, 7000);
      }
    );
    setOpenGroupModal(false);
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }


  return (
    <>

      <GroupsContentDefault>
        <MyOngoingContestTab />

        <GroupsTitleLine>
          <BoldText>
            {groups.length} {t("groups")}
          </BoldText>
          <ActionButton
            name="add"
            color="#FF5367"
            width="130px"
            onClick={addGroupFormHandler}
          >
            <span style={{ margin: "5px" }}>{t("add-group")}</span>
            <AddGroupIcon />
          </ActionButton>

          {addGroupFormOpen && (
            <AddEditFormContainer
              top="3.4375rem"
              right="-2.1875rem"
              rightMobile="0.625rem"
            >
              <AddGroupForm
                students={students}
                admins={admins}
                studentsGroups={groups}
                setGroups={setGroups}
                closeAddGroupForm={closeAddGroupFormHandler}
              />
            </AddEditFormContainer>
          )}
        </GroupsTitleLine>

        {openGroupModal && (
          <Modal
            title={t("delete-confirm")}
            content={t("delete-msg")}
            deleteBtn={t("delete")}
            cancelBtn={t("cancel")}
            setOpenModal={setOpenGroupModal}
            deleteFunction={deleteGroupFunction}
          />
        )}

        {groups && groups.length > 0 ? (
          groups.map((group) => (
            <GroupCard key={group.id}>
              {hasPermission ? (
                <>
                  <NormalDiv>
                    <RowContainer>
                      <IconBox>
                        <GroupIcon />
                      </IconBox>
                      <ColumnContainer style={{ marginLeft: "10px" }}>
                        <BoldText>{group.name}</BoldText>
                        <LightText>
                          {`${t("joined")} ${new Date(
                            group.created_at
                          ).toLocaleString()}`}
                        </LightText>
                      </ColumnContainer>
                    </RowContainer>
                  </NormalDiv>

                  <NormalDiv>
                    <ColumnContainer center={true}>
                      <MembersImg>{group.members_count}</MembersImg>
                      <LightText>{t("participants")}</LightText>
                    </ColumnContainer>
                  </NormalDiv>

                  <NormalDiv mobileChange={true}>
                    <RowContainer mobileChange={true}>
                      <ActionButton
                        name="edit"
                        backGround={colors.yellow}
                        color="black"
                        onClick={editGroupFormHandler.bind(null, group.id)}
                      >
                        {t("edit")}
                      </ActionButton>
                      <ActionButton
                        name="delete"
                        backGround="#ff53671e"
                        color="#FF5367"
                        onClick={handleOpenGroupModalChange.bind(
                          null,
                          group.id
                        )}
                      >
                        {t("delete")}
                      </ActionButton>
                    </RowContainer>
                  </NormalDiv>

                  {editGroupFormOpen && groupIdToEdit === group.id && (
                    <AddEditFormContainer
                      top="80px"
                      right="100px"
                      topMobile="240px"
                      rightMobile="10px"
                    >
                      <EditGroupForm
                        studentsGroups={groups}
                        selectedGroupId = {groupIdToEdit}
                        setGroups={setGroups}
                        students={students}
                        admins={admins}
                        hasPermission={hasPermission}
                        closeEditGroupForm={closeEditGroupFormHandler}
                      />
                    </AddEditFormContainer>
                  )}

                  {showDeleteGroupFailedMsg && groupIdToDelete === group.id && (
                    <NormalDiv deleteFailed={true}>
                      <DropdownListItem>
                        <H3Pass className="red">
                          {t("delete-group-failed-msg")}
                        </H3Pass>
                      </DropdownListItem>
                    </NormalDiv>
                  )}
                </>
              ) : (
                <Span style={{ width: "100%" }}>{group.name}</Span>
              )}
            </GroupCard>
          ))
        ) : (
          <H5>{t("no-groups")}</H5>
        )}
      </GroupsContentDefault>
    </>
  );
}
