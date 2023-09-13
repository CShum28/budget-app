const express = require("express");
const router = express.Router();
const deleteTransaction = require("../db/queries/deleteTransaction");
const deleteCategoriesTransactions = require("../db/queries/deleteCategoriesTransactions");

router.delete("/", (req, res) => {
  const { categoryId, transactionId } = req.body;

  console.log("hi");

  deleteTransaction(transactionId)
    .then(() => {
      // Return the result of deleteCategoriesTransactions to chain the promises
      return deleteCategoriesTransactions(categoryId, transactionId);
    })
    .then(() => {
      // Respond with a success message when both delete operations are complete
      res.json({ message: "Transaction & CategoriesTransaction Deleted!" });
    })
    .catch((error) => {
      // Handle any errors that occur during the delete operations
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting" });
    });
});

module.exports = router;
