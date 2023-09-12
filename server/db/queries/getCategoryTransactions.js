const db = require("../database");

function getCategoryTransactions(id) {
  const queryString =
    "SELECT transactions.transaction_name, transactions.amount, transactions.date FROM transactions JOIN categories_transactions ON transactions.id = categories_transactions.transactions_id WHERE categories_id = $1";
  const value = [id];

  return db.query(queryString, value).then((res) => {
    console.log(res);
    return res;
  });
}

module.exports = getCategoryTransactions;
