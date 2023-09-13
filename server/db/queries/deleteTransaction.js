const db = require("../database");

const deleteTransaction = (transactionId) => {
  const queryString = "DELETE FROM transactions WHERE transactions.id = $1";
  const value = [transactionId];

  return db.query(queryString, value).then(() => {
    return {
      message: "Transaction deleted successfully",
      deletedTransactionId: transactionId,
    };
  });
};

module.exports = deleteTransaction;
