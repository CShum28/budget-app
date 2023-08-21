import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const nav = useNavigate();

  const handleLogOut = () => {
    console.log("attempting logout");
    return axios
      .post("http://localhost:5000/logout")
      .then(() => {
        nav("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <h1>This is the header</h1>
      {props.userInfo && (
        <div>
          <p>Logged in as: {props.userInfo}</p>
        </div>
      )}

      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
}

export default Header;
