import { useState, useEffect } from "react";
import Button from "./Button";
import AddTransactionModal from "./AddTransactionModal";
import TransactionList from "./TransactionList";
import axios from "axios";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);

  console.log("CategoryId: ", category.id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get-category-transactions/${category.id}`)
      .then((res) => {
        console.log(res);
      });
  }, []);

  const showTransactions = () => {
    setModal(!modal);
  };

  const toggleTransactionModal = () => {
    setTransactionModal(!transactionModal);
  };

  console.log("##: ", category);

  return (
    <div>
      <p onClick={showTransactions}>
        {category.category} ${category.max_limit}
      </p>

      {modal && (
        <>
          <div>
            <Button onClick={() => toggleEditModal(category)}>Edit</Button>
            <Button onClick={() => toggleDeleteModal(category)}>Delete</Button>
          </div>
          <Button onClick={() => toggleTransactionModal(category)}>
            Add Transaction
          </Button>

          {transactionModal && (
            <AddTransactionModal
              categoryId={category.id}
              budgetId={category.budgets_id}
            />
          )}

          <TransactionList />
        </>
      )}
    </div>
  );
}

export default CategoriesListItem;
