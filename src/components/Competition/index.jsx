import React, {useEffect, useState} from "react";
import { retrieveCurrentContestInfo} from "../../services/competitionsServices";
import EditCompetitionForm from "./EditCompetitionForm";
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader";

import MyOngoingContestTab from "../shared/MyOngoingContestTab";
import ContestMembers from "./ContestMembers";
import ContestModeratorDefault from "../ContestModerator/ContestModerator.styles";

export default function Competition() {
    const [competitions, setCompetitions] = useState([]);
    const [currentContest, setCurrentContest] = useState({});
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if (!cookie.load("token")) {
            navigate("/login", {state: {redirectTo: "/Competition"}});
            return;
        }
        setLoading(true);
        retrieveCurrentContestInfo(
            (res) => {
                if (res && res.status === 200) {
                    setCurrentContest(res.data);
                    setLoading(false);
                }
            },
            (err) => {
                console.log("Failed to retrieve current contest: ", err?.response?.data);
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return (
            <main>
                <Loader/>
            </main>
        );
    }

    return (
        <ContestModeratorDefault>
            <MyOngoingContestTab competition={true}/>
            <ContestMembers contest={currentContest}/>
            <EditCompetitionForm
                contest={currentContest}
                setContest={setCurrentContest}
            />
        </ContestModeratorDefault>
    );
}
