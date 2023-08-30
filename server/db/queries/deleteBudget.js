const db = require("../database");

const deleteBudget = (userId, budgetId) => {
  const queryString = "DELETE FROM budgets WHERE user_id = $1 AND id = $2";
  const values = [userId, budgetId];

  return db.query(queryString, values).then(() => {
    return;
  });
};

module.exports = deleteBudget;
