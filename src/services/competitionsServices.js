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