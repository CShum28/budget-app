import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

function Access() {
  return (
    <>
      <Header />

      <h2>Access</h2>

      <Link to="/login">
        <Button>Login</Button>
      </Link>

      <Link to="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </>
  );
}

export default Access;
