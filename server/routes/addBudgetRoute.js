const express = require("express");
const router = express.Router();
const getUserId = require("../db/queries/getUserId");
const insertBudget = require("../db/queries/insertBudget");

router.post("/", (req, res) => {
  const { userEmail, budgetName, budgetAmount } = req.body;

  // grabbing the userId and the using it inside of insertBudget
  getUserId(userEmail).then((userId) => {
    insertBudget(userId, budgetName, budgetAmount).then((results) => {
      console.log("##", results);
      res
        .status(200)
        .json({ message: "Budget inserted successfully", results });
    });
  });
});

module.exports = router;
