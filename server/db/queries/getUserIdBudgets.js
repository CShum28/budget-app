const db = require("../database");

function getUserIdBudgets(id) {
  const queryString =
    "SELECT * FROM budgets WHERE user_id = $1 ORDER BY id DESC";
  const value = [id];

  return db.query(queryString, value).then((results) => {
    return results.rows;
  });
}

module.exports = getUserIdBudgets;
