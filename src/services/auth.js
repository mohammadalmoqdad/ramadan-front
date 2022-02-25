import axios from "axios";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "contexts/AdminContext";
import { useContext } from "react";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";
export async function useLogin(username, password) {
  // const context = useContext(AdminContext);
  try {
    const { data } = await axios.post(
      `${apiUrl}/token/`,
      {
        username,
        password,
      },
      {
        "Content-Type": "application/json",
      }
    );
    console.log("inside the login function ", data);

    cookie.save("token", data.access);
    // context.setIsLogdedIn(true);

    // useNavigate("/");

    return true; // not nessesary to return anything because I can get the token from cookies
  } catch (err) {
    console.log("in the catch of loggin");
    return false;
  }
}
