const express = require("express");
const router = express.Router();
const insertTransaction = require("../db/queries/insertTransaction");
const insertCategoriesTransactions = require("../db/queries/insertCategoriesTransactions");

router.post("/", (req, res) => {
  const { categoryId, budgetId, transaction, amount, transactionDate } =
    req.body;

  insertTransaction(budgetId, transaction, amount, transactionDate) // insert into transaction table
    .then((result) => {
      console.log("transaction_id: ", result[0].id);
      console.log("categoryId: ", categoryId);
      console.log("transactions: ", result); // view transaction table results
      return insertCategoriesTransactions(result[0].id, categoryId); // insert into categories_transactions table
    })
    .then((results) => {
      console.log("categories_transactions: ", results); // view categories_transaction table results
      res
        .status(200)
        .json({ message: "Transaction inserted successfully", results });
    });
});

module.exports = router;
