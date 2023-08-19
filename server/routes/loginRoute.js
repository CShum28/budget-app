const express = require("express");
const router = express.Router();
const getLoginInfo = require("../db/queries/getLoginInfo");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  getLoginInfo(email).then((response) => {
    if (!response) {
      return console.log("Email or password does not match please try again");
    }
    if (response.email === email && response.password === password) {
      console.log(response);
      return res.json(response);
    }
  });
});

module.exports = router;
