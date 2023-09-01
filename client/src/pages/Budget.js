import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function Budget({ userInfo }) {
  const [budget, setBudget] = useState();
  const { id } = useParams(); // getting id to be used for GET request

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get-budget/${id}`)
      .then((res) => {
        setBudget(res.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching budget:", error);
        setBudget(); // Set budget on error
      });
  }, []);

  console.log(budget);

  return (
    <>
      <Header userInfo={userInfo} />
      <h2>This is the budget page!</h2>
      {budget && ( // needs to be set like this as initally when page first loads budget is undefined
        <>
          <p>Budget Name: {budget.budget_name}</p>
          <p>Budget Amount: {budget.monthly_income}</p>
        </>
      )}
    </>
  );
}

export default Budget;
