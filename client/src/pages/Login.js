import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userLogin from "../hooks/userLogin";
import "../styles/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modal, setModal] = useState(false);
  const nav = useNavigate();

  const displayUser = (res) => {
    props.setUserInfo(res);
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
              console.log("##", res.id);
              // if email and password match - navigate to next screen
              displayUser(res);
              nav(`/home/${res.id}`);
            }
          })
          .catch((error) => {
            console.error("Login failed");
          });
      }
    });
  };

  return (
    <div className="login">
      <div className="login__content">
        <h2 className="login__header">Sign In</h2>
        <p className="login__header_description">
          Sign in with your email and password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="login__input">
            <p>Email</p>
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
            <p>Password</p>
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
          </div>
          <Button inputLogin type="submit">
            Login
          </Button>
        </form>
        {modal && (
          <div className="login__error">
            Incorrect email or password - try again
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
