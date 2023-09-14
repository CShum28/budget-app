const db = require("../database");

const updateTransaction = (transactionId, transactionName, amount, date) => {
  const queryString =
    "UPDATE transactions SET transaction_name = $1, amount = $2, date = $3 WHERE transactions.id = $4";
  const values = [transactionName, amount, date, transactionId];

  return db.query(queryString, values).then(() => {
    return "updated transaction";
  });
};

module.exports = updateTransaction;
