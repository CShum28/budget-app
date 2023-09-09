const express = require("express");
const router = express.Router();
const deleteCategory = require("../db/queries/deleteCategory");

router.delete("/", (req, res) => {
  const { categoryId, budgetId } = req.body;

  deleteCategory(categoryId, budgetId).then(() => {
    return "category deleted";
  });
});

module.exports = router;
