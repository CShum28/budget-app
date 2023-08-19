const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const signUp = require("../db/queries/signUp");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    // using bcrpy to hash password for safety
    console.log("hashed password: ", hash);

    signUp(email, hash).then((response) => {
      console.log(response);
      return res.json(response);
    });
  });
});

module.exports = router;
