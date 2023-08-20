const db = require("../database");

const getLoginInfo = (user) => {
  const queryString = `SELECT * FROM users WHERE email = $1`;
  const value = [user]; // values must be in an array to pass to query

  return db.query(queryString, value).then((res) => {
    return res.rows[0];
  });
};

module.exports = getLoginInfo;
