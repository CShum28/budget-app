import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  const nav = useNavigate();

  const handleImageClick = () => {
    console.log(props.userInfo);
    nav(`/home/${props.userInfo.id}`);
  };

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
      <div className="header">
        <h3 className="header__app-name" onClick={handleImageClick}>
          Budget Buddy
        </h3>
        {props.userInfo && (
          <div className="header__user-info">
            <p className="header__user-info-text">
              Hello {props.userInfo.email}!
            </p>
            <Button onClick={handleLogOut}>Logout</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
