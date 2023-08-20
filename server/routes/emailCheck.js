const express = require("express");
const router = express.Router();
const getAllEmails = require("../db/queries/getAllEmails");

router.post("/", (req, res) => {
  const { email } = req.body;
  console.log("checking for: ", email);

  getAllEmails().then((results) => {
    console.log("line 10", results);
    const emails = results.map((users) => users.email);

    // checks if the email user is signing up with already exists or not
    // if it already exists
    if (emails.includes(email)) {
      console.log("Email already exist");
      return res.send({ exists: true });
    } else {
      // if it does not exist
      console.log("Email does not exist");
      return res.send({ exists: false });
    }
  });
});

module.exports = router;
