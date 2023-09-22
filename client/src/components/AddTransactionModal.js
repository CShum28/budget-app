import { useState } from "react";
import Button from "./Button";
import addTransaction from "../hooks/addTransaction";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/AddTransactionModal.css";

function AddTransactionModal({ budgetId, categoryId }) {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionDate, setTransactionDate] = useState(new Date());

  const [modal, setModal] = useState(false);

  console.log(
    "The categoryId that this transaction is getting added to is: ",
    categoryId
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!transaction || amount < 0.01 || !transactionDate) {
      setModal(true);
    } else {
      // categoryId is needed for schema table: categories_transactions
      addTransaction(
        categoryId,
        budgetId,
        transaction,
        amount,
        transactionDate
      );
      window.location.reload(false); // refreshes the page
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="addTransactionModal">
          <div>
            <p>Transaction</p>
            <input
              className=""
              name="transaction_name"
              type="text"
              placeholder="Transaction..."
              value={transaction}
              onChange={(e) => {
                setTransaction(e.target.value);
              }}
            />
          </div>
          <div>
            <p>Amount</p>
            <input
              name="amount"
              type="number"
              step="any" // allowed decimal places
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </div>
          <div>
            <p>Date</p>
            <DatePicker
              name="date"
              selected={transactionDate}
              onChange={(date) => setTransactionDate(date)}
            />
          </div>
          <Button addTransaction>Submit</Button>
        </div>
      </form>
      {modal && (
        <p className="addTransactionModal__error">
          Input fields are incorrect!
        </p>
      )}
    </>
  );
}

export default AddTransactionModal;
