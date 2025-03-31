import express from "express";
import userRouter from "./routers/userRouter.js";
import { connectDB } from "./DBconnect/DBConnect.js";
import cors from "cors";
import transactionRouter from "./routers/transactionRouter.js";
import { auth } from "./middleware/authMiddleware.js";
import { errorHandler } from "./middleware/ErrorHandler.js";

const app = express();
const PORT = process.env.PORT || 10000;

// MONGODB CONNECTION
connectDB();
// CORS Middleware to access backend API
app.use(cors());

// coverted into json file using middleware
app.use(express.json());

// user Endpoint
app.use("/api/v1/users", userRouter);

// transactions endpoints
app.use("/api/v1/transactions", auth, transactionRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Its live NOW",
  });
});

// ERROR HANDLING LOGICS
// 404 page not found
app.use((req, res, next) => {
  const error = new Error("not found");
  error.statusCode = 404;
  next(error);
});

// Global error Handler
app.use(errorHandler);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
