const db = require("../database");

const deleteCategory = (categoryId, budgetId) => {
  console.log("DELETING CATEOGRY 2");
  const queryString =
    "DELETE FROM categories WHERE id = $1 AND budgets_id = $2";
  const values = [categoryId, budgetId];

  return db.query(queryString, values).then(() => {
    return;
  });
};

module.exports = deleteCategory;
