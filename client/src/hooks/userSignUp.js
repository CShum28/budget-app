import axios from "axios";

function userSignUp(email, password) {
  return axios
    .post("http://localhost:5000/sign-up", { email, password })
    .then((res) => {
      return res.data;
    });
}

export default userSignUp;
