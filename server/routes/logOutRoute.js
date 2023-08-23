const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("## testing if logout route is working");
  // Add functionality to sign out and clear cookies
  req.session = null;
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
