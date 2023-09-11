const db = require("../database");

const insertTransaction = (budgetId, transaction, amount, transactionDate) => {
  const stringQuery =
    "INSERT INTO transactions (budgets_id, transaction_name, amount, date) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [budgetId, transaction, amount, transactionDate];

  return db.query(stringQuery, values).then((res) => {
    // console.log("result test: ", res);
    return res.rows;
  });
};

module.exports = insertTransaction;
