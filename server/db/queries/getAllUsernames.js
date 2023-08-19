const db = require("../database");

const getAllUsernames = () => {
  const queryString = `SELECT username FROM users`;

  return db.query(queryString).then((res) => {
    return res.rows;
  });
};

module.exports = getAllUsernames;
