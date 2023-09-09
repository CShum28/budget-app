const db = require("../database");

function getBudget(budgetId) {
  const queryString = "SELECT * FROM budgets WHERE id = $1";
  const value = [budgetId];

  return db.query(queryString, value).then((results) => {
    return results.rows;
  });
}

module.exports = getBudget;
