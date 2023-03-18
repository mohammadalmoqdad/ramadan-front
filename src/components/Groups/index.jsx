import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "../shared/Tabs";
import AddGroupForm from "./AddGroupForm";
import EditGroupForm from "./EditGroupForm";
import { retrieveStudents } from "../../services/studentsServices";
import { retrieveAdmins } from "../../services/adminsServices";
import { deleteGroup, retrieveGroups } from "../../services/groupsServices";
import Modal from "../shared/Modal";
import Container, {
  Button,
  DropdownList,
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

// new import Content
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

// Dummy Data Content
const DummyGroups = [
  {
    id: "g1",
    members_count: 30,
    admins_count: 3,
    name: "Group1",
    created_at: "2023-01-01T23:29:58.319417Z",
  },
  {
    id: "g2",
    members_count: 24,
    admins_count: 2,
    name: "Group2",
    created_at: "2023-02-01T23:29:58.319417Z",
  },
  {
    id: "g3",
    members_count: 35,
    admins_count: 3,
    name: "Group3",
    created_at: "2023-04-01T23:29:58.319417Z",
  },
  {
    id: "g4",
    members_count: 50,
    admins_count: 4,
    name: "Group4",
    created_at: "2023-08-01T23:29:58.319417Z",
  },
];

export default function Groups() {
  const [admins, setAdmins] = useState([]);
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [groupIdToDelete, setGroupIdToDelete] = useState("");
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [hasPermission, setPermission] = useState(false);
  const [groupsLabels, setGroupsLabels] = useState([]);
  const [groupsContents, setGroupsContents] = useState([]);
  const [showDeleteGroupFailedMsg, setShowDeleteGroupFailedMsg] =
    useState(false);
  const [loading, setLoading] = useState(false);

  // new states
  const [addGroupFormOpen, setAddGroupFormOpen] = useState(false);
  const [editGroupFormOpen, setEditGroupFormOpen] = useState(false);
  const [groupIdToEdit, setGroupIdToEdit] = useState("");
  //
  const { t } = useTranslation();
  //

  const context = useAdminContext();
  let navigate = useNavigate();

  // console.log(groups);
  // console.log(groupIdToDelete);
  // console.log(groupIdToEdit);

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
  }, []);

  useEffect(() => {
    if (students && students.length > 0) {
      console.log(students);
      students.map(
        (student) =>
          (student["full_name"] = student.first_name + " " + student.last_name)
      );
    }
  }, [students]);

  useEffect(() => {
    setPermission(
      Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);

  // Old Content

  // useEffect(() => {
  //   let labels = [];
  //   let contents = [];

  //   if (groups && groups.length > 0) {
  //     labels.push("تعديل مجموعة");
  //     contents.push(
  //       <EditGroupForm
  //         studentsGroups={groups}
  //         setGroups={setGroups}
  //         students={students}
  //         admins={admins}
  //         hasPermission={hasPermission}
  //       />
  //     );
  //   }
  //   if (hasPermission) {
  //     labels.push("إضافة مجموعة");
  //     contents.push(
  //       <AddGroupForm
  //         students={students}
  //         admins={admins}
  //         studentsGroups={groups}
  //         setGroups={setGroups}
  //       />
  //     );
  //   }
  //   setGroupsLabels(labels);
  //   setGroupsContents(contents);
  // }, [groups, students, hasPermission]);

  //

  const handleOpenGroupModalChange = (groupId) => {
    // setGroupIdToDelete(e.target.value); // replace event function (e) with binding method
    setGroupIdToDelete((prevState) => groupId); // new content
    setOpenGroupModal(true);
  };

  const addGroupFormHandler = () => {
    setAddGroupFormOpen((prevState) => !prevState);
    setEditGroupFormOpen((prevState) => false);
  };

  const closeAddGroupFormHandler = () => {
    setAddGroupFormOpen((prevState) => false);
  };

  const editGroupFormHandler = (groupId) => {
    setEditGroupFormOpen((prevState) => !prevState);
    setGroupIdToEdit((prevState) => groupId);
    setAddGroupFormOpen((prevState) => false);
  };

  const closeEditGroupFormHandler = () => {
    setEditGroupFormOpen((prevState) => false);
  };

  const deleteGroupFunction = () => {
    deleteGroup(
      groupIdToDelete,
      (res) => {
        if (res && res.status === 204) {
          console.log(`Group with id: ${groupIdToDelete} has been deleted`);
          setGroups(
            groups.filter((group) => group.id !== Number(groupIdToDelete))
          );
        }
      },
      (err) => {
        console.log(
          "Failed to delete group: ",
          JSON.stringify(err.response.data)
        );
        if (err?.response?.status === 500) {
          setShowDeleteGroupFailedMsg(true);
          setTimeout(() => {
            setShowDeleteGroupFailedMsg(false);
          }, 7000);
        }
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

  // console.log(groups);

  return (
    <>
      {/* New Content  */}

      <GroupsContentDefault>
        <MyOngoingContestTab />

        {/* Group Title Line  */}
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

        {/* delete Modle  */}
        {openGroupModal && (
          <Modal
            title={t("delete-confirm")}
            content={t("delete-msg")}
            deleteBtn={t("delete")}
            cancelBtn={t("cancle")}
            setOpenModal={setOpenGroupModal}
            deleteFunction={deleteGroupFunction}
          />
        )}

        {/* Groups mapping  */}
        {groups && groups.length > 0 ? (
          groups.map((group) => (
            <GroupCard key={group.id}>
              {true ? (
                <>
                  <NormalDiv>
                    <RowContainer>
                      <IconBox>
                        <GroupIcon />
                      </IconBox>
                      <ColumnContainer style={{ marginLeft: "10px" }}>
                        <BoldText>{group.name}</BoldText>
                        <LightText>
                          {`${t("joinned")} ${new Date(
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

                  <NormalDiv mobileChange={true}>
                    <ActionButton
                      name="quit"
                      backGround="#ff53671e"
                      color="#FF5367"
                      mobileChange={true}
                    >
                      {t("quit")}
                    </ActionButton>
                  </NormalDiv>
                  {editGroupFormOpen && groupIdToEdit === group.id && (
                    <AddEditFormContainer
                      top="80px"
                      right="100px"
                      topMobile="240px"
                      rightMobile="10px"
                    >
                      <EditGroupForm
                        studentsGroups={groups.filter(
                          (group) => group.id === groupIdToEdit
                        )}
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

      {/* Old Content  */}

      {/* <Container>
        {openGroupModal && (
          <Modal
            title="تأكيد الحذف"
            content="هل تريد حذف هذه المجموعة؟"
            deleteBtn="حذف"
            cancelBtn="إلغاء"
            setOpenModal={setOpenGroupModal}
            deleteFunction={deleteGroupFunction}
          />
        )}
        {groups && groups.length > 0 ? (
          <>
            <DropdownList className="DropdownList">
              <DropdownListItem className="title">
                <Span>المجموعات الحالية</Span>
              </DropdownListItem>
              <div className="dropdown-scroll-container">
                {groups.map((group, index) => {
                  return (
                    <DropdownListItem key={index}>
                      {hasPermission ? (
                        <>
                          <Button
                            id="deleteBtn"
                            onClick={handleOpenGroupModalChange}
                            value={group.id}
                          >
                            حذف
                          </Button>
                          <Span>{group.name}</Span>
                        </>
                      ) : (
                        <Span style={{ width: "100%" }}>{group.name}</Span>
                      )}
                    </DropdownListItem>
                  );
                })}
                {showDeleteGroupFailedMsg && (
                  <DropdownListItem>
                    <H3Pass className="red">
                      يرجى إزالة أو نقل الطلاب لمجموعة أخرى قبل حذف هذه المجموعة
                    </H3Pass>
                  </DropdownListItem>
                )}
              </div>
            </DropdownList>
            <Tabs labels={groupsLabels} contents={groupsContents} />
          </>
        ) : hasPermission ? (
          <Tabs labels={groupsLabels} contents={groupsContents} />
        ) : (
          <Tabs
            labels={["المجموعات"]}
            contents={[<H5>لا يوجد لديك مجموعات </H5>]}
          />
        )}
      </Container> */}
    </>
  );
}
