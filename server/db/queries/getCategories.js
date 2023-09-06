const db = require("../database");

function getCategories(id) {
  const queryString = "SELECT * FROM categories WHERE budgets_id = $1";
  const value = [id];
  return db.query(queryString, value).then((results) => {
    return results.rows;
  });
}

module.exports = getCategories;
