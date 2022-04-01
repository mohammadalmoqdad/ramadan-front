import axios from "axios";
import cookie from "react-cookies";

const apiUrl = process.env.REACT_APP_BASE_URL;

/*
*   TODO: This is a temporary implementation for refresh access-token after it's invalid/expire,
*         we shouldn't store tokens as cookie to avoid attacks, for example: XSS attack
*         I've talked with Osama to set at least refresh-token as httpOnly and we can store access-token
*         in memory in this case.
*/


const refreshTokenThenRetry = (data, uri, config, method, successCallback, failCallback, beforeRefresh) => {
    axios.post(
        `${apiUrl}/token/refresh/`,
        {
            'refresh': cookie.load('refresh-token')
        }
    ).then(
        (res) => {
            cookie.save("token", res.data.access);
            console.log("Access token has been refreshed");
            config.Authorization = `Bearer ${res.data.access}`;
            doRequest(data, uri, config, method, successCallback, failCallback, beforeRefresh);
        }, (err) => {
            console.log("ERROR refreshTokenThenRetry: " + JSON.stringify(err.response.data));
            if (err.response && [401, 403].includes(err.response.status)){
                cookie.remove("token");
                cookie.remove("refresh-token");
            }
        }
    );
}

export const doRequest = (data, uri, config, method, successCallback, failCallback, beforeRefresh) => {
    axios({
        method: method,
        url: `${apiUrl}${uri}`,
        data: data,
        headers: config
    }
    ).then((data) => {
        successCallback(data);
    }, (err) => {
        if (err.response && err.response.status === 401) {
            if (beforeRefresh) {
                refreshTokenThenRetry(data, uri, config, method, successCallback, false);
            } else {
                // Navigate to login page with saving location info to redirect back to
                console.log("ERROR doRequest: " + JSON.stringify(err.response.data));
            }
        }
        failCallback(err);
    });
}