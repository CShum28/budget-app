const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const getLoginInfo = require("../db/queries/getLoginInfo");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  getLoginInfo(email).then((response) => {
    if (!response) {
      return console.log("Email does not exist - try again");
    }
    bcrypt.compare(password, response.password, function (err, result) {
      // checks emails match and password = hash password
      if (response.email === email && result === true) {
        console.log("Login Successful!");
        console.log(response);

        // this is the set the cookie session to be used
        const user = { id: response.id, email: response.email };
        req.session.user = user;
        console.log("## req session: ", req.session.user);
        return res.json(response);
      } else {
        console.log("Password is incorrect");
        return res.json({ password: false });
      }
    });
  });
});

module.exports = router;
