const db = require("../database");

const insertBudget = (userId, budgetName, budgetAmount) => {
  const queryString = `INSERT INTO budgets(user_id, budget_name, monthly_income) VALUES ($1, $2, $3) RETURNING *`;
  const values = [userId, budgetName, budgetAmount];

  console.log(budgetName);
  return db.query(queryString, values).then((res) => {
    // console.log(res.rows);
    return res.rows;
  });
};

module.exports = insertBudget;
