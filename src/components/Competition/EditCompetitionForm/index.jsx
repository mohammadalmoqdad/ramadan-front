import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { updateContest } from "../../../services/competitionsServices";

import { ParticipantsTitelsAtHome } from "../ContestMembers/ContestMembers.styles";
import CompositionDefault, {
  Form,
  TypeSpace,
  ParticipantsNumbers,
  ParticipantsMember2,
  OverflowScrolling,
  TextAreaSpace,
  ButtonStyle,
  PublishedDate,
  DeleteAnnouncementBtn,
} from "./EditCompetition.styles";

import { DivPass } from "../../Admins/Admins.styles";
import InputField from "../../ContestCriteria/InputField";

export default function EditCompetitionForm({ contest, setContest }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showStanding, setShowStanding] = useState(true);
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [messages, setMessages] = useState([]);
  const [classColor, setClassColor] = useState("");
  const [newAnnouncementMessages, setNewAnnouncementMessages] = useState([]);
  const [
    classNewAnnouncementMessagesColor,
    setNewAnnouncementMessagesClassColor,
  ] = useState("");

  useEffect(() => {
    resetForm();
  }, []);

  useEffect(() => {
    setMessages([]);
    setClassColor("");
    setNewAnnouncementMessages([]);
    setNewAnnouncementMessagesClassColor("");
  }, [name, showStanding, readOnlyMode, announcements, description]);

  const resetForm = () => {
    setAnnouncements(
      contest.announcements && contest.announcements.length > 0
        ? [...contest.announcements]
        : []
    );
    setName(contest.name);
    setDescription(contest.description);
    setReadOnlyMode(contest.readonly_mode);
    setShowStanding(contest.show_standings);
  };
  const handleUpdateContest = () => {
    let data = {
      name: name,
      description: description,
      show_standings: showStanding,
      readonly_mode: readOnlyMode,
      announcements: announcements,
    };

    updateContest(
      contest.id,
      data,
      (res) => {
        if (res?.status === 200) {
          contest.announcements = data.announcements;
          contest.name = name;
          contest.readonly_mode = readOnlyMode;
          contest.show_standings = showStanding;

          setClassColor("green");
          setMessages([t("contest-has-been-edited-successfully")]);

          setTimeout(() => {
            setContest(contest);
          }, 2000);
        }
      },
      (err) => {
        let errMessages = [];
        errMessages.push([t("contest-isn't-edited-successfully")]);
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

  const deleteAnnouncementHandler = (index) => {
    let tmpAnnouncements = announcements.filter(
      (announcement, i) => i !== index
    );
    setAnnouncements(tmpAnnouncements);
  };

  const handleAddNewAnnouncementClick = () => {
    let data = {
      name: contest.name,
      show_standings: contest.show_standings,
      readonly_mode: contest.readonly_mode,
      announcements: [...announcements, newAnnouncement],
    };

    updateContest(
      contest.id,
      data,
      (res) => {
        if (res?.status === 200) {
          contest.announcements = data.announcements;

          setNewAnnouncementMessagesClassColor("green");
          setNewAnnouncementMessages([
            t("contest-has-been-edited-successfully"),
          ]);

          setTimeout(() => {
            setContest(contest);
          }, 2000);
        }
      },
      (err) => {
        let errMessages = [];
        errMessages.push([t("contest-isn't-edited-successfully")]);
        if (err.response.data) {
          let obj = err.response.data;
          Object.keys(obj).forEach((e) => {
            errMessages.push(`${obj[e]} : ${e}`);
          });
        }
        setNewAnnouncementMessagesClassColor("red");
        setNewAnnouncementMessages(errMessages);
      }
    );
  };
  const handleShowStandingChange = (e) => {
    setShowStanding(e.target.checked);
  };

  const handleReadOnlyChange = (e) => {
    setReadOnlyMode(e.target.checked);
  };

  const handleNewAnnouncementOnChange = (e) => {
    setNewAnnouncement(e.target.value);
  };

  const readOnlyChangeHandler = () => {};

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const changeAnnouncementTextHandler = (e, index) => {
    let tmpAnnouncements = announcements.map((announcement, i) =>
      i === index ? e.target.value : announcement
    );
    setAnnouncements(tmpAnnouncements);
  };

  return (
    <CompositionDefault>
      <Form>
        <ParticipantsMember2>
          <ParticipantsNumbers>
            <ParticipantsTitelsAtHome>
              {t("make-an-announcement")}
            </ParticipantsTitelsAtHome>
            <TextAreaSpace
              onChange={handleNewAnnouncementOnChange}
              placeholder={t("new-announcement")}
            />
            {newAnnouncement.length > 0 && (
              <ButtonStyle onClick={handleAddNewAnnouncementClick}>
                {" "}
                {t("add")}
              </ButtonStyle>
            )}
            {newAnnouncementMessages.length > 0 &&
              newAnnouncementMessages.map((message, index) => {
                return (
                  <DivPass
                    className={classNewAnnouncementMessagesColor}
                    key={index}
                  >
                    {message}
                  </DivPass>
                );
              })}
          </ParticipantsNumbers>
        </ParticipantsMember2>
        <ParticipantsMember2>
          <ParticipantsNumbers>
            <ParticipantsTitelsAtHome>
              {t("contest-information")}
            </ParticipantsTitelsAtHome>

            <OverflowScrolling>
              <InputField
                type={"text"}
                label={t("name-label")}
                onChange={handleNameChange}
                value={name}
              />
              <InputField
                type={"text"}
                label={t("description-label")}
                onChange={handleDescriptionChange}
                value={description}
              />
              <InputField
                type={"checkbox"}
                label={t("active-announcements")}
                checked={showStanding}
                onChange={handleShowStandingChange}
              />
              <InputField
                type={"checkbox"}
                label={t("readonly")}
                checked={readOnlyMode}
                onChange={handleReadOnlyChange}
              />

              {announcements && announcements.length > 0 ? (
                <div style={{ width: "100%" }}>
                  {announcements.map((announcement, index) => (
                    <TypeSpace key={index} inside={true}>
                      <DeleteAnnouncementBtn
                        onClick={() => deleteAnnouncementHandler(index)}
                        title={t("delete-this-announcement")}
                      >
                        {" "}
                        &#10005;
                      </DeleteAnnouncementBtn>

                      <TextAreaSpace
                        onClick={readOnlyChangeHandler}
                        onChange={(e, index) =>
                          changeAnnouncementTextHandler(e, index)
                        }
                      >
                        {announcement}
                      </TextAreaSpace>
                      <PublishedDate>
                        {t("announcement") + " " + (index + 1)}
                      </PublishedDate>
                    </TypeSpace>
                  ))}
                </div>
              ) : (
                <ParticipantsTitelsAtHome>
                  {t("no-announcements-yet")}
                </ParticipantsTitelsAtHome>
              )}
              {messages.length > 0 &&
                messages.map((message, index) => {
                  return (
                    <DivPass className={classColor} key={index}>
                      {message}
                    </DivPass>
                  );
                })}

              <ButtonStyle onClick={handleUpdateContest}>
                {t("update")}
              </ButtonStyle>
            </OverflowScrolling>
          </ParticipantsNumbers>
        </ParticipantsMember2>
      </Form>
    </CompositionDefault>
  );
}
