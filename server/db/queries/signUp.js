const db = require("../database");

const signUp = (email, password) => {
  const queryString = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;

  const values = [email, password];

  return db.query(queryString, values).then((response) => {
    return response.rows[0];
  });
};

module.exports = signUp;
