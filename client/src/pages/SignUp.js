import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import emailCheck from "../hooks/emailCheck";
import userSignUp from "../hooks/userSignUp";

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
    <>
      <Header />

      <h2>Sign Up</h2>

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
        <Button>Sign Up!</Button>
      </form>

      {modal && <div>The username already exists, please try again</div>}
    </>
  );
}

export default SignUp;
