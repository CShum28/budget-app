const express = require("express");
const router = express.Router();
const getUserIdBudgets = require("../db/queries/getUserIdBudgets");

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  getUserIdBudgets(userId).then((results) => {
    // console.log("##", results);
    res.json(results);
  });
});

module.exports = router;
