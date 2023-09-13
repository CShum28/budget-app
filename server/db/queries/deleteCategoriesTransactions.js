const db = require("../database");

const deleteCategoriesTransactions = (categoryId, transactionId) => {
  const queryString =
    "DELETE FROM categories_transactions WHERE transactions_id = $1 AND categories_id = $2;";
  const values = [transactionId, categoryId];

  return db.query(queryString, values).then(() => {
    return {
      message: "Categories_Transactions deleted successfully",
      deletedTransactionId: transactionId,
      deletedCategoryId: categoryId,
    };
  });
};

module.exports = deleteCategoriesTransactions;
