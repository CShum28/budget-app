import { useState } from "react";
import Button from "./Button";
import AddTransactionModal from "./AddTransactionModal";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);
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

          {transactionModal && <AddTransactionModal categoryId={category.id} />}
        </>
      )}
    </div>
  );
}

export default CategoriesListItem;
