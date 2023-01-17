import React, { useEffect, useState } from "react";
import { retrieveCompetitions } from "../../services/competitionsServices";
import AddEditAnnouncementForm from "./AddEditAnnouncementForm";
import EditCompetitionForm from "./EditCompetitionForm";
import Tabs from "../shared/Tabs";
import CompetitionContainer from "../Admins/Admins.styles";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

import MyOngoingContestTab from "../shared/MyOngoingContestTab";
import ContestMembers from "./ContestMembers";

export default function Competition() {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Competition" } });
      return;
    }
    setLoading(true);
    retrieveCompetitions(
      (res) => {
        if (res && res.status === 200) {
          setCompetitions(res.data);
          setLoading(false);
        }
      },
      (err) => {
        console.log("Failed to retrieve competitions: ", err?.response?.data);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      <MyOngoingContestTab />
      <ContestMembers />
      <EditCompetitionForm
        competitions={competitions}
        setCompetitions={setCompetitions}
      />
      ,
      <CompetitionContainer>
        <Tabs
          labels={["تعديل مسابقة", "إضافة/تعديل إعلانات"]}
          contents={[
            // <EditCompetitionForm
            //   competitions={competitions}
            //   setCompetitions={setCompetitions}
            // />,
            <AddEditAnnouncementForm
              competitions={competitions}
              setCompetitions={setCompetitions}
            />,
          ]}
        />
      </CompetitionContainer>
    </>
  );
}
