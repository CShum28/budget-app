const express = require("express");
const router = express.Router();
const updateCategory = require("../db/queries/updateCategory");

router.put("/", (req, res) => {
  const { categoryId, budgetId, category, amount } = req.body;

  updateCategory(categoryId, budgetId, category, amount).then((result) => {
    res.send(result);
  });
});

module.exports = router;
