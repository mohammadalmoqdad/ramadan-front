import { doRequest } from "./doRequest";
export const updateProfileData = (data, successCallback, faiCallback) => {
  doRequest(
    data,
    "/EditProfile/",
    {
      "Content-Type": false,
    },
    "post",
    successCallback,
    faiCallback,
    true
  );
};
