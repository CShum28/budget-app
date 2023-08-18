import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import userSignUp from "../hooks/userSignUp";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    userSignUp(email, password).then((res) => {
      console.log("from client:", res);
      nav("/");
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
    </>
  );
}

export default SignUp;
