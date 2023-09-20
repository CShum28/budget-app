import { useState, useEffect } from "react";
import Button from "./Button";
import AddTransactionModal from "./AddTransactionModal";
import TransactionList from "./TransactionList";
import ProgressBar from "./ProgressBar";
import axios from "axios";

import "../styles/CategoriesListItem.css";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]);
  const [transactionModal, setTransactionModal] = useState(false);
  const [amount, setAmount] = useState(0); // amount current spent on Budget
  const [progressPrecent, setProgressPercent] = useState(null);

  // console.log("CategoryId: ", category.id);
  useEffect(() => {
    // console.log("the id being passed is: ", category.id);
    axios
      .get(`http://localhost:5000/api/get-transactions/${category.id}`)
      .then((res) => {
        const fetchedTransactions = res.data;
        setTransactionsList(fetchedTransactions);

        const totalAmount = fetchedTransactions.reduce(
          (accumulator, transaction) => accumulator + transaction.amount,
          0
        );

        setAmount(totalAmount);

        const percent = (amount / category.max_limit) * 100; // diving amount spent by limit of category to display percentage
        setProgressPercent(percent);
      });
  }, []);

  // console.log("Transactions of CategoryId: ", category.id);
  // console.log("The list of transactions are: ", transactionsList);

  const showTransactions = () => {
    setModal(!modal);
  };

  const toggleTransactionModal = () => {
    setTransactionModal(!transactionModal);
  };

  console.log("##: ", amount);

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
            <ProgressBar progress={progressPrecent} />
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
