import React, { useContext, useState } from "react";
import cookie from "react-cookies";
import { useLogin } from "services/auth";
import { retrieveAdminInfo } from "../../services/adminsServices";

const AdminContext = React.createContext(null);

export const useAdminContext = () => {
  return useContext(AdminContext);
};

function AdminProvider({ children }) {
  const [adminInfo, setAdminInfo] = useState({});

  const getAdminInfo = () => {
    if (
      Object.keys(adminInfo).length === 0 &&
      cookie.load("token") &&
      cookie.load("refresh-token")
    ) {
      retrieveAdminInfo(
        (res) => {
          setAdminInfo(res.data);
          return res.data;
        },
        (err) => {
          setAdminInfo({ is_super_admin: false });
          console.log(
            "Failed to populate admin info: ",
            JSON.stringify(err.response.data)
          );
        }
      );
    }
    return adminInfo;
  };

  const logout = () => {
    cookie.remove("token");
    cookie.remove("refresh-token");
    setAdminInfo({});
    return "logged out successfully";
  };

  let state = {
    getAdminInfo,
    setAdminInfo,
    adminInfo,
    useLogin,
    logout,
  };

  return (
    // TODO : add useCallback and memo to avoid re-rendering and read from the cache.
    <AdminContext.Provider value={state}>{children}</AdminContext.Provider>
  );
}
export default AdminProvider;
