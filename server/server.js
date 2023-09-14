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
const addBudgetRoute = require("./routes/addBudgetRoute");
const addCategoryRoute = require("./routes/addCategoryRoute");
const addTransactionRoute = require("./routes/addTransactionRoute");
// delete requests
const deleteBudgetRoute = require("./routes/deleteBudgetRoute");
const deleteCategoryRoute = require("./routes/deleteCategoryRoute");
const deleteTransactionRoute = require("./routes/deleteTransactionRoute");
// put request for updating
const updateBudgetRoute = require("./routes/updateBudgetRoute");
const updateCategoryRoute = require("./routes/updateCategoryRoute");
const updateTransactionRoute = require("./routes/updateTransactionRoute");
// API routes
const getBudgetList = require("./routes/getBudgetListById");
const getBudget = require("./routes/getBudget");
const getCategories = require("./routes/getCategoriesById");
const getCategoryTransactions = require("./routes/getCategoryTransactionsById");

// Resources app.use
app.use("/login", loginRoute);
app.use("/email-check", emailCheck);
app.use("/sign-up", signUpRoute);
app.use("/logout", logOutRoute);
app.use("/add-budget", addBudgetRoute);
app.use("/add-category", addCategoryRoute);
app.use("/add-transaction", addTransactionRoute);
// delete requests
app.use("/delete-budget", deleteBudgetRoute);
app.use("/delete-category", deleteCategoryRoute);
app.use("/delete-transaction", deleteTransactionRoute);
// put request for updating
app.use("/update-budget", updateBudgetRoute);
app.use("/update-category", updateCategoryRoute);
app.use("/update-transaction", updateTransactionRoute);
// APIs for gets
app.use("/api/get-budget-list", getBudgetList); // gets all budgets that belong to a user
app.use("/api/get-budget", getBudget); // get 1 specific budget to be used
app.use("/api/get-categories", getCategories);
app.use("/api/get-transactions", getCategoryTransactions);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
