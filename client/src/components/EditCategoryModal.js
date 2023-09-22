import { useState } from "react";
import Button from "./Button";
import updateCategory from "../hooks/updateCategory";
import "../styles/EditModal.css";

function EditCategoryModal({ selectedCategory, toggleModal }) {
  const [category, setCategory] = useState(selectedCategory.category);
  const [amount, setAmount] = useState(selectedCategory.max_limit);

  const [modal, setModal] = useState(false);

  const categoryId = selectedCategory.id;
  const budgetId = selectedCategory.budgets_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!category || amount < 1 || !Number(amount)) {
      // check to ensure category and amount are present
      setModal(true);
    } else {
      updateCategory(categoryId, budgetId, category, amount);
      window.location.reload(false); // refreshes the page
    }
  };

  return (
    <>
      <div className="category-modal edit-modal edit-overlay">
        <h3>Edit Category</h3>
        <form onSubmit={handleSubmit}>
          <div className="category-modal__input">
            <p>Category Name</p>
            <input
              name="category"
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <p>Amount</p>
            <input
              name="max_limit"
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </div>
          <div className="category-modal__buttons">
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

export default EditCategoryModal;
