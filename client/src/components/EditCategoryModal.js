import { useState } from "react";
import Button from "./Button";
import updateCategory from "../hooks/updateCategory";
import "../styles/EditModal.css";

function EditCategoryModal({ selectedCategory, toggleModal }) {
  const [category, setCategory] = useState(selectedCategory.category);
  const [amount, setAmount] = useState(selectedCategory.max_limit);

  const categoryId = selectedCategory.id;
  const budgetId = selectedCategory.budgets_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(category);
    console.log(amount);
    updateCategory(categoryId, budgetId, category, amount);
    window.location.reload(false); // refreshes the page
  };

  return (
    <>
      <div className="edit-modal edit-overlay">
        <p>Edit Category - {selectedCategory.category}</p>
        <form onSubmit={handleSubmit}>
          <div>
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
          <Button>Update Category</Button>
        </form>
        <Button onClick={toggleModal}>Cancel</Button>
      </div>
    </>
  );
}

export default EditCategoryModal;
