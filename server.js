import express from "express";
import userRouter from "./routers/userRouter.js";
import { connectDB } from "./DBconnect/DBCOnnect.js";
import cors from "cors";
import transactionRouter from "./routers/transactionRouter.js";
import { auth } from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 8000;

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

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
