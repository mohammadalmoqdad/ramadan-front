import {doRequest} from "./doRequest";
import cookie from "react-cookies";

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