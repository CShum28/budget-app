import axios from "axios";

function userLogin(email, password) {
  return axios
    .post(
      "http://localhost:5000/login",
      { email, password },
      { withCredentials: true }
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
