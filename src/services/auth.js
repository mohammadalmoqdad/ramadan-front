import axios from "axios";
import cookie from "react-cookies";
const apiUrl = "https://ramadan-comp-rest.herokuapp.com";

export async function login(username, password) {
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
    cookie.save("token", data.access);

    console.log("inside the login function ", data);
    return data.access; // not nessesary to return anything because I can get the token from cookies
  } catch (err) {
    return err;
  }
}
