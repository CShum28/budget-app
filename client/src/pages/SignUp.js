import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userSignUp from "../hooks/userSignUp";
import "../styles/SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modal, setModal] = useState(false);

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // use emailCheck to see if email already exists or not
    emailCheck(email).then((res) => {
      if (res) {
        // if email already exists
        setModal(true);
      } else {
        // if email does not exist, complete sign up
        userSignUp(email, password).then((res) => {
          console.log("from client:", res);
          nav("/");
        });
      }
    });
  };

  return (
    <div className="signup">
      <div className="signup__content">
        <h2 className="signup__header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup__input">
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
          <Button inputSignup>Sign Up!</Button>
        </form>
        {modal && (
          <div className="signup__error">
            The username already exists, try again
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
