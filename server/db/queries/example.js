const db = require("../database");

const getUsersAndPasswords = function () {
  const queryString = `SELECT * FROM users`;

  return db.query(queryString).then((res) => {
    console.log("test", res);
    return res.rows;
  });
};

module.exports = getUsersAndPasswords;
