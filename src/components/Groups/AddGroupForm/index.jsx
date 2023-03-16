import React, { useEffect, useState } from "react";
import {
  DivMultiselect,
  DropdownDivSelect,
  Span,
  AnnouncementsFormInput,
  RemoveBtn,
  AddBtn,
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
import { addGroup } from "../../../services/groupsServices";
import InputField from "../../ContestCriteria/InputField";
import { useTranslation } from "react-i18next";

export default function AddGroupForm(props) {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isValidGroupName, setValidGroupName] = useState(true);
  const [announcements, setAnnouncements] = useState([""]);
  const [isSemiColonExists, setSemiColonExists] = useState(false);
  const [messages, setMessages] = useState([]);
  const [classColor, setClassColor] = useState("");
  const multiselectRef = React.createRef();

  const { t } = useTranslation();

  useEffect(() => {
    setMessages([]);
    setClassColor("");
  }, [selectedStudents, selectedAdminUserName, groupName, announcements]);

  useEffect(() => {
    resetAddGroupForm();
  }, [props.reset]);

  const resetAddGroupForm = () => {
    setSelectedStudents([]);
    setSelectedAdminUserName("");
    setGroupName("");
    setValidGroupName(true);
    setSemiColonExists(false);
    setAnnouncements([""]);
    if (multiselectRef && multiselectRef.current) {
      multiselectRef.current.resetSelectedValues();
    }
  };
  const handleUpdateSelectedStudentsChange = (e) => {
    let students = [];
    for (let i = 0; i < e.length; i++) {
      students.push(e[i].username);
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

  const handleAnnouncementsChange = (e, index) => {
    let notesArray = [...announcements];
    notesArray.splice(index, 1, e.target.value);
    setAnnouncements(notesArray);
  };

  const handleAddBtnChange = () => {
    setAnnouncements([...announcements, ""]);
  };

  const handleRemoveBtnChange = (e, index) => {
    e.preventDefault();
    let notesArray = [...announcements];
    notesArray.splice(index, 1);
    setAnnouncements(notesArray);
  };

  const handleAddGroupSubmit = (e) => {
    e.preventDefault();

    if (selectedAdminUserName === "") {
      setMessages([t("select-moderator")]);
      setClassColor("red");
      return;
    }

    let valid = true;
    announcements.forEach((announcement) => {
      if (announcement.includes(";")) {
        valid = false;
      }
    });

    if (!valid) {
      setSemiColonExists(true);
      setClassColor("red");
      return;
    } else {
      setSemiColonExists(false);
    }

    let data = {
      admin: selectedAdminUserName,
      name: groupName,
      group_students: selectedStudents,
      announcements: announcements
        .filter((announcement) => announcement.trim().length > 0)
        .join(";"),
    };

    addGroup(
      data,
      (res) => {
        if (res && res.status === 201) {
          data.id = res.data.id;
          resetAddGroupForm();

          setMessages([t("add-group-success")]);
          setClassColor("green");

          setTimeout(() => {
            props.setGroups([...props.studentsGroups, data]);
            setClassColor("");
            setMessages([]);
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
      }
    );
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
                admin?.first_name?.length > 0 ||
                admin?.last_name?.length > 0
              ) {
                return (
                  <DropdownListItem key={index} value={admin.username}>
                    {admin.first_name} {admin.last_name}
                  </DropdownListItem>
                );
              } else {
                return (
                  <DropdownListItem key={index} value={admin.username}>
                    {admin.username}
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
      {announcements?.map((inputItem, index) => {
        return (
          <DivTxtField key={index} style={{ width: "100%" }}>
            <Span />
            <AnnouncementsFormInput
              placeholder={t("adve")}
              key={index}
              value={inputItem}
              onChange={(e) => handleAnnouncementsChange(e, index)}
              type="text"
            />
            {announcements.length > 1 && (
              <RemoveBtn onClick={(e) => handleRemoveBtnChange(e, index)}>
                -
              </RemoveBtn>
            )}
            {index === announcements.length - 1 && (
              <AddBtn onClick={handleAddBtnChange}>+</AddBtn>
            )}
          </DivTxtField>
        );
      })}
      {isSemiColonExists && (
        <DivPass className={classColor}>{t("adve-condition")}</DivPass>
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
        {t("add-cancle")}
      </InputSubmit>
    </Form>
  );
}
