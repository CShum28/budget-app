const express = require("express");
const router = express.Router();
const getUsersAndPasswords = require("../db/queries/example");

router.get("/", (req, res) => {
  getUsersAndPasswords().then((results) => {
    console.log("results", results);
    res.json(results); // doing .row sends the api info
  });
});

module.exports = router;
