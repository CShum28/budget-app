import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import BudgetList from "../components/BudgetList";
import axios from "axios";
import "../styles/Home.css";

function Home(props) {
  const [budgetList, setBudgetList] = useState([]);
  const nav = useNavigate();

  const { id } = useParams(); // getting id to be used for GET request

  useEffect(() => {
    axios.get(`/api/get-budget-list/${id}`).then((res) => {
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
      <div className="home">
        <Button addBudget onClick={addNewBudget}>
          + Add a budget
        </Button>
        {/* <BudgetList budgetList={budgetList} /> */}
        {budgetList.length === 0 ? (
          <p className="home__no-budget">You do not have any budgets!</p>
        ) : (
          <BudgetList budgetList={budgetList} />
        )}
      </div>
    </>
  );
}

export default Home;
