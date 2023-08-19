const express = require("express");
const router = express.Router();
const getAllUsernames = require("../db/queries/getAllUsernames");

router.post("/", (req, res) => {
  const { email } = req.body;
  console.log("checking for: ", email);

  getAllUsernames().then((results) => {
    console.log("line 10", results);
    const usernames = results.map((users) => users.username);
    if (usernames.includes(email)) {
      console.log("Email already exist");
      return res.send({ exists: true });
    } else {
      console.log("Email does not exist");
      return res.send({ exists: false });
    }
  });
});

module.exports = router;
