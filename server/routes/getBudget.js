const express = require("express");
const router = express.Router();
const getBudget = require("../db/queries/getBudget");

router.get("/:id", (req, res) => {
  const budgetId = req.params.id;
  console.log(budgetId);
  getBudget(budgetId).then((results) => {
    res.json(results);
  });
});

module.exports = router;
