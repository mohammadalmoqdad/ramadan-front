import React, { useEffect, useState, useRef } from "react";
import {
  DivMultiselect,
  DropdownDivSelect,
  Span
} from "../Groups.styles";
import {
  DivTxtField,
  DropdownDiv,
  Form,
  InputSubmit,
  DropdownListItem,
  FormInput,
} from "../../shared/styles";
import Multiselect from "multiselect-react-dropdown";
import { DropdownList } from "../../Admins/EditAdminForm/EditAdminForm.styles";
import { DivPass } from "../../Admins/Admins.styles";
import {
  addOrRemoveAdminToGroup,
  addOrRemoveMemberToGroup,
  retrieveGroupById,
  updateGroup
} from "../../../services/groupsServices";

import { useTranslation } from "react-i18next";

export default function EditGroupForm(props) {
  const [newSelectedStudents, setNewSelectedStudents] = useState([]);
  const [newSelectedStudentsUsernames, setNewSelectedStudentsUsernames] = useState([]);
  const [currentSelectedStudents, setCurrentSelectedStudents] = useState([]);
  const [currentSelectedStudentsUsernames, setCurrentSelectedStudentsUsernames] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState({});
  const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
  const [currentSelectedAdminUserName, setCurrentSelectedAdminUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isValidGroupName, setValidGroupName] = useState(true);
  const [messages, setMessages] = useState([]);
  const [classColor, setClassColor] = useState("");
  const multiselectRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    setMessages([]);
    setClassColor("");
  }, [
    newSelectedStudents,
    selectedAdminUserName,
    groupName,
    selectedGroup
  ]);

  useEffect(() => {
    resetEditGroupForm();
  }, [props.reset]);

  useEffect(() => {
    retrieveGroupById(props.selectedGroupId,
        (res)=>{
          if(res && res.status ===200){
            setSelectedGroup(res.data);

            if(res.data && res.data.members?.length > 0){
              let studentsUsernamesInSelectedGroups = res.data.members.map(member => member.username);
              setCurrentSelectedStudentsUsernames(studentsUsernamesInSelectedGroups);
              setCurrentSelectedStudents(props.students.filter(
                  student => studentsUsernamesInSelectedGroups.includes(student.person.username)
                  )
              );
            }else{
              setCurrentSelectedStudentsUsernames([]);
              setCurrentSelectedStudents([]);
            }

            if(res.data && res.data.admins?.length > 0){
              setCurrentSelectedAdminUserName(res.data.admins[0].username);
            }else{
              setCurrentSelectedAdminUserName("");
            }
            setGroupName(res.data.name);
          }
        },(err)=>{
              console.log(`Failed to get group by Id: ${props.selectedGroupId}: ${err}`);
        }
    );
  }, [props.selectedGroupId]);

  const resetEditGroupForm = () => {
    if (multiselectRef && multiselectRef.current) {
      multiselectRef.current.resetSelectedValues();
    }
    setNewSelectedStudents([]);
    setNewSelectedStudentsUsernames([]);
    setSelectedAdminUserName("");
    setSelectedGroup({});
    setGroupName("");
    setValidGroupName(true);
  };

  const handleUpdateSelectedStudentsChange = (e) => {
    let selectedStudents = [];
    for (let i = 0; i < e.length; i++) {
      selectedStudents.push(e[i].person.username);
    }
    setNewSelectedStudentsUsernames(selectedStudents);
  };

  const handleAdminSelectChange = (e) => {
    setSelectedAdminUserName(e.target.value);
  };

  const handleGroupNameChange = (e) => {
    if (e.target.value > 30) {
      setValidGroupName(false);
    } else {
      setValidGroupName(true);
    }
    setGroupName(e.target.value);
  };

  const handleEditGroupSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(selectedGroup).length === 0) {
      setClassColor("red");
      setMessages([t("group-condition")]);
      return;
    }

    if (selectedAdminUserName === "") {
      setClassColor("red");
      setMessages([t("select-moderator")]);
      return;
    }

    let data = {
      admins: [selectedAdminUserName],
      name: groupName,
      members: newSelectedStudents
    };

    updateGroup(
      props.selectedGroupId,
      data,
      (res) => {
        if (res && res.status === 200) {
          let updatedGroup = props.studentsGroups.filter(
            (group) => group.id === props.selectedGroupId
          )[0];
          updatedGroup.admins_count = [selectedAdminUserName].length;
          updatedGroup.name = groupName;
          updatedGroup.members_count = newSelectedStudentsUsernames.length;
          removeCurrentAdmins(updatedGroup);
        }
      },(err) => {
          handleError(err);
        }
    );
  };

  const removeCurrentAdmins = (updatedGroup)=>{
    addOrRemoveAdminToGroup({
          persons: [currentSelectedAdminUserName],
          action: "remove"
        },
        props.selectedGroupId,
        (res) => {
          if (res && res.status === 200) {
              addTheNewAdmins(updatedGroup);
          }
        },(err) => {
          handleError(err);
        }
    );
  };


  const addTheNewAdmins = (updatedGroup)=>{
    addOrRemoveAdminToGroup({
          persons: [selectedAdminUserName],
          action: "add"
        },
        props.selectedGroupId,
        (res) => {
          if (res && res.status === 200) {
            removeCurrentMembers(updatedGroup);
          }
        }, (err) => {
          handleError(err);
        }
    );
  };

  const removeCurrentMembers = (updatedGroup)=>{
    addOrRemoveMemberToGroup({
          persons: currentSelectedStudentsUsernames,
          action: "remove"
        },
        props.selectedGroupId,
        (res) => {
          if (res && res.status === 200) {
            addTheNewMembers(updatedGroup);
          }
        }, (err) => {
          handleError(err);
        }
    );
  };

  const addTheNewMembers = (updatedGroup)=>{
    addOrRemoveMemberToGroup({
          persons: newSelectedStudentsUsernames,
          action: "add"
        },
        props.selectedGroupId,
        (res) => {
          if (res && res.status === 200) {
            resetEditGroupForm();

            setClassColor("green");
            setMessages([t("group-edit-success")]);

            setTimeout(() => {
              props.setGroups(
                  props.studentsGroups.map(group => group.id !== props.selectedGroupId ? group : updatedGroup)
              );
              setClassColor("");
              setMessages([]);
              props.closeEditGroupForm();
            }, 2000);
          }
        }, (err) => {
          handleError(err);
        }
    );
  };

  const handleError = (err)=>{
    let errMessages = [];
    errMessages.push([t("group-edit-failed")]);
    if (err.response.data) {
      let obj = err.response.data;
      Object.keys(obj).forEach((e) => {
        errMessages.push(`${obj[e]} : ${e}`);
      });
    }
    setClassColor("red");
    setMessages(errMessages);
  };

  return (
    <Form onSubmit={handleEditGroupSubmit}>

      <DropdownDivSelect>
        <Span>{t("selected-group")}</Span>
        <Span>{selectedGroup.name}</Span>
      </DropdownDivSelect>


      {props.hasPermission ? (
        props.students && props.students.length > 0 ? (
          <DropdownDiv className="DropdownDiv">
            <DropdownDivSelect>
              <Span>{t("suggestion-students")}</Span>
              <DivMultiselect>
                <Multiselect
                  onSelect={handleUpdateSelectedStudentsChange}
                  onRemove={handleUpdateSelectedStudentsChange}
                  selectedValues={currentSelectedStudents}
                  options={props.students}
                  ref={multiselectRef}
                  displayValue="full_name"
                  placeholder=""
                  popupHeight="1rem"
                  popupwidth="5rem"
                />
              </DivMultiselect>
            </DropdownDivSelect>
          </DropdownDiv>
        ) : (
          <Span style={{ margin: "1rem" }}>{t("no-students")}</Span>
        )
      ) : (
        <></>
      )}
      {props.admins && props.admins.length > 0 && (
        <DropdownDiv className="DropdownDiv">
          <DropdownList
            className="DropdownList_groups"
            value={selectedAdminUserName.length > 0 ? selectedAdminUserName : currentSelectedAdminUserName}
            onChange={handleAdminSelectChange}
          >
            <DropdownListItem key={0} value="">
              {t("select-moderator")}
            </DropdownListItem>
            {props.admins.map((admin, index) => {
              if (
                admin?.person?.first_name?.length > 0 ||
                admin?.person?.last_name?.length > 0
              ) {
                return (
                  <DropdownListItem key={index} value={admin.person.username}>
                    {admin.person.first_name} {admin.person.last_name}
                  </DropdownListItem>
                );
              } else {
                return (
                  <DropdownListItem key={index} value={admin.person.username}>
                    {admin.person.username}
                  </DropdownListItem>
                );
              }
            })}
          </DropdownList>
        </DropdownDiv>
      )}
      <DivTxtField>
        <Span />
        <FormInput
          placeholder={t("enter-new-group-name")}
          value={groupName}
          onChange={handleGroupNameChange}
          type="text"
          required
        />
      </DivTxtField>
      {!isValidGroupName && (
        <DivPass className={classColor}>{t("group-name-condition")}</DivPass>
      )}
      {messages.length > 0 &&
        messages.map((message, index) => {
          return (
            <DivPass className={classColor} key={index}>
              {message}
            </DivPass>
          );
        })}
      <InputSubmit type="submit" value="login">
        {t("edit-btu")}
      </InputSubmit>
      <InputSubmit type="button" onClick={props.closeEditGroupForm}>
        {t("edit-cancel")}
      </InputSubmit>
    </Form>
  );
}
