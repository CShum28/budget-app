// PG database client/connection setup
const { Pool } = require("pg");

const database = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const db = new Pool(database);

db.connect().then(() => {
  console.log("Connected to database!");
});

module.exports = db;
