import React, { useEffect, useState } from "react";
import SaveChanges from "../../../assets/icons/Shared/SaveChanges.svg";
import { useTranslation } from "react-i18next";
import { updateCompetition } from "../../../services/competitionsServices";

import {
  ParticipantsTitelsAtHome,
  SeeAll,
  TotalOfMembers,
  SeeAllIcon,
} from "../ContestMembers/ContestMembers.styles";
import CompositionDefault, {
  Form,
  TypeSpace,
  ParticipantsNumbers,
  ParticipantsMember2,
  ParticipantsTitels,
  PublishedDate,
  OverflowScrolling,
  Br,
  ButtonStyle,
  ReadOnly,
  SeeAllP,
  TextAreaSpace,
} from "./EditCompetition.styles";

import Announcement from "./Announcement";

// dummy data

const Announcements = [
  {
    id: "announc1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "17/04/2021",
  },
  {
    id: "announc2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "14/05/2021",
  },
  {
    id: "announc3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "12/05/2021",
  },
  {
    id: "announc4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "11/03/2021",
  },
];

export default function EditCompetitionForm(props) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [showStanding, setShowStanding] = useState(true);
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [selectedCompetitionId, setSelectedCompetitionId] = useState("");
  const [notes, setNotes] = useState([""]);
  const [messages, setMessages] = useState([]);
  const [classColor, setClassColor] = useState("");
  const [isSemiColonExists, setSemiColonExists] = useState(false);

  useEffect(() => {
    let competition = props.competitions[0];
    if (competition) {
      setSelectedCompetitionId(competition.id);
      let notesArray = competition?.announcements
        .split(";")
        .filter((item) => item.trim().length > 0);
      setNotes(notesArray.length > 0 ? notesArray : [""]);
      setName(competition.name);
      setReadOnlyMode(competition.readonly_mode);
      setShowStanding(competition.show_standings);
    } else {
      setSelectedCompetitionId("");
      setNotes([""]);
      setMessages([]);
      setName("");
      setReadOnlyMode(false);
      setShowStanding(true);
    }
  }, [props.competitions, props.reset]);

  useEffect(() => {
    setMessages([]);
    setClassColor("");
  }, [name, showStanding, readOnlyMode, notes, props.reset]);

  const handleAddEditSubmit = (e) => {
    e.preventDefault();

    if (selectedCompetitionId === "") {
      setMessages([t("must-select-contest")]);
      setClassColor("red");
      return;
    }

    let valid = true;
    notes.forEach((note) => {
      if (note.includes(";")) {
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
      name: name,
      show_standings: showStanding,
      readonly_mode: readOnlyMode,
      announcements: notes.filter((note) => note.trim().length > 0).join(";"),
    };

    updateCompetition(
      selectedCompetitionId,
      data,
      (res) => {
        if (res?.status === 200) {
          let updatedCompetition = props.competitions.filter(
            (competition) => competition.id === selectedCompetitionId
          )[0];
          updatedCompetition.announcements = data.announcements;
          updatedCompetition.name = name;
          updatedCompetition.readonly_mode = readOnlyMode;
          updatedCompetition.show_standings = showStanding;

          setClassColor("green");
          setMessages([t("contest-has-been-edited-successfully")]);

          setTimeout(() => {
            props.setCompetitions([
              ...props.competitions.filter(
                (comp) => comp.id !== selectedCompetitionId
              ),
              updatedCompetition,
            ]);
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

  const handleShowStandingChange = (e) => {
    setShowStanding(e.target.checked);
  };

  const handleReadOnlyChange = (e) => {
    setReadOnlyMode(e.target.checked);
  };

  const handleAnnouncementsChange = (e, index) => {
    let notesArray = [...notes];
    notesArray.splice(index, 1, e.target.value);
    setNotes(notesArray);
  };

  const handleAddBtnChange = () => {
    setNotes([...notes, ""]);
  };

  const handleRemoveBtnChange = (e, index) => {
    e.preventDefault();
    let notesArray = [...notes];
    notesArray.splice(index, 1);
    setNotes(notesArray);
  };

  return (
    <CompositionDefault>
      {/* <ReadOnly></ReadOnly> */}
      <Form>
        <ParticipantsMember2>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>
              {t("contest-announcements")}
            </ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>{t("save-changes")}</SeeAllP>
              <SeeAllIcon src={SaveChanges} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <ParticipantsTitelsAtHome>
              {t("make-an-announcement")}
            </ParticipantsTitelsAtHome>
            <TypeSpace>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam
              cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at,
              laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris
              ante, elementum et, bibendum at, posuere sit amet, nibh. Duis
              tincidunt lectus quis dui viverra vestibulum. Suspendisse
              vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam
              vehicula mi at mauris. Maecenas placerat, nisl at consequat
              rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis
              lacus.
            </TypeSpace>
          </ParticipantsNumbers>
        </ParticipantsMember2>
        <ParticipantsMember2>
          <ParticipantsTitels>
            <ParticipantsTitelsAtHome>
              {t("active-announcements")}
            </ParticipantsTitelsAtHome>

            <SeeAll>
              <SeeAllP>{t("save-changes")}</SeeAllP>
              <SeeAllIcon src={SaveChanges} Alt="" />
            </SeeAll>
          </ParticipantsTitels>

          <ParticipantsNumbers>
            <ParticipantsTitelsAtHome>
              {t("double-click-to-edit")}
            </ParticipantsTitelsAtHome>
            <OverflowScrolling>
              {Announcements && Announcements.length ? (
                <div style={{ width: "100%" }}>
                  {Announcements.map((announcement) => (
                    <Announcement announcement={announcement} />
                  ))}
                </div>
              ) : (
                <TextAreaSpace>{t("no-announcements-yet")}</TextAreaSpace>
              )}
            </OverflowScrolling>
          </ParticipantsNumbers>
        </ParticipantsMember2>
      </Form>
    </CompositionDefault>
  );
}
