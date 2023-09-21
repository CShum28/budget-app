import { useState, useEffect } from "react";
import Button from "./Button";
import AddTransactionModal from "./AddTransactionModal";
import TransactionList from "./TransactionList";
import ProgressBar from "./ProgressBar";
import axios from "axios";

import "../styles/CategoriesListItem.css";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]); // list of transactions
  const [transactionModal, setTransactionModal] = useState(false); // addTransactionModal
  const [amount, setAmount] = useState(0); // amount current spent on Budget
  const [progressBarPercent, setProgressBarPercent] = useState(null); // percent to be sent to ProgressBar
  const [actualPercent, setActualPercent] = useState(null); // actual percent of amount spent in category

  useEffect(() => {
    // console.log("the id being passed is: ", category.id);
    axios
      .get(`http://localhost:5000/api/get-transactions/${category.id}`)
      .then((res) => {
        const fetchedTransactions = res.data;
        setTransactionsList(fetchedTransactions);

        // calculate the sum of transactions
        const totalAmount = fetchedTransactions.reduce(
          (accumulator, transaction) => accumulator + transaction.amount,
          0
        );

        setAmount(totalAmount);
      });
  }, [category.id]);

  useEffect(() => {
    // Calculate percent based on updated amount and category.max_limit
    const percent = (amount / category.max_limit) * 100;

    // check ensure percent being passed is never over 100
    if (percent > 100) {
      setProgressBarPercent(100);
    } else {
      setProgressBarPercent(percent);
    }

    setActualPercent(percent); // setting the actual percent to be used for determining color of progress bar
  }, [amount, category.max_limit]); // this useEffect will kick in when the amount or category.max_limit changes

  const showTransactions = () => {
    // toggles the list of transactions
    setModal(!modal);
  };

  const toggleTransactionModal = () => {
    // toggles the addTransactionModal
    setTransactionModal(!transactionModal);
  };

  // console.log("##: ", amount);

  return (
    <div>
      <div className="categoriesListItem">
        <div
          className="categoriesListItem__category"
          onClick={showTransactions}
        >
          <p>{category.category}</p>
          <div className="categoriesListItem__category-progress">
            <p>${amount}</p>
            <ProgressBar
              progress={progressBarPercent}
              barColor={actualPercent}
            />
            <p>${category.max_limit}</p>
          </div>
        </div>
        {modal && (
          <div className="categoriesListItem__transaction-modal">
            <div className="categoriesListItem__category-actions">
              {/* <p>Category Actions:</p> */}
              <Button edit onClick={() => toggleEditModal(category)}>
                Edit Category
              </Button>
              <Button delete onClick={() => toggleDeleteModal(category)}>
                Delete Category
              </Button>
            </div>
            <Button
              addTransactionModal
              onClick={() => toggleTransactionModal(category)}
            >
              + Add Transaction
            </Button>
            {transactionModal && (
              <AddTransactionModal
                categoryId={category.id}
                budgetId={category.budgets_id}
              />
            )}
            <TransactionList
              categoryId={category.id}
              transactions={transactionsList}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriesListItem;
