const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "labber",
  password: 'labber',
  database: "budget_app"
})

const getUsersAndPasswords = function() {
  return pool.query(`SELECT * FROM users`)
    .then(res => {
      return res
    })
}

getUsersAndPasswords()

module.exports = { getUsersAndPasswords };