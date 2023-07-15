const express = require("express");
const app = express();
const database = require("./db/database");

app.get("/api", (req, res) => {
  database.getUsersAndPasswords().then((results) => {
    console.log("results", results);
    res.json(results.rows); // doing .row sends the api info
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
