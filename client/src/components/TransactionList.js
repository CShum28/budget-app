import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionListItem from "./TransactionListItem";
import DeleteModal from "./DeleteModal";
import deleteTransaction from "../hooks/deleteTransaction";

function TransactionList({ categoryId, transactions }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const nav = useNavigate();

  const toggleDeleteModal = (transaction) => {
    setSelectedTransaction(transaction); // set the selectBudget info to be used in either Edit or Delete
    setDeleteModal(!deleteModal); // toggles the modal that ask to confirm delete
  };

  const confirmDelete = () => {
    console.log("Deleted!");
    deleteTransaction(categoryId, selectedTransaction);
    window.location.reload(false); // refreshes the page
  };

  console.log("The selectedTransaction is: ", selectedTransaction);

  const transactionsList = transactions.map((transaction) => {
    return (
      <TransactionListItem
        key={transaction.id}
        transaction={transaction}
        toggleDeleteModal={toggleDeleteModal}
      />
    );
  });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <tbody>{transactionsList}</tbody>
      </table>
      {deleteModal && (
        <DeleteModal
          confirmDelete={confirmDelete}
          toggleModal={toggleDeleteModal}
        />
      )}
      {/* {editModal && (
        <EditBudgetModal
          selectedBudget={selectedBudget}
          toggleModal={toggleEditModal}
        />
      )} */}
    </div>
  );
}

export default TransactionList;
