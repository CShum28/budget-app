const express = require("express");
const router = express.Router();
const getCategoryTransactions = require("../db/queries/getCategoryTransactions");

router.get("/:id", (req, res) => {
  const categoryId = req.params.id;

  console.log(req);

  getCategoryTransactions(categoryId).then((results) => {
    res.json(results);
  });
});

module.exports = router;
