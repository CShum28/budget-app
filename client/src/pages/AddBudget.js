import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addBudget from "../hooks/addBudget";

import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/AddBudget.css";

function AddBudget(props) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(0);

  const [modal, setModal] = useState(false);

  const nav = useNavigate();

  const userEmail = props.userInfo.email; // using props to get email

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || budget < 1) {
      // ensures name exists and budget is not less than 1
      setModal(true);
    } else {
      addBudget(userEmail, name, budget).then((res) => {
        console.log(res);
        nav(`/home/${props.userInfo.id}`);
      });
    }
  };

  return (
    <div>
      <Header userInfo={props.userInfo} />
      <div className="addBudget">
        <div className="addBudget__content">
          <p className="addBudget__header">Add New Budget!</p>
          <form onSubmit={handleSubmit}>
            <div className="addBudget__input">
              <p>Budget Name:</p>
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
              <p>Monthly Income:</p>
              <input
                className=""
                name="monthly_income"
                type="number"
                step=".01"
                value={budget}
                onChange={(e) => {
                  setBudget(Number(e.target.value));
                }}
              />
            </div>
            <Button addBudget>Add Budget!</Button>
          </form>
          {modal && <p>Please ensure all inputs are filled out properly!</p>}
        </div>
      </div>
    </div>
  );
}

export default AddBudget;
