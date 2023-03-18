import React, { useEffect, useState, useRef} from "react";
import {
  DivMultiselect,
  DropdownDivSelect,
  Span,
  // AnnouncementsFormInput,
  // RemoveBtn,
  // AddBtn,
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

  /**
   *  There are no announcements for groups anymore
   */
  // const [announcements, setAnnouncements] = useState([""]);
  // const [isSemiColonExists, setSemiColonExists] = useState(false);

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

    /**
     *  There are no announcements for groups anymore
     */
    // setSemiColonExists(false);
    // setAnnouncements([""]);
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

  /**
   * There are no announcements for groups anymore
   */
  // const handleAnnouncementsChange = (e, index) => {
  //   let notesArray = [...announcements];
  //   notesArray.splice(index, 1, e.target.value);
  //   setAnnouncements(notesArray);
  // };
  //
  // const handleAddBtnChange = () => {
  //   setAnnouncements([...announcements, ""]);
  // };
  //
  // const handleRemoveBtnChange = (e, index) => {
  //   e.preventDefault();
  //   let notesArray = [...announcements];
  //   notesArray.splice(index, 1);
  //   setAnnouncements(notesArray);
  // };

  const handleAddGroupSubmit = (e) => {
    e.preventDefault();

    if (selectedAdminUserName === "") {
      setMessages([t("select-moderator")]);
      setClassColor("red");
      return;
    }

    /**
     * There are no announcements for groups anymore
     */
    // announcements.forEach((announcement) => {
    //   if (announcement.includes(";")) {
    //     valid = false;
    //   }
    // });
    //
    // if (!valid) {
    //   setSemiColonExists(true);
    //   setClassColor("red");
    //   return;
    // } else {
    //   setSemiColonExists(false);
    // }

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

      {
        /**
         *  There are no announcements for groups anymore
         */
      }
      {/*{announcements?.map((inputItem, index) => {*/}
      {/*  return (*/}
      {/*    <DivTxtField key={index} style={{ width: "100%" }}>*/}
      {/*      <Span />*/}
      {/*      <AnnouncementsFormInput*/}
      {/*        placeholder={t("adve")}*/}
      {/*        key={index}*/}
      {/*        value={inputItem}*/}
      {/*        onChange={(e) => handleAnnouncementsChange(e, index)}*/}
      {/*        type="text"*/}
      {/*      />*/}
      {/*      {announcements.length > 1 && (*/}
      {/*        <RemoveBtn onClick={(e) => handleRemoveBtnChange(e, index)}>*/}
      {/*          -*/}
      {/*        </RemoveBtn>*/}
      {/*      )}*/}
      {/*      {index === announcements.length - 1 && (*/}
      {/*        <AddBtn onClick={handleAddBtnChange}>+</AddBtn>*/}
      {/*      )}*/}
      {/*    </DivTxtField>*/}
      {/*  );*/}
      {/*})}*/}
      {/*{isSemiColonExists && (*/}
      {/*  <DivPass className={classColor}>{t("adve-condition")}</DivPass>*/}
      {/*)}*/}

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
