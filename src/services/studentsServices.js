import { doRequest } from "./doRequest";
import cookie from "react-cookies";

export const retrieveStudents = (successCallback, faiCallback) => {
    doRequest(null, "/admin-panel/contest-people/?contest_role=1",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};

export const retrievePendingMembers = (successCallback, faiCallback) => {
    doRequest(null, "/admin-panel/contest-people/?contest_role=4",
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true);
};


export const retrieveStudentsPointsPerDay = (username, day, successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/students/${username}/?date=${day}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true)
};

export const retrieveStudentsPointsOfTypeOther = (username, day, successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/students/${username}/get_user_input_records/?date=${day}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true)
};

export const retrieveStudentsPointsPerLabelORPerDay = (username, typeOfReturnedResult, successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/students/${username}/points_stats/?type=total_points_by_${typeOfReturnedResult}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "get",
        successCallback,
        faiCallback,
        true)
};

export const setStudentPassword = (username, data, successCallback, faiCallback) => {
    doRequest(data, `/admin-panel/contest-people/${username}/change_password/`,
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
    doRequest(data, `/admin-panel/contest-people/${username}/`,
        {
            'Content-Type' : false,
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};
export const updateStudentPoint = (username, pointID, data, successCallback, faiCallback) => {
    doRequest(data, `/comp-admin/students/${username}/update_or_delete_point/?id=${pointID}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "put",
        successCallback,
        faiCallback,
        true);
};


export const deleteStudentPoint = (username, pointID, successCallback, faiCallback) => {
    doRequest(null, `/comp-admin/students/${username}/update_or_delete_point/?id=${pointID}`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};

export const deleteStudent = (username, successCallback, faiCallback) => {
    doRequest(null, `/admin-panel/contest-people/${username}/`,
        {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.load('token')}`,
        },
        "delete",
        successCallback,
        faiCallback,
        true);
};