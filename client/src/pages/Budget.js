import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Button from "../components/Button";
import CategoriesList from "../components/CategoriesList";

function Budget({ userInfo }) {
  const [budget, setBudget] = useState();
  const [categories, setCategories] = useState([]);
  const { id } = useParams(); // getting id to be used for GET request
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get-budget/${id}`) // call to set the budget
      .then((res) => {
        setBudget(res.data[0]);
        axios
          .get(`http://localhost:5000/api/get-categories/${res.data[0].id}`) // call to set the categories of budget
          .then((res) => {
            // console.log(res.data);
            setCategories(res.data);
          });
      })
      .catch((error) => {
        console.error("Error fetching budget:", error);
        setBudget(); // Set budget on error
        setCategories(); // Set categories on error
      });
  }, []);

  console.log("Budget Info: ", budget);
  console.log("Budget Categories: ", categories);

  const addCategory = () => {
    nav(`/add-category/${budget.id}/${budget.budget_name}`);
  };

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
      <Button onClick={addCategory}>Add Category</Button>
      <h3>Categories:</h3>
      <CategoriesList categories={categories} />
    </>
  );
}

export default Budget;
