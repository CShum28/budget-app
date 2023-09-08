import axios from "axios";

function deleteCategory(category) {
  const categoryId = category.id;
  const budgetId = category.budgets_id;

  return axios
    .delete("http://localhost:5000/delete-category", {
      data: { categoryId, budgetId },
    })
    .catch((error) => {
      console.error("Error deleting category:", error);
    });
}

export default deleteCategory;
