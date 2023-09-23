# BUDGET BUDDY

Streamline your finances effortlessly with Budget Buddy! Easily track income, expenses, and savings to take control of your financial future.

# Table of Contents

1. [Getting Started](#getting-started)
2. [PostGreSQL Setup](#postgresql-setup)
3. [Features](#features)
4. [Environment](#environment)
5. [Dependencies](#dependencies)
6. [Interface Images/GIFs](#interface-imagesgifs)

## Getting Started

1. Clone this repo: `git clone git@github.com:CShum28/budget-app.git`.
2. This app uses PostgreSQL - please refer to [PostgreSQL Setup](###PostgreSQL-Setup).
3. Open the server directory `cd server`.
4. Ensure that you are using node version 12 or later: `node -v`.
5. Install the dependencies: `npm i`.
6. Copy the .env file `cp .env.example .env`.
7. If you are using your own PostgreSQL credentials, update the `DB_USER` and `DB_PASS` fields in .env accordingly.
8. Create and seed your database: `npm run db:reset`
9. Run the server: `npm start`.
10. In a separate terminal, open the react app folder: `cd client`.
11. Install the dependencies: `npm i`.
12. Start the React app: `npm start`.
13. The app should launch automatically in your default browser. The app can also be accessed directly at `localhost:[PORT]`. The default port is `3000`.

### PostGreSQL Setup

1. You will require PostgreSQL to use this application; please ensure that it is installed. If not, you can download PostgreSQL [here](https://www.postgresql.org/about/).
2. Start PostgreSQL: `psql` - please note that if you are on WSL, you will need to use the following command first: `startposgresql`.

## Features

1. Sign Up & Login
1. New users can sign up
1. Existing users can login
1. Home Page
1. Add a budget with the following inputs
1. Budget Name
1. Budget Amount
1. Can edit / delete existing budget(s)
1. Budget Page
1. Add categories under budget
1. Category Name
1. Amount
1. Can edit / delete categories
1. Sum of Categories amount will shown
1. Add Transaction under Category
1. Display sum of transactions compared to Category amount
1. Progress bar to show transaction total

## Environment

- Node V12.22.xx or higher

## Dependencies

### Application

- Font Awesome: v6.4.0
- Axios: v1.4.0
- classNames: v2.3.2
- Date-fns: v2.30.0
- React: v18.2.0

### Server

- Bcrypt: v5.1.1
- Body parser: v1.20.2
- Cookie-sessions: v2.0.0
- CORS: v2.8.5
- Dotev: v16.3.1
- Express: v4.18.2
- Morgan: v1.10.0
- Pg: v8.11.1
