const db = require("../database");

const getAllEmails = () => {
  const queryString = `SELECT email FROM users`;

  return db.query(queryString).then((res) => {
    return res.rows;
  });
};

module.exports = getAllEmails;
