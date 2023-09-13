const express = require("express");
const router = express.Router();
const getCategories = require("../db/queries/getCategories");

router.get("/:id", (req, res) => {
  const budgetId = req.params.id;

  getCategories(budgetId).then((results) => {
    res.json(results);
  });
});

module.exports = router;
