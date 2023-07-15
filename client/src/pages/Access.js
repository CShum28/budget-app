import { Link } from "react-router-dom";
import Header from "../components/Header";

function Access() {
  return (
    <>
      <Header />

      <h2>Access</h2>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/sign-up">
        <button>Sign Up</button>
      </Link>
    </>
  );
}

export default Access;
