import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

function Home(props) {
  console.log("userInfo: ", props.userInfo);

  const nav = useNavigate();

  const addNewBudget = () => {
    nav("/add-budget");
  };

  return (
    <>
      <Header userInfo={props.userInfo} />
      <h2>This is the home page</h2>
      <Button onClick={addNewBudget}>Add New Budget!</Button>
    </>
  );
}

export default Home;
