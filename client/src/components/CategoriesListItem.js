import { useState, useEffect } from "react";
import Button from "./Button";
import AddTransactionModal from "./AddTransactionModal";
import TransactionList from "./TransactionList";
import axios from "axios";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]);
  const [transactionModal, setTransactionModal] = useState(false);

  // console.log("CategoryId: ", category.id);
  useEffect(() => {
    // console.log("the id being passed is: ", category.id);
    axios
      .get(`http://localhost:5000/api/get-transactions/${category.id}`)
      .then((res) => {
        setTransactionsList(res.data);
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

  // console.log("##: ", category);

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

          <TransactionList
            categoryId={category.id}
            transactions={transactionsList}
          />
        </>
      )}
    </div>
  );
}

export default CategoriesListItem;
