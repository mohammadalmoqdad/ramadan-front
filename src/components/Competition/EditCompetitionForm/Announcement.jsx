// import React from 'react'
import { useState } from "react";

import {
  TypeSpace,
  TextAreaSpace,
  PublishedDate,
  ButtonStyle,
} from "./EditCompetition.styles";
import { useTranslation } from "react-i18next";

const Announcement = ({ announcement }) => {
  const [readOnlyState, setReadOnlyState] = useState(true);
  const [announcementText, setAnnouncementText] = useState(announcement.text);
  const { t } = useTranslation();

  //
  const readOnlyChangeHandler = () => {
    setReadOnlyState((prevState) => false);
  };

  const changeAnnouncementTextHandler = (e) => {
    setAnnouncementText((prevState) => e.target.value);
  };

  const saveAnnouncementHandler = () => {
    // send request to server
    setReadOnlyState((prevState) => true);
  };

  const deleteAnnouncementHandler = () => {
    // delete request to server
  };

  const cancleAnnouncementHandler = () => {
    setAnnouncementText((prevState) => announcement.text); // if make cancel ::> announcement.text is origin text
    setReadOnlyState((prevState) => true);
  };
  //
  return (
    <TypeSpace key={announcement.id} inside={true}>
      <TextAreaSpace
        readOnly={readOnlyState}
        onClick={readOnlyChangeHandler}
        value={announcementText}
        onChange={changeAnnouncementTextHandler}
      />
      <PublishedDate>{announcement.date}</PublishedDate>
      {!readOnlyState && (
        <>
          <ButtonStyle onClick={deleteAnnouncementHandler}>
            {t("delete")}
          </ButtonStyle>
          <ButtonStyle onClick={saveAnnouncementHandler}>
            {t("save")}
          </ButtonStyle>
          <ButtonStyle>{t("readonly")}</ButtonStyle>
          <ButtonStyle onClick={cancleAnnouncementHandler}>Cancle</ButtonStyle>
        </>
      )}
    </TypeSpace>
  );
};

export default Announcement;
