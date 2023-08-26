import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const nav = useNavigate();

  const handleLogOut = () => {
    console.log("attempting logout");
    return axios({
      method: "post",
      url: "http://localhost:5000/logout",
      withCredentials: true, // this sends the cookies to the backend properly
    })
      .then(() => {
        localStorage.clear();
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
          <p>Logged in as: {props.userInfo.email}</p>
          <p>User Id is: {props.userInfo.id}</p>
          <Button onClick={handleLogOut}>Logout</Button>
        </div>
      )}
    </>
  );
}

export default Header;
