require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Middleware to parse JSON data from request body
app.use(bodyParser.json());

// Use morgan middleware for logging
app.use(morgan("dev"));

// Enable CORS for all routes
app.use(cors());

// Routes for each resource
const loginRoute = require("./routes/loginRoute");
const signUpRoute = require("./routes/signUpRoute");
const emailCheck = require("./routes/emailCheck");

// Resources appl.use
app.use("/login", loginRoute);
app.use("/email-check", emailCheck);
app.use("/sign-up", signUpRoute);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
