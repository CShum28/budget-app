import { Link } from "react-router-dom";
import Button from "../components/Button";

import "../styles/Access.css";

function Access() {
  return (
    <div>
      <div className="access">
        <div className="access__content">
          <p className="access__welcome">Welcome to Budget Buddy!</p>
          <div className="access__buttons">
            <Link to="/login">
              <Button login>Login</Button>
            </Link>
            <Link to="/sign-up">
              <Button signup>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
