const db = require("../database");

function getCategoryTransactions(id) {
  const queryString =
    "SELECT  transactions.id, transactions.transaction_name, transactions.amount, transactions.date FROM transactions JOIN categories_transactions ON transactions.id = categories_transactions.transactions_id WHERE categories_id = $1 ORDER BY transactions.date ASC";
  const value = [id];

  return db.query(queryString, value).then((res) => {
    return res.rows; // returns the specific data
  });
}

module.exports = getCategoryTransactions;
