import { doRequest } from "./doRequest";
import cookie from "react-cookies";

export const retrieveAdmins = (
  successCallback,
  faiCallback,
  searchQuery = ""
) => {
  const url = "/admin-panel/contest-people/?contest_role=2&contest_role=3";
  if (searchQuery) url += `&search=${searchQuery}`;

  doRequest(
    null,
    url,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "get",
    successCallback,
    faiCallback,
    true
  );
};

export const retrieveAdminInfo = (successCallback, faiCallback) => {
  doRequest(
    null,
    `/current-user/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "get",
    successCallback,
    faiCallback,
    true
  );
};

export const updateContestPeopleRole = (
  username,
  data,
  successCallback,
  faiCallback
) => {
  doRequest(
    data,
    `/admin-panel/contest-people/${username}/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "put",
    successCallback,
    faiCallback,
    true
  );
};

export const addAdmin = (data, successCallback, faiCallback) => {
  doRequest(
    data,
    `/admin-panel/contest-people/${data.username}/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "post",
    successCallback,
    faiCallback,
    true
  );
};

export const updateAdmin = (username, data, successCallback, faiCallback) => {
  doRequest(
    data,
    `/comp-admin/comp-admins/${username}/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "put",
    successCallback,
    faiCallback,
    true
  );
};

export const deleteAdmin = (username, successCallback, faiCallback) => {
  doRequest(
    null,
    `/comp-admin/comp-admins/${username}/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "delete",
    successCallback,
    faiCallback,
    true
  );
};

export const resetAdminPassword = (
  username,
  data,
  successCallback,
  faiCallback
) => {
  doRequest(
    data,
    `/comp-admin/comp-admins/${username}/change_password/`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "put",
    successCallback,
    faiCallback,
    true
  );
};

export const exportPoints = (fromDay, toDay, successCallback, faiCallback) => {
  doRequest(
    null,
    `/comp-admin/export-comp-info/?from_date=${fromDay}&to_date=${toDay}`,
    {
      responseType: "arraybuffer",
      Authorization: `Bearer ${cookie.load("token")}`,
    },
    "get",
    successCallback,
    faiCallback,
    true
  );
};
