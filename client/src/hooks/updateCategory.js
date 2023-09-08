import axios from "axios";

function updateCategory(categoryId, budgetId, category, amount) {
  return axios.put("http://localhost:5000/update-category", {
    categoryId,
    budgetId,
    category,
    amount,
  });
}

export default updateCategory;
