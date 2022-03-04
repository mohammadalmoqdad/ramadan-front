import {doRequest} from "./doRequest";
import cookie from "react-cookies";

export const retrieveStudents = (successCallback, faiCallback) => {
    doRequest(null, "/comp-admin/students/",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};


export const setStudentPassword = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/students/${username}/change_password/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const updateStudent = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/students/${username}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};


export const dataStudentPoints = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/students/mhmdBnAli/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};

export const updateStudentPoint = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/students/${username}/update_or_delete_point/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};
