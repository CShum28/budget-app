const express = require("express");
const router = express.Router();
const signUp = require("../db/queries/signUp");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  // console.log(password);
  // need to do a signup check to ensure username being created does not already
  signUp(email, password).then((response) => {
    console.log(response);
    return res.json(response);
  });
});

module.exports = router;
