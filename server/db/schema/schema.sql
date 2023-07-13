-- Drop and recreate tables
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS budgets CASCADE;
DROP TABLE IF EXISTS transactions_categories_budgets CASCADE;
DROP TABLE IF EXISTS transactions_categories CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  monthly_income INTEGER NOT NULL
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  budgets_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE,
  transaction_categories_id INTEGER REFERENCES transactions_categories(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL
);

CREATE TABLE transactions_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(50) NOT NULL,
  max_limit INTEGER NOT NULL
);

CREATE TABLE transactions_categories_budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  budgets_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE,
  transaction_categories_id INTEGER REFERENCES transactions_categories(id) ON DELETE CASCADE
)