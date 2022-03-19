import axios from "axios";
import cookie from "react-cookies";
// import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_BASE_URL;

export async function useLogin(username, password) {
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
    cookie.save("refresh-token", data.refresh);

    // useNavigate("/");

    return true; // not necessary to return anything because I can get the token from cookies
  } catch (err) {
    console.log("in the catch of login");
    return false;
  }
}
