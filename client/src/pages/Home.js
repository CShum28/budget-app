import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import BudgetList from "../components/BudgetList";
import axios from "axios";

function Home(props) {
  const [budgetList, setBudgetList] = useState([]);
  const nav = useNavigate();

  const { id } = useParams(); // getting id to be used for GET request

  useEffect(() => {
    axios.get(`/api/get-budgets/${id}`).then((res) => {
      // axios.get(`http://localhost:5000/api/get-budgets/${id}`).then((res) => {
      setBudgetList(res.data);
    });
  }, []);

  const addNewBudget = () => {
    nav("/add-budget");
  };

  return (
    <>
      {/* This displays the user's email at the top */}
      <Header userInfo={props.userInfo} />
      <h2>This is the home page</h2>
      <Button onClick={addNewBudget}>Add New Budget!</Button>
      <BudgetList budgetList={budgetList} />
    </>
  );
}

export default Home;
