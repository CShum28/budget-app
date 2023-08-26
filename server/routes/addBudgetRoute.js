const express = require("express");
const router = express.Router();
const getUserId = require("../db/queries/getUserId");
const insertBudget = require("../db/queries/insertBudget");

router.post("/", (req, res) => {
  const { userEmail, budgetName, budgetAmount, startDate, endDate } = req.body;
  getUserId(userEmail).then((userId) => {
    insertBudget(userId, budgetName, budgetAmount, startDate, endDate).then(
      (results) => {
        console.log("##", results);
        res
          .status(200)
          .json({ message: "Budget inserted successfully", results });
      }
    );
  });
});

module.exports = router;
