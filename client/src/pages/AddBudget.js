import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addBudget from "../hooks/addBudget";

import Header from "../components/Header";
import Button from "../components/Button";

function AddBudget(props) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState();

  const [modal, setModal] = useState(false);

  const nav = useNavigate();

  const userEmail = props.userInfo.email; // using props to get email

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === undefined || budget === undefined) {
      setModal(true);
    }
    addBudget(userEmail, name, budget).then((res) => {
      console.log(res);
      nav(`/home/${props.userInfo.id}`);
    });
  };

  return (
    <>
      <Header userInfo={userEmail} />
      <p>ADD BUDGET PAGE</p>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Budget Name:</h3>
          <input
            className=""
            name="budget_name"
            type="text"
            placeholder="Budget name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h3>Monthly Income Amount:</h3>
          <input
            className=""
            name="monthly_income"
            type="number"
            placeholder="Budget amount..."
            value={budget}
            onChange={(e) => {
              setBudget(Number(e.target.value));
            }}
          />
        </div>
        <Button>Add Budget!</Button>
      </form>
      {modal && <p>Please ensure all inputs are filled out properly!</p>}
    </>
  );
}

export default AddBudget;
