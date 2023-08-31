import { useState } from "react";
import Button from "./Button";
import updateBudget from "../hooks/updateBudget";
import "./EditModal.css";

function EditModal({ selectedBudget, toggleModal }) {
  const [name, setName] = useState(selectedBudget.budget_name);
  const [budget, setBudget] = useState(selectedBudget.monthly_income);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBudget();
  };

  return (
    <>
      <div className="edit-modal edit-overlay">
        <p>Edit Budget - {selectedBudget.budget_name}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Budget Name:</p>
            <input
              name="budget_name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <p>Monthly Income</p>
            <input
              name="monthly_income"
              type="number"
              value={budget}
              onChange={(e) => {
                setBudget(Number(e.target.value));
              }}
            />
          </div>
          <Button>Update Budget</Button>
        </form>
        <Button onClick={toggleModal}>Cancel</Button>
      </div>
    </>
  );
  // }
}

export default EditModal;
