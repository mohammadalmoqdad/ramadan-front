import axios from "axios";
import cookie from "react-cookies";
// import { useNavigate } from "react-router-dom";

const apiUrl = "https://ramadan-comp-rest.herokuapp.com";

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
    //TODO: This temporary, when getAdminInfo service is ready, no need to store the username in the cookie
    cookie.save("username", username);

    // useNavigate("/");

    return true; // not necessary to return anything because I can get the token from cookies
  } catch (err) {
    console.log("in the catch of login");
    return false;
  }
}
