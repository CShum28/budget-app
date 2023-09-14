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

  const transactionId = selectedTransaction.id;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(transactionName);
    updateTransaction(transactionId, transactionName, amount, date);
    window.location.reload(false); // refreshes the page
  };

  return (
    <>
      <div className="edit-modal edit-overlay">
        <form onSubmit={handleSubmit}>
          <div>
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
          <Button>Update Transaction</Button>
        </form>
        <Button onClick={toggleModal}>Cancel</Button>
      </div>
    </>
  );
}

export default EditTransactionModal;
