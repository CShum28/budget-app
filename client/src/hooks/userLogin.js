import axios from "axios";

function userLogin(email, password) {
  return axios
    .post(
      "http://localhost:5000/login",
      { email, password },
      { withCredentials: true } // this sends the cookies to the backend properly
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
}

export default userLogin;
