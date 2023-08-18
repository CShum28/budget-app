import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import userLogin from "../hooks/userLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    userLogin(email, password)
      .then((res) => {
        console.log(res);
        nav("/");
      })
      .catch((error) => {
        console.error("Login failed");
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
    </>
  );
}

export default Login;
