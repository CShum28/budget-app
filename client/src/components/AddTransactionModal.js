import { useState } from "react";
import Button from "./Button";
import addTransaction from "../hooks/addTransaction";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AddTransactionModal({ budgetId, categoryId }) {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionDate, setTransactionDate] = useState(new Date());

  console.log(
    "The categoryId that this transaction is getting added to is: ",
    categoryId
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // categoryId is needed for schema table: categories_transactions
    addTransaction(categoryId, budgetId, transaction, amount, transactionDate);
    window.location.reload(false); // refreshes the page
  };

  return (
    <>
      <h3>Add Transaction!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Transaction</p>
          <input
            className=""
            name="transaction_name"
            type="text"
            placeholder="Transaction Name..."
            value={transaction}
            onChange={(e) => {
              setTransaction(e.target.value);
            }}
          />
          <p>Amount</p>
          <input
            className=""
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
            selected={transactionDate}
            onChange={(date) => setTransactionDate(date)}
          />
        </div>
        <Button>Add Transaction</Button>
      </form>
    </>
  );
}

export default AddTransactionModal;
