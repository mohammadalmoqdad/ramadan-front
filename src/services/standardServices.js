import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveStandards = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/point-template/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const addStandard = (data, successCallback, faiCallback) => {
    doRequest(data, "/comp-admin/point-template/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};

export const updateStandard = (id, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/point-template/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const deleteStandard = (id, data,  successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/point-template/${id}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};
