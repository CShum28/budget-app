import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userSignUp from "../hooks/userSignUp";
import "../styles/SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userModal, setUserModal] = useState(false); // modal to display if username already exists
  const [emptyCheckModal, setEmptyCheckModal] = useState(false); // modal to display if input for user or password is empty

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      // checks to either or them are blank
      setUserModal(false);
      setEmptyCheckModal(true);
    } else {
      // use emailCheck to see if email already exists or not
      emailCheck(email).then((res) => {
        if (res) {
          // if email already exists
          setEmptyCheckModal(false);
          setUserModal(true);
        } else {
          // if email does not exist, complete sign up
          userSignUp(email, password).then((res) => {
            console.log("from client:", res);
            nav("/");
          });
        }
      });
    }
  };

  return (
    <div className="signup">
      <div className="signup__content">
        <h2 className="signup__header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup__input">
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
          <Button inputSignup>Sign Up!</Button>
        </form>
        {emptyCheckModal && (
          <div className="signup__error">
            Please do not leave any inputs blank
          </div>
        )}
        {userModal && (
          <div className="signup__error">
            The username already exists, try again
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
