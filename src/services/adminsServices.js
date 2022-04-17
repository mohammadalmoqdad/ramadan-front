import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveAdmins = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/comp-admins/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrieveAdminInfo = (successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/admin-info/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const addAdmin = (data, successCallback, faiCallback) => {
    doRequest(data, "/comp-admin/comp-admins/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const updateAdmin = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/comp-admins/${username}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const deleteAdmin = (username,   successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/comp-admins/${username}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};

export const resetAdminPassword = (username, data, successCallback, faiCallback)=>{
    doRequest(data, `/comp-admin/comp-admins/${username}/change_password/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const exportPoints = (fromDay, toDay, successCallback, faiCallback)=>{
    doRequest(null, `/comp-admin/export-comp-info/?from_date=${fromDay}&to_date=${toDay}`,
        {
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};
