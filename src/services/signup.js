import {doRequest} from "./doRequest";


export const signup = (data, isCreator, successCallback, faiCallback) => {
    doRequest(data,  "/signup/" + (isCreator ? "?type=creator" : ""),
        {
            'Content-Type' : false,
        },
        "post",
        successCallback,
        faiCallback,
        true);
};