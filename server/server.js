require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

// Middleware to parse JSON data from request body
app.use(bodyParser.json());

// Use morgan middleware for logging
app.use(morgan("dev"));

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000", // Replace this with your frontend domain, gives 3000 ability to access backend resources
    credentials: true, // this part sends the cookies to the frontend
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Routes for each resource
const loginRoute = require("./routes/loginRoute");
const emailCheck = require("./routes/emailCheck");
const signUpRoute = require("./routes/signUpRoute");
const logOutRoute = require("./routes/logOutRoute");

// Resources app.use
app.use("/login", loginRoute);
app.use("/email-check", emailCheck);
app.use("/sign-up", signUpRoute);
app.use("/logout", logOutRoute);

// app.post("/logout", (req, res) => {
//   console.log("line46");
//   // req.session = null;
//   req.session.destroy(() => {
//     res.clearCookie("session");
//     res.status(200).json({ message: "Logout successful" });
//   });
// });

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
