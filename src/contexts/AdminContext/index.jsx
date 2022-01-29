import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";


export const AdminContext = React.createContext({
  IsLogdedIn: false,
  IsSuperAdmin: false,
  IsAdmin: false,
  login: undefined,
  logout: undefined,
  token:undefined
});

AdminContext.displayName = "AdminContext";

// TODO: store in the context not in the localstorage of the cookies!
export function AdminProvider(props) {
  const [IsLogdedIn, setIsLogdedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);
  const [IsSuperAdmin, setIsSuperAdmin] = useState(false);

}





const login = async (email, password) => {
  const { data } = await axios.post(`${apiUrl}/token/`, {
    email,
    password
  });
  console.log(data);
  return data.access;
}

const logout = async () => {
  setIsLogdedIn(false);
  setIsSuperAdmin(false);
  return data.access;
}

