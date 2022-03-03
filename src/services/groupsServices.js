import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveGroups = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/comp-group/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const addGroup = (data, successCallback, faiCallback) => {
    doRequest(data, "/comp-admin/comp-group/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const updateGroup = (id, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/comp-group/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const deleteGroup = (id, data,  successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/comp-group/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};
