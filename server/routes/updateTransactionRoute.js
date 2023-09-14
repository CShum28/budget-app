const express = require("express");
const router = express.Router();
const updateTransaction = require("../db/queries/updateTransaction");

router.put("/", (req, res) => {
  const { transactionId, transactionName, amount, date } = req.body;

  updateTransaction(transactionId, transactionName, amount, date).then(
    (result) => {
      res.send(result);
    }
  );
});

module.exports = router;
