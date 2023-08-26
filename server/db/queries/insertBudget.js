const db = require("../database");

const insertBudget = (userId, budgetName, budgetAmount, startDate, endDate) => {
  const queryString = `INSERT INTO budgets(user_id, budget_name, monthly_income, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  const values = [userId, budgetName, budgetAmount, startDate, endDate];

  console.log(budgetName);
  return db.query(queryString, values).then((res) => {
    // console.log(res.rows);
    return res.rows;
  });
};

module.exports = insertBudget;
