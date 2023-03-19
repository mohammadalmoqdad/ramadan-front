import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveContestsInfo = (successCallback, faiCallback) => {
    doRequest(null, "/contests/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrieveCurrentContestInfo = (successCallback, faiCallback) => {
    doRequest(null, "/contests/current/",
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
    doRequest(data, "/contests/switch_contest/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const createContent = (data, successCallback, faiCallback) => {
    doRequest(data, "/create-contest/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const joinContest = (data, successCallback, faiCallback) => {
    doRequest(data, "/join-contest/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
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

export const retrieveTopMembers = (successCallback, faiCallback) => {
    doRequest(null, "/top-members/",
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
    doRequest(data, `/contests/${id}/`,
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