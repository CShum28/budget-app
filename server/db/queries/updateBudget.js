const db = require("../database");

const updateDatabase = (userId, budgetId, name, budget) => {
  const queryString =
    "UPDATE budgets SET budget_name = $1, monthly_income = $2 WHERE user_id = $3 AND id = $4";
  const values = [name, budget, userId, budgetId];

  return db.query(queryString, values).then(() => {
    return "updated budget";
  });
};

module.exports = updateDatabase;
