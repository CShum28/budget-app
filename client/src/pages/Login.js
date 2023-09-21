import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userLogin from "../hooks/userLogin";
import "../styles/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginCredModal, setLoginCredModal] = useState(false); // check if user and password match
  const [emptyCheckModal, setEmptyCheckModal] = useState(false); // modal to display if input for user or password is empty
  const nav = useNavigate();

  const displayUser = (res) => {
    props.setUserInfo(res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setLoginCredModal(false);
      setEmptyCheckModal(true);
    } else {
      emailCheck(email).then((res) => {
        // this checks if the email that is being entered exists or not
        if (!res) {
          setEmptyCheckModal(false);
          setLoginCredModal(true);
        } else {
          userLogin(email, password)
            .then((res) => {
              if (res.password === false) {
                // this checks if the password being enters matches or not
                setEmptyCheckModal(false);
                setLoginCredModal(true);
              } else {
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
    }
  };

  return (
    <div className="login">
      <div className="login__content">
        <h2 className="login__header">Sign In</h2>
        <p className="login__header_description">
          Sign in with your username and password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="login__input">
            <p>Username</p>
            <input
              className=""
              name="email"
              type="text"
              placeholder="username"
              maxlength="50"
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
              maxlength="50"
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
        {emptyCheckModal && (
          <div className="signup__error">
            Please do not leave any inputs blank
          </div>
        )}
        {loginCredModal && (
          <div className="login__error">Incorrect username or password</div>
        )}
      </div>
    </div>
  );
}

export default Login;
