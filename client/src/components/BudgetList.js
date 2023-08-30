import { useState } from "react";
import BudgetListItem from "./BudgetListItem";
import Button from "./Button";
import DeleteModal from "./DeleteModal";
import deleteBudget from "../hooks/deleteBudget";

function BudgetList(props) {
  const [modal, setModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);

  const toggleModal = (budget) => {
    setSelectedBudget(budget); // set the selectBudget info to be used in either Edit or Delete
    setModal(!modal); // toggles the modal that ask to confirm delete
  };

  const confirmDelete = () => {
    console.log("Deleted!");
    deleteBudget(selectedBudget); // this is the
    window.location.reload(false); // refreshes the page
  };

  // this turns the modal on and off
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const budgetList = props.budgetList.map((budget) => {
    return (
      <div>
        <BudgetListItem
          key={budget.id}
          name={budget.budget_name}
          amount={budget.monthly_income}
        />
        <Button>Edit</Button>
        <Button onClick={() => toggleModal(budget)}>Delete</Button>
        {/* clicking this button toggles modal */}
      </div>
    );
  });

  return (
    <>
      <div>{budgetList}</div>;
      {modal && (
        <DeleteModal confirmDelete={confirmDelete} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default BudgetList;
