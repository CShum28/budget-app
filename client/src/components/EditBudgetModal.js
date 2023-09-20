import { useState } from "react";
import Button from "./Button";
import updateBudget from "../hooks/updateBudget";
import "../styles/EditModal.css";

function EditBudgetModal({ selectedBudget, toggleModal }) {
  const [name, setName] = useState(selectedBudget.budget_name);
  const [budget, setBudget] = useState(selectedBudget.monthly_income);

  const userId = selectedBudget.user_id; // id of the owner of the budget
  const budgetId = selectedBudget.id; // id of the budget

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBudget(userId, budgetId, name, budget);
    window.location.reload(false); // refreshs page
  };

  return (
    <>
      <div className="budget-modal edit-modal edit-overlay">
        <h3>Edit Budget</h3>
        <form onSubmit={handleSubmit}>
          <div className="budget-modal__input">
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
          <div className="budget-modal__buttons">
            <Button update>Update</Button>
            <Button cancel onClick={toggleModal}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
  // }
}

export default EditBudgetModal;
