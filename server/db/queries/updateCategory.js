const db = require("../database");

const updateCategory = (categoryId, budgetId, category, amount) => {
  const queryString =
    "UPDATE categories SET category = $1, max_limit = $2 WHERE budgets_id = $3 AND id = $4";
  const values = [category, amount, budgetId, categoryId];

  return db.query(queryString, values).then(() => {
    return "updated budget";
  });
};

module.exports = updateCategory;
