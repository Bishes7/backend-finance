# Finance Tracker (Backend) - MERN Stack

This is the **backend** of the Finance Tracker app, built using **Node.js and Express.js**. It provides APIs for authentication, transactions, and financial tracking.

## Features

- User authentication (JWT, bcrypt)
- CRUD operations for transactions
- MongoDB database with Mongoose
- Secure API with validation
- RESTful API architecture

## Built With

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Authentication
- dotenv (Environment Variables)

## Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Bishes7/backend-finance
   cd finance-tracker-backend
   ```
2. Install dependencies
   npm install

3. Create a .env file and add:
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key

4. start the server
   npm start
5. The API will run on https://backend-finance-kpey.onrender.com

6. API Endpoints
   Method------------------Endpoint-----------Description
   POST---- /api/users/-------- --------------Register a new user
   POST------ /api/users/login ---------------Login and get JWT token
   GET --------/api/transactions -------------Get all user transactions
   POST-------/api/transactions --------------Add a new transaction
   DELETE----- /api/transactions/:id ---------Delete a transaction
