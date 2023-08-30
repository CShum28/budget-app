const express = require("express");
const router = express.Router();
const deleteBudget = require("../db/queries/deleteBudget");

router.delete("/", (req, res) => {
  const { userId, budgetId } = req.body;

  deleteBudget(userId, budgetId).then(() => {
    return "budget deleted";
  });
});

module.exports = router;
