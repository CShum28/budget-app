const express = require("express");
const router = express.Router();
const signUp = require("../db/queries/signUp");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  signUp(email, password).then((response) => {
    console.log(response);
    return res.json(response);
  });
});

module.exports = router;
