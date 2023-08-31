const express = require("express");
const router = express.Router();
const updateBudget = require("../db/queries/updateBudget");

router.put("/", (req, res) => {
  const { userId, budgetId, name, budget } = req.body;
  console.log(userId);
  console.log(budgetId);
  console.log(name);
  console.log(budget);
  updateBudget(userId, budgetId, name, budget).then((result) => {
    res.send(result);
  });
});

module.exports = router;
