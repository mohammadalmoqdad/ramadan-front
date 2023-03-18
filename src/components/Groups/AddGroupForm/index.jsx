import React, { useEffect, useState, useRef} from "react";
import {
  DivMultiselect,
  DropdownDivSelect,
  Span
} from "../Groups.styles";
import {
  DivTxtField,
  Form,
  FormInput,
  InputSubmit,
  DropdownListItem,
  DropdownDiv,
} from "../../shared/styles";
import Multiselect from "multiselect-react-dropdown";
import { DropdownList } from "../../Admins/EditAdminForm/EditAdminForm.styles";
import { DivPass } from "../../Admins/Admins.styles";
import {
  addGroup,
  addOrRemoveAdminToGroup,
  addOrRemoveMemberToGroup,
} from "../../../services/groupsServices";
import { useTranslation } from "react-i18next";

export default function AddGroupForm(props) {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isValidGroupName, setValidGroupName] = useState(true);
  const [messages, setMessages] = useState([]);
  const [classColor, setClassColor] = useState("");
  const multiselectRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    setMessages([]);
    setClassColor("");
  }, [selectedStudents, selectedAdminUserName, groupName]);

  useEffect(() => {
    resetAddGroupForm();
  }, [props.reset]);

  const resetAddGroupForm = () => {
    setSelectedStudents([]);
    setSelectedAdminUserName("");
    setGroupName("");
    setValidGroupName(true);
    if (multiselectRef && multiselectRef.current) {
      multiselectRef.current.resetSelectedValues();
    }
  };
  const handleUpdateSelectedStudentsChange = (e) => {
    let students = [];
    for (let i = 0; i < e.length; i++) {
      students.push(e[i].person.username);
    }
    setSelectedStudents(students);
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

  const handleAddGroupSubmit = (e) => {
    e.preventDefault();

    if (selectedAdminUserName === "") {
      setMessages([t("select-moderator")]);
      setClassColor("red");
      return;
    }

    let data = {
      admin: selectedAdminUserName,
      name: groupName,
      group_students: selectedStudents
    };

    addGroup(
        {
          name: groupName
        },
      (res) => {
        if (res && res.status === 201) {
          data.id = res.data.id;
          addOrRemoveAdminFromGroup(
              {
                persons: [selectedAdminUserName],
                "action": "add"
              },
              res.data.id,
              selectedStudents
          );
        }
      },
      (err) => {
        let errMessages = [];
        errMessages.push(t("group-not-add"));
        if (err.response.data) {
          let obj = err.response.data;
          Object.keys(obj).forEach((e) => {
            errMessages.push(`${obj[e]} : ${e}`);
          });
        }
        setClassColor("red");
        setMessages(errMessages);
      }
    );
  };

  const addOrRemoveAdminFromGroup = (data, groupId, members) =>{
    addOrRemoveAdminToGroup(data, groupId, (res)=>{
      if (res && res.status === 200) {
        addOrRemoveMemberFromGroup({
            persons: members,
            "action": "add"
          }, groupId);
      }
    }, (err)=>{
      let errMessages = [];
      errMessages.push(t("group-not-add"));
      if (err.response.data) {
        let obj = err.response.data;
        Object.keys(obj).forEach((e) => {
          errMessages.push(`${obj[e]} : ${e}`);
        });
      }
      setClassColor("red");
      setMessages(errMessages);
    });
  };

  const addOrRemoveMemberFromGroup = (data, groupId) => {
    addOrRemoveMemberToGroup(
        data,
        groupId,
        (res) => {
          if (res && res.status === 200) {
            resetAddGroupForm();
            setMessages([t("add-group-success")]);
            setClassColor("green");

            setTimeout(() => {
              props.setGroups([...props.studentsGroups, data]);
              setClassColor("");
              setMessages([]);

              window.location.reload(true);
            }, 2000);
          }
        },
        (err) => {
          let errMessages = [];
          errMessages.push(t("group-not-add"));
          if (err.response.data) {
            let obj = err.response.data;
            Object.keys(obj).forEach((e) => {
              errMessages.push(`${obj[e]} : ${e}`);
            });
          }
          setClassColor("red");
          setMessages(errMessages);
        });
  };

  return (
    <Form onSubmit={handleAddGroupSubmit}>
      {props.students && props.students.length > 0 ? (
        <DropdownDiv className="DropdownDiv">
          {/* <Span>{t("suggestion-students")}</Span> */}
          <DropdownDivSelect>
            <DivMultiselect>
              <Multiselect
                onSelect={handleUpdateSelectedStudentsChange}
                onRemove={handleUpdateSelectedStudentsChange}
                options={props.students}
                ref={multiselectRef}
                displayValue="full_name"
                popupHeight="1rem"
                popupwidth="5rem"
                placeholder={t("suggestion-students")}
              />
            </DivMultiselect>
          </DropdownDivSelect>
        </DropdownDiv>
      ) : (
        <Span style={{ margin: "1rem" }}>{t("no-students")}</Span>
      )}
      {props.admins && props.admins.length > 0 && (
        <DropdownDiv className="DropdownDiv">
          <DropdownList
            className="DropdownList_groups"
            onChange={handleAdminSelectChange}
            value={selectedAdminUserName}
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
          placeholder={t("enter-group-name")}
          value={groupName}
          onChange={handleGroupNameChange}
          type="text"
          required
        />
      </DivTxtField>
      {!isValidGroupName && (
        <DivPass className={classColor}>{t("group-name-condition")}</DivPass>
      )}

      <Span />
      {messages.length > 0 &&
        messages.map((message, index) => {
          return (
            <DivPass className={classColor} key={index}>
              {message}
            </DivPass>
          );
        })}
      <InputSubmit type="submit" value="login">
        {t("add")}
      </InputSubmit>

      <InputSubmit type="button" onClick={props.closeAddGroupForm}>
        {t("add-cancel")}
      </InputSubmit>
    </Form>
  );
}
