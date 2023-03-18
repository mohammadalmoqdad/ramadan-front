import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveGroups = (successCallback, faiCallback) => {
    doRequest(null, "/admin-panel/groups/",
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
    doRequest(data, "/admin-panel/groups/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const addOrRemoveAdminToGroup = (data, id, successCallback, faiCallback) => {
    doRequest(data, `/admin-panel/groups/${id}/add_or_remove_admin/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const addOrRemoveMemberToGroup = (data, id, successCallback, faiCallback) => {
    doRequest(data, `/admin-panel/groups/${id}/add_or_remove_member/`,
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
    doRequest(data, `/admin-panel/groups/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const deleteGroup = (id,   successCallback, faiCallback) => {
    doRequest(null, `/admin-panel/groups/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};
