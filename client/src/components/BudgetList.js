import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BudgetListItem from "./BudgetListItem";
import EditBudgetModal from "./EditBudgetModal";
import DeleteModal from "./DeleteModal";
import deleteBudget from "../hooks/deleteBudget";

function BudgetList(props) {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const nav = useNavigate();

  const visitBudget = (budget) => {
    setSelectedBudget(budget);
    nav(`/budget/${budget.id}`);
  };

  const toggleEditModal = (budget) => {
    setSelectedBudget(budget);
    setEditModal(!editModal); // toggles editModal to true
  };

  const toggleDeleteModal = (budget) => {
    setSelectedBudget(budget); // set the selectBudget info to be used in either Edit or Delete
    setDeleteModal(!deleteModal); // toggles the modal that ask to confirm delete
  };

  const confirmDelete = () => {
    console.log("Deleted!");
    deleteBudget(selectedBudget); // this is the
    window.location.reload(false); // refreshes the page
  };

  console.log("current select budget: ", selectedBudget);

  // this turns the modal on and off
  if (deleteModal || editModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const budgetList = props.budgetList.map((budget) => {
    return (
      <BudgetListItem
        key={budget.id}
        budget={budget}
        visitBudget={visitBudget}
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
      />
    );
  });

  return (
    <>
      <table>
        <tr>
          <th>Budget</th>
          <th>Monthly Income</th>
          <th>Actions</th>
        </tr>
        <tbody>{budgetList}</tbody>
      </table>
      {deleteModal && (
        <DeleteModal
          confirmDelete={confirmDelete}
          toggleModal={toggleDeleteModal}
        />
      )}
      {editModal && (
        <EditBudgetModal
          selectedBudget={selectedBudget}
          toggleModal={toggleEditModal}
        />
      )}
    </>
  );
}

export default BudgetList;
