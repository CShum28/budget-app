-- Drop and recreate tables
DROP TABLE IF EXISTS categories_transactions CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS budgets CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  budget_name VARCHAR(255) NOT NULL,
  monthly_income INTEGER NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  budgets_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE,
  category VARCHAR(255) NOT NULL,
  max_limit INTEGER NOT NULL
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  budgets_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE,
  transaction_name VARCHAR(255) NOT NULL,
  amount INTEGER NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE categories_transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  transactions_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
  categories_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);