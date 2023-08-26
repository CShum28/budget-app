const db = require("../database");

function getUserId(userEmail) {
  const queryString = `SELECT id FROM users WHERE email = $1`;
  const value = [userEmail];

  return db.query(queryString, value).then((res) => {
    // console.log(res.rows[0].id);
    return res.rows[0].id;
  });
}

module.exports = getUserId;
