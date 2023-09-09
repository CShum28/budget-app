const db = require("../database");

const insertCategory = (budgetId, category, amount) => {
  const stringQuery =
    "INSERT INTO categories (budgets_id, category, max_limit) VALUES ($1, $2, $3) RETURNING *";
  const values = [budgetId, category, amount];

  return db.query(stringQuery, values).then((res) => {
    console.log(res);
    return res.rows;
  });
};

module.exports = insertCategory;
