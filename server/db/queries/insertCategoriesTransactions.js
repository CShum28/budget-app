const db = require("../database");

const insertCategoriesTransactions = (transactionId, categoryId) => {
  const stringQuery =
    "INSERT INTO categories_transactions (transactions_id, categories_id) VALUES ($1, $2) RETURNING *";
  const values = [transactionId, categoryId];

  return db.query(stringQuery, values).then((res) => {
    // console.log("result test: ", res);
    return res.rows;
  });
};

module.exports = insertCategoriesTransactions;
