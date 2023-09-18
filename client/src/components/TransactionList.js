import { useState } from "react";
import TransactionListItem from "./TransactionListItem";
import EditTransactionModal from "./EditTransactionModal";
import DeleteModal from "./DeleteModal";
import deleteTransaction from "../hooks/deleteTransaction";
import "../styles/TransactionList.css";

function TransactionList({ categoryId, transactions }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleEditModal = (transaction) => {
    setSelectedTransaction(transaction);
    setEditModal(!editModal);
  };

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
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
      />
    );
  });

  // this turns the modal on and off
  if (deleteModal || editModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      {transactionsList.length > 0 && (
        <table className="transactionList">
          <tr className="transactionList__header">
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
          <tbody>{transactionsList}</tbody>
        </table>
      )}
      {deleteModal && (
        <DeleteModal
          confirmDelete={confirmDelete}
          toggleModal={toggleDeleteModal}
        />
      )}
      {editModal && (
        <EditTransactionModal
          selectedTransaction={selectedTransaction}
          toggleModal={toggleEditModal}
        />
      )}
    </div>
  );
}

export default TransactionList;
