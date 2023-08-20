import axios from "axios";

function emailCheck(email) {
  return axios
    .post("http://localhost:5000/email-check", { email })
    .then((res) => {
      console.log(res.data);
      return res.data.exists;
    });
}

export default emailCheck;
