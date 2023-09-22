import { useState } from "react";
import Button from "./Button";
import updateTransaction from "../hooks/updateTransaction";
import DatePicker from "react-datepicker";
import "../styles/EditModal.css";
import "react-datepicker/dist/react-datepicker.css";

function EditTransactionModal({ selectedTransaction, toggleModal }) {
  const [transactionName, setTransactionName] = useState(
    selectedTransaction.transaction_name
  );
  const [amount, setAmount] = useState(selectedTransaction.amount);
  const [date, setDate] = useState(new Date(selectedTransaction.date));

  const [modal, setModal] = useState(false);

  const transactionId = selectedTransaction.id;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(transactionName);

    // checks to ensure inputs are correct
    if (!transactionName || amount < 0.01 || !date) {
      setModal(true);
    } else {
      updateTransaction(transactionId, transactionName, amount, date);
      window.location.reload(false); // refreshes the page
    }
  };

  return (
    <>
      <div className="transaction-modal edit-modal edit-overlay">
        <h3>Edit Transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="transaction-modal__input">
            <p>Transaction</p>
            <input
              name="transaction_name"
              type="text"
              value={transactionName}
              onChange={(e) => {
                setTransactionName(e.target.value);
              }}
            />
            <p>Amount</p>
            <input
              name="amount"
              type="number"
              step="any"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
            <p>Date</p>
            <DatePicker
              name="date"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
          <div className="transaction-modal__buttons">
            <Button update>Update</Button>
            <Button cancel onClick={toggleModal}>
              Cancel
            </Button>
          </div>
        </form>
        {modal && <p>Input fields are incorrect!</p>}
      </div>
    </>
  );
}

export default EditTransactionModal;
