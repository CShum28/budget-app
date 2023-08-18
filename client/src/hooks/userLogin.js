import axios from "axios";

function userLogin(email, password) {
  return axios
    .post("http://localhost:5000/login", { email, password })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
}

export default userLogin;
