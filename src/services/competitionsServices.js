import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveContestInfo = (successCallback, faiCallback) => {
    doRequest(null, "/contest/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const switchContest = (data, successCallback, faiCallback) => {
    doRequest(data, "/contest/switch_contest",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const retrieveGeneralStatus = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/comp-view/general_stats/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrieveCompetitions = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/comp-view/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrieveTopStudents = (successCallback, faiCallback) => {
    doRequest(null, "/admin-panel/top_members",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const updateCompetition = (id, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/comp-view/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const updateContest = (id, data, successCallback, faiCallback) => {
    doRequest(data, `/admin-panel/contest/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const retrieveResultsOnDate = (date, successCallback, faiCallback) => {
    doRequest(null, `/admin-panel/results/${date}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrieveResultsOnDatePerGroup = (date, groupId, successCallback, faiCallback) => {
    doRequest(null, `/admin-panel/results/${date}/${groupId}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};