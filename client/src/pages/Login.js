import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userLogin from "../hooks/userLogin";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modal, setModal] = useState(false);
  const nav = useNavigate();

  const displayUser = (email) => {
    console.log("##");
    props.setUserInfo(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailCheck(email).then((res) => {
      // this checks if the email that is being entered exists or not
      if (!res) {
        setModal(true);
      } else {
        userLogin(email, password)
          .then((res) => {
            if (res.password === false) {
              // this checks if the password being enters matches or not
              setModal(true);
            } else {
              // if email and password match - navigate to next screen
              displayUser(email);
              nav("/home");
            }
          })
          .catch((error) => {
            console.error("Login failed");
          });
      }
    });
  };

  return (
    <>
      <Header />

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <h2>Email</h2>
        <input
          className=""
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h2>Password</h2>
        <input
          className=""
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Login</Button>
      </form>

      {modal && <div>Incorrect email or password - try again</div>}
    </>
  );
}

export default Login;
