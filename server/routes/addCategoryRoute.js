const express = require("express");
const router = express.Router();
const insertCategory = require("../db/queries/insertCategory");

router.post("/", (req, res) => {
  const { budgetId, category, amount } = req.body;

  insertCategory(budgetId, category, amount).then((results) => {
    console.log("## ", results);
    res
      .status(200)
      .json({ message: "Category inserted successfully", results });
  });
});

module.exports = router;
