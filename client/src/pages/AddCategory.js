import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import addCategory from "../hooks/addCategory";

function AddCategory(props) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const [modal, setModal] = useState(false); // ensures items are entered in properly

  const { budgetId, budgetName } = useParams(); // Access route parameters using useParams

  const nav = useNavigate();

  const userEmail = props.userInfo.email; // using props to get email

  // Now, you have access to budgetId and budgetName in this component
  console.log("Budget ID:", budgetId);
  console.log("Budget Name:", budgetName);

  const onSubmit = (event) => {
    event.preventDefault();
    if (category === undefined || amount <= 0) {
      setModal(true);
    }
    addCategory(budgetId, category, amount);
    nav(`/budget/${budgetId}`);
  };

  return (
    <>
      <Header userInfo={userEmail} />
      <p>Add Category Page</p>
      <form onSubmit={onSubmit}>
        <div>
          <p>Category Name</p>
          <input
            className=""
            name="category"
            placeholder="Category name..."
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <p>Amount</p>
          <input
            className=""
            name="max_limit"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </div>
        <Button>Add Category</Button>
      </form>
      {modal && <p>Please enter in the input fields correctly!</p>}
    </>
  );
}

export default AddCategory;
